import { IRef } from "./MainInfo";

const Tools = ({isRef} :IRef) => {
  return (
    <section ref={isRef} className="flex gap-10 flex-col items-start mb-12">
      <div>
        <h2 className="scroll-m-20 font-bold tracking-tight h2-calc  max-md:text-center">
          PREMIUM <span className="text-[#343334]">TOOLS</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-md:w-[95vw] max-sm:grid-cols-1">
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://avatars.mds.yandex.net/i?id=0d41d4c60b216e87b66afc466afa3e9f_l-12644621-images-thumbs&n=13"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              React
            </h3>
            <p className="text-sm text-muted-foreground">UI Library</p>
          </div>
        </div>
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://www.filepicker.io/api/file/BaS5HENZTbqdPlXVdLLA"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              TypeScript
            </h3>
            <p className="text-sm text-muted-foreground">Typed JavaScript</p>
          </div>
        </div>


        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://docs.pmnd.rs/zustand.ico"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Zustand
            </h3>
            <p className="text-sm text-muted-foreground">State Management</p>
          </div>
        </div>
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://smartshop124.ru/wp-content/uploads/8/4/e/84e7df1998c453e4cdf242cff4519d91.jpeg"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Git
            </h3>
            <p className="text-sm text-muted-foreground">Version Control</p>
          </div>
        </div>
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://cdn.brandfetch.io/id2alue-rx/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1714556222178"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Next.js
            </h3>
            <p className="text-sm text-muted-foreground">Framework</p>
          </div>
        </div>
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 rounded"
            src="https://uploads-ssl.webflow.com/5eacc8815c6b73d93d13b2f5/5ed819a41bec6275eade8334_Redux.jpeg"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Redux
            </h3>
            <p className="text-sm text-muted-foreground">State Management</p>
          </div>
        </div>

        
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://avatars.mds.yandex.net/i?id=ea5c9cc34f8bebe4cc636626fc701cb6_l-5869993-images-thumbs&ref=rim&n=13&w=934&h=921"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Tailwind
            </h3>
            <p className="text-sm text-muted-foreground">CSS Framework</p>
          </div>
        </div>
        <div className="items-center gap-5 flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4">
          <img
            className="w-10 h-10 object-cover rounded"
            src="https://assets.ithillel.ua/images/blog/cover/_transform_blogSplashSimple_desktop_2x/14235/7d69ade2570ddc27d518e5475d1967c6.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              SASS
            </h3>
            <p className="text-sm text-muted-foreground">CSS Framework</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
