import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="bg-[#FAF5F5] pt-16 pb-11 ">
            <div className="flex justify-center  items-center gap-10">
            <ImFacebook2 />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            </div>
            <div>
                <h1 className="flex justify-center mt-2">Copyright ©2020 All rights reserved  </h1>
            </div>
        </div>
    )
}