import { useEffect, useRef } from "react";
import { Reval } from "./Reval";
import Projects from "./Projects";
import Hero from "./Hero";
import Experience from "./Experience";
import Tools from "./Tools";
import { useScrollToElement } from "@/state/scrollToElement";

export interface IRef {
  isRef: React.RefObject<HTMLDivElement>;
}

const MainInfo: React.FC = () => {
  const elementName = useScrollToElement((state) => state.elementName)
  const updateElementName = useScrollToElement((state) => state.updateElementName)


  const toolsRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const proRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementName === "tools" && toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (elementName === "experience" && expRef.current) {
      expRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (elementName === "projects" && proRef.current) {
      proRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (elementName === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    updateElementName("")
  }, [elementName, updateElementName]);

  return (
    <div className="main-info grid gap-20 max-w-[700px] top-16 max-md:p-0 max-md:mt-16 max-md:m-auto max-md:max-w-[95vw]">
      <Reval>
        <Hero isRef={homeRef}/>
      </Reval>
      <Reval>
        <Experience isRef={expRef} />
      </Reval>
      <Reval>
        <Projects isRef={proRef} />
      </Reval>
      <Reval>
        <Tools isRef={toolsRef} />
      </Reval>
    </div>
  );
};

export default MainInfo;
