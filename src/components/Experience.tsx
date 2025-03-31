import { IRef } from "./MainInfo";

const Experience = ({ isRef }: IRef) => {
  return (
    <section ref={isRef} className="flex gap-10 flex-col items-start">
      <h2 className="scroll-m-20 font-bold tracking-tight h2-calc  max-md:text-center">
        12 MONTH OF <span className="text-[#343334]">EXPERIENCE</span>
      </h2>
      <div className="flex flex-col w-full max-md:items-center">
        {/* <a
          href="https://easyprzeprowadzki.pl/"
          className="bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4"
        >
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Easy przeprowadzki
          </h4>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Designed and customized pages, including validation and form
            processing to improve user experience. Implemented product costing
            systems and hosted web solutions for clients.
          </p>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Jan 2025 - Fev 2025
          </p>
        </a> */}
        <a
          href="https://subix.uz"
          className="bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4"
        >
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            SUBIX TEAM
          </h4>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Developed a full-featured marketplace platform including user
            registration, listing creation, purchase history tracking, and
            personalized profile pages. Led implementation of responsive UI/UX
            design with attention to detail and accessibility. Integrated SEO
            optimization best practices to boost discoverability and indexing
            performance. Worked on dynamic routing, state management, and API
            handling to ensure smooth and scalable functionality.
          </p>
          <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Nov 2024 - Apr
          </p>
        </a>
      </div>
    </section>
  );
};

export default Experience;
