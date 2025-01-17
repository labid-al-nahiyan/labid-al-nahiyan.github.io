import { Jersey_15 } from "next/font/google";

const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function Education(){

    return(
        <div className="px-[15%] min-h-[110vh]"  id="education">
            <div className=" grid justify-center  w-[100%] ">

                <p className={`text-[80px] text-center font-bold py-10 ${jersery.className}`}>Education</p>
                <ul className="steps steps-vertical text-left  w-[100%] ">
                    <li className="step " data-content="●">
                        
                        <div className="text-left">    

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[22px] font-bold"> Bangladesh University of Engineering and Technology</p>
                                    <p className="text-[20px] font-normal">
                                        B.Sc. in Computer Science and Engineering
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[17px] italic font-thin pb-1">Feb 2020 - Present  </p>
                                    <p className="text-[17px] italic font-thin pb-1">Current CGPA: 3.58/4.00</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-[25%_auto] p-5">
                                <p className="font-bold text-[16px]">Notable courses:</p>
                                <div className="grid grid-cols-2">
                                    <ul className="list-disc font-thin">
                                        <li>CSE 305 - Computer Architecture</li>
                                        <li>CSE 307 - Software Engineering</li>
                                        <li>CSE 309 - Compiler Design</li>
                                        <li>CSE 313 - Operating Systems</li>
                                        <li>CSE 317 - Artificial Intelligence</li>
                                        
                                    </ul>
                                    <ul className="list-disc font-thin">
                                        <li>CSE 321 - Computer Networks</li>
                                        <li>CSE 405 - Computer Security</li>
                                        <li>CSE 409 - Computer Graphics</li>
                                        <li>CSE 463 - Introduction to Bioinformatics</li>
                                    </ul>
                                </div>
                            </div>
                                
                            
                            <div className="grid grid-cols-[25%_auto] px-5">
                                <p className="font-bold text-[16px]">Thesis topic:</p>
                                <p> Dense Crowd Tracking (Computer Vision)</p>
                            </div>

                        </div>
                    </li>
                    <li className="step " data-content="●">

                        <div className="text-left w-[100%]">

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[22px] font-bold">Notre Dame College, Dhaka</p>
                                    <p className="text-[20px] font-normal">
                                    Higher Secondary Certificate (HSC), 2019
                                    </p>
                                    <p className="font-bold text-[16px]">- Received board scholarship.</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[17px] italic font-thin pb-1">2019 </p>
                                    <p className="text-[17px] italic font-thin pb-1">GPA: 5.00/5.00</p>
                                </div>
                            </div>

                            
                        </div>
                    
                    

                    </li>
                    <li className="step" data-content="●">
                        
                    <div className="text-left w-[100%]">


                        <div className="flex justify-between">
                            <div>
                                <p className="text-[22px] font-bold">BCIC College, Mirpur, Dhaka</p>
                                <p className="text-[20px] font-normal">
                                Secondary School Certificate (SSC), 2017
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] italic font-thin pb-1">2017 </p>
                                <p className="text-[17px] italic font-thin pb-1">GPA: 5.00/5.00</p>
                            </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}