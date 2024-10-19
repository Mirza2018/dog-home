import Image from "next/image";
import logo from "../asserts/dog.png"
const Banner = () => {
    return(
        <div className="mt-4 relative" >
     <Image
        alt="pic"
        src={logo}
        className="w-full h-1/2"
    width={1500}
    hight={1000}
        />
        <h1 className='text-9xl absolute top-7 text-white left-1/4'>
        YOUR BEST
FRIEND DESERVES
THEIR BEST DAY
        </h1>
        </div>
    )
}

export default Banner;