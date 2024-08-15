import { Github, Mail, Send } from "lucide-react";
import { Reval } from "../Reval";

const BasicInfo = () => {
  return (
    <Reval isClass="w-[100vw]">
      <div className="basic-info fixed  max-md:static m-auto top-[6vw] py-7 px-14 rounded-xl bg-neutral-50 flex flex-col items-center gap-6 w-[344px] max-xl:px-5 max-xl:py-7 max-md:w-[95vw]">
        <img
          className="w-72 h-72 rounded-xl object-cover max-md:object-cover max-md:h-80 "
          // src="https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=2048"
          src="../../../public/resume_photo.png"
          alt=""
        />
        <h2 className="text-primary-foreground scroll-m-20 text-3xl text-center font-extrabold tracking-tight">
          Akbar Said
        </h2>
        <p className="text-muted-foreground font-semibold w-full text-center">
          A Frontend Developer who has built numerous dynamic and responsive web
          interfaces.
        </p>
        <div className="flex text-primary-foreground gap-2.5 items-center">
          <a href="https://github.com/lesaiond">
            <Github className="text-primary cursor-pointer" />
          </a>
          <a href="https://t.me/jrDevSaid">
            <Send className="text-primary cursor-pointer" />
          </a>
          <a href="mailto:saidme0325@пmail.com">
            <Mail className="text-primary cursor-pointer" />
          </a>
          <a href="https://tashkent.hh.uz/resume/a146a4a1ff0cc0a9870039ed1f7a504b796f42" className="text-primary cursor-pointer font-medium text-[20px]">
            hh
          </a>
        </div>
      </div>
    </Reval>
  );
};

// height: 640px;
// position: relative;
// width: 344px;

export default BasicInfo;
