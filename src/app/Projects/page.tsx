import { Jersey_15 } from "next/font/google"
import Link from "next/link"

import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";


const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Project(){
    return(
        <div className="px-[25%] min-h-[100vh]" id="project" >
            <div className=" grid justify-center  w-[100%] ">

                <p className={`text-[80px] text-center font-bold pb-10 ${jersery.className}`}>Education</p>
           
                <div className="space-y-9">
                    <div className="grid grid-cols-[40%_auto] ">
                        <div className="flex items-center jus">
                            <Image
                                src={'/img/GeekGlasses.jpg'}
                                className=""
                                width={250}
                                height={250}
                                loading="lazy"
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="space-y-6">

                            <p className="text-[24px] font-bold">NerdHerd</p>
                            <p className="text-[18px] font-normal text-justify ">
                                NerdHerd is a productivity app which focuses on gathering all the productivity features to minimize distraction. Like other learning platforms, our apps mentionable functionalities include collaborative note taking, video calling, article-write, real time quiz, AI chatbot.
                            </p>

                            <div className="flex space-x-4">
                                <p className="rounded-xl p-1 px-3 bg-slate-500">Sveltekit</p>
                                <p className="rounded-xl p-1 px-3 bg-slate-500">Tailwind Css</p>
                                <p className="rounded-xl p-1 px-3 bg-slate-500">PostgreSQL</p>

                            </div>

                            <div className="text-[20px] flex my-[10px] space-x-3">
                                <Link href="https://github.com/TheDeadcoder/nerdherd2ndrun">
                                    <IoLogoGithub></IoLogoGithub>
                                </Link>
                                <Link href="nerdherd-iota.vercel.app">
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-[40%_auto]">
                        <div className="flex items-center jus">
                            <Image
                                src={'/img/shopgenie.jpg'}
                                className=""
                                width={250}
                                height={250}
                                loading="lazy"
                                alt="Picture of the author"
                            />
                        </div>

                        <div className="space-y-6">

                            <p className="text-[24px] font-bold">Shop Genie</p>
                            <p className="text-[18px] font-normal text-justify ">
                            ShopGenie is an AI powered shopping assistant. It harnesses the power of LLM and RAG for finding a product easier than ever. This repository is the main application for the project.
                            </p>

                            <div className="flex space-x-4">
                                <p className="rounded-xl p-1 px-3 bg-slate-500">Sveltekit</p>
                                <p className="rounded-xl p-1 px-3 bg-slate-500">RAG</p>
                                <p className="rounded-xl p-1 px-3 bg-slate-500">vector-database</p>

                            </div>

                            <div className="text-[20px] flex my-[10px] space-x-3">
                                <Link href="https://github.com/yoboBUETGenesis/ShopGenie">
                                    <IoLogoGithub></IoLogoGithub>
                                </Link>
                                <Link href="workspace-lyart-eight.vercel.app">
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[40%_auto]">
                        <div className="flex items-center jus">
                            <Image
                                src={'/img/football_player.jpg'}
                                className=""
                                width={250}
                                height={250}
                                loading="lazy"
                                alt="Picture of the author"
                            />
                        </div>

                        <div className="space-y-6">

                            <p className="text-[24px] font-bold">Football Player</p>
                            <p className="text-[18px] font-normal text-justify ">
                            This was JAVA project for CSE-108 in Level-1/Term-2. Website Builder JAVAFX was used for graphical interface.

                            Features :
                            </p>
                            <ul className="list-disc">
                                <li>Search player from some selected club</li>
                                <li>Search player by name, height, salary etc</li>
                                <li>Buy and sell player between clubs</li>
                            </ul>

                            <div className="flex space-x-4">
                                <p className="rounded-xl p-1 px-3 bg-slate-500">Java</p>
                                <p className="rounded-xl p-1 px-3 bg-slate-500">JavaFx</p>
                                <p className="rounded-xl p-1 px-3 bg-slate-500">Socket i/o</p>

                            </div>

                            <div className="text-[20px] flex my-[10px] space-x-3">
                                <Link href="https://github.com/labid-al-nahiyan/Football_Player">
                                    <IoLogoGithub></IoLogoGithub>
                                </Link>
                                <Link href="https://youtu.be/mWdZydA3f9E">
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}