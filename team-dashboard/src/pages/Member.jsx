export default function Member({ image, name }) {
    return <div className="member">
        <div className="member_image">
            <img style={{ width: "50px", height: "50px", border: "3px solid black", borderRadius: '50%' }} src={image} alt="" />
        </div>
        <div className="member_name">
            <h3>{name}</h3>
        </div>
    </div>
}