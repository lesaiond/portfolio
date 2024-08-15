import { IRef } from "./MainInfo";

const Experience = ({isRef} :IRef) => {
  return (
    <section ref={isRef} className="flex gap-10 flex-col items-start">
      <h2 className="scroll-m-20 font-bold tracking-tight h2-calc  max-md:text-center">
        10 MONTH OF <span className="text-[#343334]">EXPERIENCE</span>
      </h2>
      <div className="flex flex-col w-full max-md:items-center">
        <div className="bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Kwork Studios
          </h4>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Designed and customized pages, including validation and form
            processing to improve user experience. Implemented product costing
            systems and hosted web solutions for clients.
          </p>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Jan 2024 - Fev
          </p>
        </div>
        <div className="bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Tehnikum coding
          </h4>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Mastered the full cycle of frontend development, including HTML,
            CSS, adaptive layout with Figma, JavaScript, React, Redux,
            TypeScript and Docker. Developed several web sites and the final
            project - a freelance platform, receiving the highest grade at the
            diploma defense.
          </p>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Aug 2023 - Fev 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
