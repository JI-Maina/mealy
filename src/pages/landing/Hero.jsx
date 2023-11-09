import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const hero = {
    title:
      "Streamlined food orders, seamless for customers, insightful for vendors. ",
    subtitle: "Mealy satisfies cravings effortlessly",
    buttonText: "Get Started",
  };

  return (
    <section className="h-screen w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]">
          {hero.title}
        </h1>

        <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl">
          {hero.subtitle}
        </h2>

        <button
          className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]"
          onClick={() => navigate("/register")}
        >
          {hero.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
