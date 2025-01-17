import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

import { Jersey_15 } from "next/font/google";
import Link from "next/link";

import me from '@/../public/img/me.jpeg'

const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Top(){

    return(
        <div className="min-h-[calc(110vh-50px)] px-[15%] grid justify-center lg:grid-cols-[40%_60%] items-center">

          
          <div className="flex justify-center">
            <div className="flex w-[250px] lg:w-[100%] justify-center lg:justify-end relative">
              <Image
                  src={me}
                  className=""
                  width={250}
                  height={250}
                  loading="lazy"
                  alt="Picture of the author"
                />
              <div className="border-[1px] absolute right-4 top-4 w-[250px] h-[250px]"></div>
                
              
            </div>
          </div>

          <div className="text-[20px] px-[15px]  ">

            <div className="mb-6">
              <p className="text-[20px]">Hi,
                  I am <span className={`${jersery.className} text-[70px] leading-none`}>Labid</span>
                <br></br>
                I am now a CSE undergraduate student at BUET. I am very passionate about technology. My primary
                interests lie in Software development and Artificial Intelligence. In addition, I am currently working
                on my thesis on computer vision.
              </p>
            </div>

            <div className="text-[40px] flex items-center space-x-4 my-4">
              <div className="">
                <Link target="_blank" href="/Labid_Al_Nahiyan_Resume.pdf" download="Labid_al_nahiyan_Resume" className="border p-2 text-[20px] hover:scale-105 flex rounded-lg">
                  Download CV <MdOutlineFileDownload className="text-[30px]"></MdOutlineFileDownload>
                </Link>
              </div>
              <div>
                <Link target="_blank" href="https://github.com/labid-al-nahiyan"> <IoLogoGithub></IoLogoGithub></Link>
              </div>
              <div>
                <Link target="_blank" href="https://www.linkedin.com/in/labid-al-nahiyan-4a3810198/"> <FaLinkedin></FaLinkedin></Link>
              </div>
              <div>
                <Link target="_blank" href="mailto: labid.nahiyan12@gmail.com"> <GoMail></GoMail></Link>
              </div>
            </div>

          </div>

          

        </div>
    )
}