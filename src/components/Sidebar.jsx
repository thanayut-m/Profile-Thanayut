import { Link } from "react-router-dom";
import Footer from './Footer';
import { AiTwotoneRedEnvelope } from "react-icons/ai";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const menus = [
    {
        title: "Projects",
        icon: <AiTwotoneRedEnvelope />,
        subMenu: [
            { title: "LatLon to Address", path: "/projects_detail/1" },
            { title: "N-Connect", path: "/projects_detail/2" },
            { title: "To-do List Web Application", path: "/projects_detail/3" },
            { title: "Midnight Report Web Application", path: "/projects_detail/4" },
        ],
    },
];

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({
        Projects: true,
    });

    const toggleMenu = (title) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="w-[375px] h-screen fixed top-0 left-0 flex flex-col justify-between bg-white shadow-lg pt-[50px]">
            <div className="flex flex-col items-center px-3">
                <Link to="/" className="flex justify-center cursor-pointer">
                    <label className="text-2xl font-bold">Thanayut-M</label>
                </Link>

                <div role="tablist" className="flex flex-col space-y-2 mt-4 w-full">
                    {menus.map((menu) => (
                        <div key={menu.title} className="w-full">
                            <div
                                role="tab"
                                className="px-4 py-2 text-xl rounded-md hover:bg-gray-200 cursor-pointer transition delay-50"
                                onClick={() => toggleMenu(menu.title)}
                            >
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center text-2xl">
                                        <div className="bg-amber-400 p-1 rounded">{menu.icon}</div>
                                        <span className="ml-2 text-xl">{menu.title}</span>
                                    </div>
                                    <div
                                        className={`flex items-center transition-transform duration-300 ${openMenus.Projects ? "rotate-180" : "rotate-360"
                                            }`}
                                    >
                                        <FaChevronDown />
                                    </div>
                                </div>
                            </div>

                            {openMenus[menu.title] && (
                                <div className="ml-10 flex flex-col space-y-1 text-base">
                                    {menu.subMenu.map((item) => (
                                        <Link
                                            key={item.title}
                                            to={item.path}
                                            className="hover:underline hover:bg-gray-200 transition delay-50 rounded hover:font-bold px-2 py-1"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Sidebar;
