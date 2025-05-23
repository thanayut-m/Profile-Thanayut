import { Link } from "react-router-dom"

const CardImage = ({
    labelTitle,
    labelDetail,
    image,
    to,
    tags = [],
}) => {

    const tagColorMap = {
        Express: "bg-amber-200",
        React: "bg-blue-300",
        MySQL: "bg-orange-400",
        Node: "bg-green-300",
        TypeScript: "bg-cyan-300",
    };

    return (
        <Link
            to={to}
            className="card card-side grid grid-cols-3 items-center bg-base-100 hover:bg-base-300 hover:shadow-xl transition delay-100 cursor-pointer shadow-sm p-3"
        >
            <figure className="flex jus rounded-xl overflow-hidden w-full h-[175px]">
                <img
                    src={image}
                    alt="Movie"
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body col-span-2 bg-">
                <h2 className="card-title">{labelTitle}</h2>
                <p>{labelDetail}</p>
                {tags.length > 0 && (
                    <div className="card-actions flex flex-row gap-2 mt-2">
                        {tags.map((tag, idx) => (
                            <label
                                key={idx}
                                className={`font-bold px-3 py-1 rounded-xl ${tagColorMap[tag] || "bg-gray-300"
                                    }`}
                            >
                                {tag}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default CardImage;
