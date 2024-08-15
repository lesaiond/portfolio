import { MoveUpRight } from "lucide-react";
import { IRef } from "./MainInfo";

const Projects = ({isRef} :IRef) => {
  return (
    <section ref={isRef} className="flex gap-10 flex-col items-start max-md:w-[95vw]">
      <div>
          <h2 className="scroll-m-20 h2-calc font-bold tracking-tight  max-md:text-center">
            FEATURED <span className="text-[#343334]">PROJECTS</span>
          </h2>
      </div>
      <div className="flex gap-5 flex-col w-full">
        <a href="https://lesaiond.github.io/NFT-Marketplace/" className="flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4 justify-between">
          <div className="flex gap-7 max-sm:gap-5">
            <img
              className="w-28 object-cover h-32 object-top rounded"
              src="./nft-marketplace.png"
              alt=""
            />
            <div className="flex flex-col gap-7 justify-center">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-[17px]">
                NFT-Marketplace
              </h3>
              <p className="text-sm text-muted-foreground">
                HTML CSS JS
              </p>
            </div>
          </div>
          <MoveUpRight className="text-primary"/>
        </a>
        <a href="https://lesaiond.github.io/cookies/" className="flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4 justify-between">
          <div className="flex gap-7 max-sm:gap-5">
            <img
              className="w-28 object-cover h-32 object-top rounded"
              src="./cookies.png"
              alt=""
            />
            <div className="flex flex-col gap-7 justify-center">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-[17px]">
                Cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                Angular
              </p>
            </div>
          </div>
          <MoveUpRight className="text-primary"/>
        </a>
        <a href="https://lesaiond.github.io/woomazing/#/shop" className="flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4 justify-between">
          <div className="flex gap-7">
            <img
              className="w-28 object-cover h-32 object-top rounded"
              src="./woomazing.png"
              alt=""
            />
            <div className="flex flex-col gap-7 justify-center">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-[17px]">
                Woomazing
              </h3>
              <p className="text-sm text-muted-foreground">
                React Sass RTK Query
              </p>
            </div>
          </div>
          <MoveUpRight className="text-primary"/>
        </a>
        <a href="https://lesaiond.github.io/delivery/" className="flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4 justify-between">
          <div className="flex gap-7">
            <img
              className="w-28 object-cover h-32 object-top rounded"
              src="./delivery.png"
              alt=""
            />
            <div className="flex flex-col gap-7 justify-center">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-[17px]">
                Delivery food
              </h3>
              <p className="text-sm text-muted-foreground">
                Vue
              </p>
            </div>
          </div>
          <MoveUpRight className="text-primary"/>
        </a>
      </div>
    </section>
  );
};

export default Projects;
