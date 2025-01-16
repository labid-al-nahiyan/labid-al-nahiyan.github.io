import { Jersey_15 } from "next/font/google";
import Link from "next/link";
const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Navbar(){
    return(
        <div className={` fixed top-[35vh] left-2 ${jersery.className}  text-[24px]`}>
            <div>
                <ul className="flex flex-col items-center bg-base-200 rounded-box space-y-5 p-5">
                    <li><Link href="#aboutme">About Me</Link></li>
                    <li><Link href="#education">Education</Link></li>
                    <li><Link href="#skill">Skills</Link></li>
                    <li><Link href="#achievement">Achievements</Link></li>
                    <li><Link href="#project">Project</Link></li>
                </ul>
            </div>
        </div>
    )
}