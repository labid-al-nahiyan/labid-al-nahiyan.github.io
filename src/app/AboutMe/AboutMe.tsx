import { Jersey_15 } from "next/font/google"

const jersery = Jersey_15({
  subsets: ["latin"],weight:"400"
})

export default function AboutMe(){
    return(

        <div className="px-[25%] flex min-h-[110vh] items-center  " id ="aboutme">
            <div className="grid justify-center  w-[100%] ">
                <p className={`text-[80px] text-center font-bold pb-10 ${jersery.className}`}>about me </p>

                <div className="text-[20px] space-y-7">
                    <p>
                    Hello, I am Labid Al Nahiyan. I am currently a final year CSE undergrad in BUET. 
                    </p>
                    <p>I love solving complex problems and break them down to simple tasks. I also participate in different hackathons and programming competitions and have achieved some awards. I really love learning new things. I am also a good team player. I love to meet with new people everyday. I believe every people can teach me new things because everyone has different view about life.
                    </p>
                    
                    <p>My life motto is to be simple and humble for rest of my life. I love travling. Traveling makes me flexible in thinking. I absolutely love hiking and trekking. And in my free time I read books or watch movies.
                    </p>
                </div>
            </div>
        </div>
    )
}