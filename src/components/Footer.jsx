import { FaSquareGithub } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex w-full rounded-md py-10 justify-center">
            <nav>
                <div className="grid grid-flow-col gap-3">
                    <Link
                        to="https://github.com/thanayut-m"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[40px] text-gray-600"
                    >
                        <FaSquareGithub />
                    </Link>
                    <Link
                        to="https://line.me/ti/p/~kuka50"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[40px] text-green-500"
                    >
                        <FaLine />
                    </Link>
                </div>
            </nav>
        </footer>
    )
}
export default Footer