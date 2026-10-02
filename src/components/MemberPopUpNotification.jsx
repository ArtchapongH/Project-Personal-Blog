import { useAuth } from "../contexts/authenticaition.jsx";

function MemberPopUpNotification(){
    const { notifications } = useAuth();

    if (!notifications?.length) {
        return <p className="px-4 py-4 text-sm text-gray-500">No notifications</p>;
    }

    return(
        <div className="max-h-96 overflow-y-auto">
            {notifications.map((item, index) => (
                <div
                    key={`${item.name}-${index}`}
                    className="w-full flex items-start gap-3 px-4 py-4 hover:bg-gray-50 transition duration-200 text-left">

                    <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-800 text-sm font-semibold text-white">
                        {(item.name || "?").slice(0, 1).toUpperCase()}
                        {item.profile_pic && (
                            <img
                                src={item.profile_pic}
                                alt={item.name}
                                className="absolute inset-0 h-full w-full object-cover"
                                onError={(event) => event.currentTarget.remove()}
                            />
                        )}
                    </span>

                    <div className="flex-1 min-w-0">
                        <p className="text-[15px] leading-5 text-gray-600">
                            <span className="font-bold text-gray-800">{item.name}</span>{" "}
                            Commented on the article.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MemberPopUpNotification;
