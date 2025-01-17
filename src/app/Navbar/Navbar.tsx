
 

import { Jersey_15 } from "next/font/google";

import Link from "next/link";

const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Navbar({ activeSection }: { activeSection: string }){



    const printPathname = ()=>{
    }

    return(
        <div className={` fixed lg:top-[35vh] lg:left-2 top-[10px] md:left-[15%] left-[10px] ${jersery.className}  text-[25px]`}>
            <div>
                <ul className="lg:border-l-2 border-b-2 lg:border-b-0 flex lg:flex-col text-left ">
                    <li><Link onClick={()=>{printPathname()}} className={`p-4  transition ease-in-out delay-150 ${activeSection=="aboutme"?' font-bold text-[30px] opacity-100':"opacity-50"}`} href="#aboutme">About Me</Link></li>
                    <li><Link onClick={()=>{printPathname()}} className={`p-4  transition ease-in-out delay-150 ${activeSection=="education"?' font-bold text-[30px] opacity-100':"opacity-50"}`} href="#education">Education</Link></li>
                    <li><Link onClick={()=>{printPathname()}} className={`p-4  transition ease-in-out delay-150 ${activeSection=="skill"?'font-bold text-[30px] opacity-100':"opacity-50"}`} href="#skill">Skills</Link></li>
                    <li><Link onClick={()=>{printPathname()}} className={`p-4  transition ease-in-out delay-150 ${activeSection=="achievement"?'font-bold text-[30px] opacity-100':"opacity-50"}`} href="#achievement">Achievements</Link></li>
                    <li><Link onClick={()=>{printPathname()}} className={`p-4  transition ease-in-out delay-150 ${activeSection=="project"?'font-bold text-[30px] opacity-100':"opacity-50"}`} href="#project">Project</Link></li>
                </ul>
            </div>
        </div>
    )
}