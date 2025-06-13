import { useRouter } from "next/navigation"
import { FaRegCircle, FaRegSquare } from "react-icons/fa"
import { LuTriangle } from "react-icons/lu"

export const Level = () => {

    const router = useRouter();

    return (
        <section>
            <h2 className="w-full">Fase Atual</h2>
            <div className="flex flex-col items-center justify-center h-full w-full gap-6 pt-9">
                <button 
                    className="flex items-center justify-center rounded-full bg-second h-36 w-36"
                    onClick={() => router.push("levels/square")}
                >
                    <FaRegSquare color={"main-text"} size={60} />
                </button>
                <p></p>
                <button 
                    className="flex items-center justify-center rounded-full bg-second h-36 w-36"
                    onClick={() => router.push("levels/circle")}
                    >
                    <FaRegCircle color={"main-text"} size={60} />
                </button>
                <button 
                    className="flex items-center justify-center ounded-full bg-second h-36 w-36"
                    onClick={() => router.push("levels/triangle")}
                >
                    <LuTriangle color={"main-text"} size={60} />
                </button>
            </div>
        </section>
    )
}