import { LuSettings2 } from "react-icons/lu";

export const Header = () => {
    return (
        <header className="flex items-start justify-start w-screen h-20 relative top-0 left-0 px-4 sm:px-12 py-4 border-b-2 border-b-main-text">
            <div className="flex gap-2 items-center justify-start w-full h-full py-4">
                <div className=" flex flex-wrap w-8 h-8">
                    <div className="bg-main-text h-4 w-4"></div>
                    <div className="bg-main-blue h-4 w-4"></div>
                    <div className="bg-main-yellow h-4 w-4"></div>
                    <div className="bg-main-orange h-4 w-4"></div>
                </div>
                <h2>GEOMETRIX</h2>
            </div>
            <LuSettings2 size={35} />
        </header>
    )
}