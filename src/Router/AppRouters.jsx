import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "../pages/Projects/Projects";
import Experiences from "../pages/Experiences/Experiences";
import Projects_Detail from "../pages/Projects/Projects_Detail";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const AppRouters = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 500)
        return () => clearTimeout(timeOut);
    }, [location])

    return (
        <>
            {loading && (
                <Loading loading={loading} />
            )}
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/projects-Detail/:id" element={<Projects_Detail />} />
            </Routes>
        </>
    )
}
export default AppRouters