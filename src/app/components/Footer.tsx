import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer(){
    return (
        <footer className="bg-[#FAF5F5] py-10 space-y-2 text-gray-800">
            <div className="flex justify-center items-center gap-10 text-xl   ">
            <div><FaFacebook /></div>
             <div><FaInstagram /></div>
             <div><FaTwitter /></div>
             <div><FaLinkedin /></div>
            </div>
             <div className=" ">
                <p className="text-sm font-bold flex justify-center items-center mt-6  ">Copyright  @2020 All Rights Reserved</p>
                 
             </div>
        </footer>
    )
}