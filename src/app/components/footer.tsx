
import { PiUserCircleFill } from "react-icons/pi";

export const Footer = () => {
    return (
        <footer className="flex items-center justify-between w-full border-t-2 border-gray-700 pt-4">
            <div className="flex items-center gap-2">
                <PiUserCircleFill size={30} />
                { localStorage.getItem("name") }
            </div>
            <h3>XP: {localStorage.getItem("xp")}</h3>
        </footer>
    )
}