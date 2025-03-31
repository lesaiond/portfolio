import { CircleChevronRight, Layers, PanelTop } from "lucide-react";
import { Button } from "./ui/button";
import { IRef } from "./MainInfo";
import { useScrollToElement } from "@/state/scrollToElement";

const Hero = ({ isRef }: IRef) => {
  const updateElementName = useScrollToElement(
    (state) => state.updateElementName
  );

  return (
    <section ref={isRef} className="flex gap-10 flex-col max-md:text-center">
      <div>
        <h1 className="scroll-m-20 h2-calc font-bold tracking-tight">
          FRONTEND <span className="text-[#343334]">DEVOLOPER</span>
        </h1>
        <p className="text-muted-foreground leading-7 max-md:m-auto [&:not(:first-child)]:mt-6 max-w-[480px]">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex gap-5 max-md:justify-center">
        <div className="basis-28">
          <div className="scroll-m-20 text-6xl font-bold tracking-tight lg:text-5xl">
            +12
          </div>
          <div className="text-muted-foreground font-semibold">
            MONTH OF EXPERIENCE
          </div>
        </div>
        <div className="basis-28">
          <div className="scroll-m-20 text-6xl font-bold tracking-tight lg:text-5xl">
            +6
          </div>
          <div className="text-muted-foreground font-semibold">
            PROJECTS COMPLETED
          </div>
        </div>
        <div className="basis-28 hidden">
          <div className="scroll-m-20 text-6xl font-bold tracking-tight lg:text-5xl">
            +12
          </div>
          <div className="text-muted-foreground font-semibold">
            YEARS OF EXPERIENCE
          </div>
        </div>
      </div>
      <div className="flex gap-3 max-md:flex-wrap  max-md:justify-center ">
        <div className="primary-button flex flex-col gap-6 pt-10 p-5 pr-3 max-md:max-w-sm text-left  bg-primary rounded-xl text-white">
          <Layers className="scale-150 text-2xl ml-1" />
          <p className=" leading-7 font-semibold text-2xl">
            FRONTEND DEVELOPER, MOTION DESIGN
          </p>

          <Button
            onClick={() => updateElementName("experience")}
            className="self-end grow "
          >
            <CircleChevronRight className="text-white rounded-[50%] hover:bg-white hover:text-primary" />
          </Button>
        </div>
        <div className="secondary-button flex flex-col gap-6 pt-10 p-5 pr-3 bg-secondary rounded-xl text-black max-md:max-w-sm text-left">
          <PanelTop className="scale-150 text-2xl ml-1" />
          <p className=" leading-7 font-semibold text-2xl">
            TAILWIND CSS, REDUX, ZUSTAND, REACT
          </p>
          <Button
            onClick={() => updateElementName("tools")}
            className="grow self-end"
            variant="secondary"
          >
            <CircleChevronRight className="text-black rounded-[50%] hover:bg-black hover:text-secondary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
