import { Link, useLocation } from "react-router-dom";

const nameMap = {
    projects_detail: {
        "1": "LatLon to Address",
        "2": "N-Connect",
        "3": "To-do List Web Application",
        "4": "Midnight Report Web Application",
    }
};

const hiddenSegments = ["projects_detail"];

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // filter hidden paths
    const visibleSegments = pathnames.filter((seg) => !hiddenSegments.includes(seg));

    return (
        <div className="breadcrumbs text-sm">
            <ul className="flex gap-2">
                <li><Link to="/">Home</Link></li>
                {visibleSegments.map((segment, index) => {
                    const originalIndex = pathnames.findIndex((seg, i) =>
                        !hiddenSegments.includes(seg) && visibleSegments[index] === seg &&
                        pathnames.slice(0, i).filter(s => !hiddenSegments.includes(s)).length === index
                    );

                    const prevSegment = pathnames[originalIndex - 1];
                    const isLast = index === visibleSegments.length - 1;
                    const url = "/" + pathnames.slice(0, originalIndex + 1).join("/");

                    const name = nameMap[prevSegment]?.[segment] || decodeURIComponent(segment);

                    return (
                        <li key={url}>
                            {isLast ? <span>{name}</span> : <Link to={url}>{name}</Link>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
