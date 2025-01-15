import Link from "next/link";

export default function Navbar(){
    return(
        <div className="grid justify-center h-[60px] py-5 text-[20px]">
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><Link href="#aboutme">About Me</Link></li>
                <li><Link href="#education">Education</Link></li>
                <li><Link href="#skill">Skills</Link></li>
                <li><Link href="#achievement">Achievements</Link></li>
                <li><Link href="#project">Project</Link></li>
            </ul>
        </div>
    )
}