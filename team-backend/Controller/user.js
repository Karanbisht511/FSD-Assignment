const bcrypt = require("bcrypt");
const { generateToken } = require("../Utils/JWTFunctions");
const User = require("../Model/userSchema");
const UserDetails = require("../Model/userDataSchema");

exports.login = async (req, res) => {
  console.log("/login");

  try {
    const { userID, password } = req.body;
    const userPayload = { userID };
    const result = await User.findOne({ userID });

    if (!result) {
      res.status(400).json({ message: "user not found" });
    } else if (result) {
      const { passwordHash } = result;
      console.log(`----------password:${password}  -----hash:${passwordHash}`);
      bcrypt.compare(password, passwordHash, function (err, isEqual) {
        if (err) {
          console.log("----error:" + err);
        }
        if (isEqual) {
          const token = generateToken(userPayload);
          res.status(200).json({
            success: true,
            isUserAuthenticated: true,
            customerID: userID,
            token,
          });
        } else {
          res.status(400).json({
            success: true,
            isUserAuthenticated: false,
            message: "password is wrong",
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

exports.signup = (req, res) => {
  try {
    console.log(req.body);
    const { id, password } = req.body;
    const saltRounds = 10;
    console.log(`----------password:${password}  -----id:${id}`);

    bcrypt.hash(password, saltRounds, function (err, passwordHash) {
      // Store hash in your password DB.

      if (err) {
        console.log("----error:" + err);
      }

      const newUser = new User({ userID: id, passwordHash });
      newUser.save();
      res.status(200).send("Signup Successfull");
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Some issue occured" + error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "logout successfully" });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

exports.addUserDetails = async (req, res) => {
  try {
    const id = req.tokenDecode.userID;
    console.log(req.body.customer);
    const { name, last_login, balance, transaction } = req.body.customer;

    const result = await User.findOne({ userID: id });

    if (!result) {
      res.status(500).json({ success: false, message: "server error" });
    } else {
      const newUserDetails = new UserDetails({
        "customer.id": id,
        "customer.name": name,
        "customer.last_login": last_login,
        "customer.balance": balance,
        "customer.transaction": transaction,
      });
      newUserDetails.save();
      res.status(200).json({ messag: "details saved" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.retrieveUserDetails = async (req, res) => {
  console.log("-----------Retrieve data");
  try {
    // console.log(req.params);
    const customerID = req.tokenDecode.userID;
    console.log(customerID);
    const result = await UserDetails.findOne({ "customer.id": customerID });
    if (!result) {
      res.status(500).json({ success: false, message: "server error" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};