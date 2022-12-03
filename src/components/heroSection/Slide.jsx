function Slide(props) {
  return (
    <div className={`carousel-item relative float-left w-full ${props.class}`}>
      <img src={props.image} className="block w-full h-screen" alt="..." />
      <div className="carousel-caption bottom-1/3 md:block absolute text-center">
        <h1 className="text-6xl md:text-8xl">{props.heading}</h1>
        <p>{props.tagline}</p>
      </div>
    </div>
  );
}

export default Slide;
