import "./heroSection.css";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero3.webp";
import Slide from "./Slide";

function HeroSection() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative -z-50"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden uppercase">
          <Slide
            class="active"
            image={Hero1}
            heading="Mars & Beyond!"
            tagline="The road to making humanity multiplanitary."
          />
          <Slide
            image={Hero2}
            heading="Mars & Beyond!"
            tagline="The road to making humanity multiplanitary."
          />
          <Slide
            image={Hero3}
            heading="Mars & Beyond!"
            tagline="The road to making humanity multiplanitary."
          />
        </div>
      </div>
      {/* Previous Button */}
      <span
        className="controls carousel-control-prev-icon inline-block bg-no-repeat carousel-control-prev absolute top-0 bottom-0 items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 ml-5"
        aria-hidden="true"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      ></span>
      {/* Next Button */}
      <span
        className="controls carousel-control-next-icon inline-block bg-no-repeat carousel-control-next absolute top-0 bottom-0 items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 mr-5"
        aria-hidden="true"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      ></span>
    </div>
  );
}

export default HeroSection;
