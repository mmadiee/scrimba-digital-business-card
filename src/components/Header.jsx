import profile from "../img/DemiMae.png"

export default function Header() {
    return (
        <>
            <img src={profile} className="profile" style={{ borderRadius: "50%" }} />
        </>
    );
}
