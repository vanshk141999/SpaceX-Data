import "./heroSection.css";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero3.webp";

function Section() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative -z-50"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden uppercase">
          <div className="carousel-item active relative float-left w-full">
            <img src={Hero1} className="block w-full h-screen" alt="..." />
            <div className="carousel-caption bottom-1/3 md:block absolute text-center">
              <h1 className="text-6xl md:text-8xl">Mars & Beyond</h1>
              <p>The road to making humanity multiplanitary.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={Hero2} className="block w-full h-screen" alt="..." />
            <div className="carousel-caption bottom-1/3 md:block absolute text-center">
              <h1 className="text-6xl md:text-8xl">Mars and Beyond!</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={Hero3} className="block w-full h-screen" alt="..." />
            <div className="carousel-caption bottom-1/3 md:block absolute text-center">
              <h1 className="text-6xl md:text-8xl">Mars and Beyond!</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
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

export default Section;
