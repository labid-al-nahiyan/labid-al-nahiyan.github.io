import { Jersey_15 } from "next/font/google"

const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Achievements(){
    return(
        <div className="px-[15%] flex min-h-[110vh] items-center " id="achievement">
            <div className="grid justify-center  w-[100%] ">
                <p className={`text-[80px] text-center font-bold pb-10 ${jersery.className}`}>Achievements</p>

                    <ul className="list-disc space-y-7">
                        <li>
                            <div>
                                <p className="text-[24px] font-bold">Champion</p>
                                <p className="text-[20px] font-normal">OpenApi Hackathon (2024)</p>
                                <p className="text-[20px] font-normal">11st National ICT Fest, IUT</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="text-[24px] font-bold">Rank 7 (BUET Fast&Furious)</p>
                                <p className="text-[20px] font-normal">SEC Inter University Junior Programming Contest 2022</p>
                            </div>
                        </li>
                    </ul>

            </div>
        </div>
    )
}