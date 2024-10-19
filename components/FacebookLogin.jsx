import { FaFacebook } from "react-icons/fa"

const FacebookLogin =()=>{

    const handleFacebook=()=>{

    }

    return(
        <div className=" mb-2">
            <button onClick={handleFacebook} className="btn w-full"><FaFacebook className="text-blue-600 text-2xl" />Login With Facebook</button>
        </div>
    )
}
export default FacebookLogin