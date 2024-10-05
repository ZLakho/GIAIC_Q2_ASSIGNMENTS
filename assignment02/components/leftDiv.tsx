import doll from "../Images/doll-removebg-preview.png"
import Image from 'next/image';

const LeftDiv = () => {
    return (
        <div className="w-3/5 h-lvh bg-red-100 text-4xl font-bold text-center">
            <br /><br /><br /><br />
            <p className="text-8xl">Hi, I'm <span className="text-red-700">Zainab Lakho</span></p>
            <br />
            <h3>An undergraduate Computer System Engineering student at Dawood<br />University Of Engineering and Technology</h3>
        </div>
    );
}

const RightDiv = () => {
    return (
        <div className="w-2/5 h-lvh bg-red-50 flex justify-center items-center ">
            <Image src={doll} alt="Profile" className="w-3/4 h-auto object-cover " />
        </div>
    );
}

const CombinedDiv = () => {
    return (
        <div className="flex">
            <LeftDiv />
            <RightDiv />
        </div>
    );
}

export default CombinedDiv;
