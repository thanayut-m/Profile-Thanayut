import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="w-[450px] h-screen fixed top-0 left-0 flex flex-col items-center bg-white shadow-lg mt-[50px]">
            <label className="text-3xl font-bold">Thanayut Mungumklang</label>
            <div role="tablist" className="flex flex-col space-y-2 mt-4">
                {/* <Link
                    to='/experiences'
                    role="tab"
                    className="px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                >
                    Experience
                </Link> */}
                <Link
                    to='/'
                    role="tab"
                    className="px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                >
                    Projects
                </Link>
            </div>
        </div>
    )
}
export default Sidebar