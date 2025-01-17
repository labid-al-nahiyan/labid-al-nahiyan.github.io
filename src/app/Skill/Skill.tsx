import { Jersey_15 } from "next/font/google"
import { TbBrandCpp } from "react-icons/tb";
import { FaPython, FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiFastapi, SiMongodb, SiPostman } from "react-icons/si";
import { RiSvelteFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";


const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Skill(){
    return(
        <div className="px-[15%] flex min-h-[110vh] items-center " id="skill">
            <div className="grid justify-center  w-[100%] ">
                <p className={`text-[80px] text-center font-bold pb-10 ${jersery.className}`}>Skills</p>

                <div className="grid grid-cols-[30%_auto] items-center space-x-7 my-2">
                    <p  className="text-[24px] font-bold ">Language</p>
                    {/* CPP Typescript Python Java */}
                    <div className="text-[70px] flex space-x-4 border-l-2 pl-4">
                        <TbBrandCpp></TbBrandCpp>
                        <FaPython></FaPython>
                        <BiLogoTypescript></BiLogoTypescript>
                        <FaJava></FaJava>
                    </div>
                </div>
                <div className="grid grid-cols-[30%_auto] items-center space-x-7 my-2">
                    <p className="text-[24px] font-bold ">Frontend</p>
                    {/* React Next Svelt */}
                    <div className="text-[70px] flex space-x-4 border-l-2 pl-4">
                        <FaReact></FaReact>
                        <SiNextdotjs></SiNextdotjs>
                        <RiSvelteFill></RiSvelteFill>
                    </div>
                </div>
                <div className="grid grid-cols-[30%_auto] items-center space-x-7 my-2">
                    <p className="text-[24px] font-bold ">Backend</p>

                    {/* Nodejs Fast api */}
                    <div className="text-[70px] flex space-x-4 border-l-2 pl-4">
                        <DiNodejs></DiNodejs>
                        <SiFastapi></SiFastapi>
                    </div>
                </div>
                <div className="grid grid-cols-[30%_auto] items-center space-x-7 my-2">
                    <p className="text-[24px] font-bold ">Data System</p>
                    <div className="text-[70px] flex space-x-4 border-l-2 pl-4">
                        <BiLogoPostgresql></BiLogoPostgresql>
                        <SiMongodb></SiMongodb>
                    </div>
                </div>
                <div className="grid grid-cols-[30%_auto] items-center space-x-7 my-2">
                    <p className="text-[24px] font-bold ">Tools</p>
                    <div className="text-[70px] flex space-x-4 border-l-2 pl-4">
                        <FaGitAlt></FaGitAlt>
                        <SiPostman></SiPostman>
                    </div>
                </div>
            </div>
        </div>
    )
}