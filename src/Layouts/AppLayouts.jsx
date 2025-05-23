import Breadcrumbs from "../components/Breadcrumbs"
import Sidebar from "../components/Sidebar"

const AppLayouts = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-[375px] flex-1 bg-gray-100 min-h-screen p-6">
                {children}
            </div>
        </div>
    )
}
export default AppLayouts