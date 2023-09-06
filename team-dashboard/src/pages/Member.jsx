export default function Member({ image, name }) {
    return <div className="member">
        <div className="member_image">
            <img src={image} alt="" />
        </div>
        <div className="member_name">
            <h3>{name}</h3>
        </div>
    </div>
}