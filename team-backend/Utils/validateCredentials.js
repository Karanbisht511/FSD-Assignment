exports.areValidCredentials = (userID,password) => {
console.log(userID+" "+password);
  if (password.length < 8 || password.length > 20) {
    console.log("------password");
    // errorList.push("Password should have length between 8 and 20")
   return false;
  }
  if (userID.length < 8 || userID.length > 20) {
    console.log("------userID");
    // errorList.push("userID should have length between 8 and 20")
    return false;
  }
  
  return true
};
