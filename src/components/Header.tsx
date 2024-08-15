import { Briefcase, Folder, Home, Wrench } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useScrollToElement } from "@/state/scrollToElement";

const Header = () => {

  const updateElementName = useScrollToElement((state) => state.updateElementName)
  return (
    <div className="px-5 py-2 flex justify-center items-center gap-5 bg-muted my-12 round rounded-xl w-72 mx-auto">
      <Home className="cursor-pointer" onClick={() => updateElementName("home")}/>
      <Briefcase className="cursor-pointer" onClick={() => updateElementName("experience")}/>
      <Folder className="cursor-pointer" onClick={() => updateElementName("projects")}/>
      <Wrench className="cursor-pointer" onClick={() => updateElementName("tools")}/>
      <ModeToggle/>
    </div>
  );
};

export default Header;
