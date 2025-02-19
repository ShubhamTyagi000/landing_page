import { useParams } from "react-router-dom";

export default function User() {
    let {userId} = useParams()
    
    return (
        <div className="bg-orange-500 text-black items-center text-3xl py-5">
            User: {userId}
        </div>
    )
}