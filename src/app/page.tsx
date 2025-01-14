import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-cols-[25%_auto] border-yellow-50 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-white">
        <div>
          <Image
            src={'/img/me.jpeg'}
            className=" rounded-full"
            width={250}
            height={250}
            loading="lazy"
            alt="Picture of the author"
          />
        </div>
        <div>

        </div>
      </div>
      <div className="text-white min-h-[100%]  border-white border-2 w-[100%]">

        <div role="tablist" className="tabs tabs-lg tabs-bordered min-h-[100%] min-w-[100%] border-white border-2">
          <input
            type="radio" 
            name="my_tabs_2" 
            role="tab" 
            className="tab" 
            aria-label="Tab 1" 
          />
          <div role="tabpanel" className="tab-content h-[100%] bg-base-100 border-base-300 rounded-box p-6">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab w-[30%]"
            aria-label="Tab 2"
            defaultChecked 
          />
          <div role="tabpanel" className="tab-content h-[100%] bg-base-100 border-base-300 rounded-box p-6">
            Tab content 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quae dae ut sint, libero obcaecati dolorum ipsa ex esse nulla nam quis consequatur velit corporis placeat fugiat architecto inventore, atqudadae ut sint, libero obcaecati dolorum ipsa ex esse nulla nam quis consequatur velit corporis placeat fugiat architecto inventore, atque dolor. Sint ex veniam saepe molestias ea inventore officia laudantium obcaecati. Et suscipit id quidem sapiente obcaecati delectus possimus qui odio accusamus porro, vero repellendus reiciendis rem ab cumque beatae enim laboriosam, praesentium ullam? Inventore unde e ut sint, libero obcaecati dolorum ipsa ex esse nulla nam quis consequatur velit corporis placeat fugiat architecto inventore, atque dolor. Sint ex veniam saepe molestias ea inventore officia laudantium obcaecati. Et suscipit id quidem sapiente obcaecati delectus possimus qui odio accusamus porro, vero repellendus reiciendis rem ab cumque beatae enim laboriosam, praesentium ullam? Inventore unde e dolor. Sint ex veniam saepe molestias ea inventore officia laudantium obcaecati. Et suscipit id quidem sapiente obcaecati delectus possimus qui odio accusamus porro, vero repellendus reiciendis rem ab cumque beatae enim laboriosam, praesentium ullam? Inventore unde quas nam mollitia. Porro commodi culpa eos hic aut repudiandae ut sint, libero obcaecati dolorum ipsa ex esse nulla nam quis consequatur velit corporis placeat fugiat architecto inventore, atque dolor. Sint ex veniam saepe molestias ea inventore officia laudantium obcaecati. Et suscipit id quidem sapiente obcaecati delectus possimus qui odio accusamus porro, vero repellendus reiciendis rem ab cumque beatae enim laboriosam, praesentium ullam? Inventore unde eligendi aliquid vero, expedita dignissimos delectus nihil mollitia asperiores, quidem similique fugiat sapiente adipisci est at illum consequuntur in earum, sed dolores tempora optio quas?
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
          <div role="tabpanel" className="tab-content h-[100%]  bg-base-100 border-base-300 rounded-box p-6">
            Tab content 3
          </div>
        </div>


      </div>
    </div>
  );
}
