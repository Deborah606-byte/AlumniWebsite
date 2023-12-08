export default function Carousel() {
  return (
    <div className="img-slider relative h-screen overflow-hidden">
      <div className="carousel relative flex h-full">
        <div className="slide w-full h-full relative">
          <img
            src="../images/carousel1.PNG"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 text-secondary-200 text-center w-full">
            <h2 className="text-5xl font-semibold uppercase leading-relaxed">
              Alumni Community: <br />
              Where Lifelong <br />
              Bonds Form
            </h2>
          </div>
        </div>

        <div className="slide w-full h-full relative">
          <img
            src="../images/carousel2.PNG"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 text-secondary-200 text-center w-full">
            <h2 className="text-5xl font-semibold uppercase leading-relaxed">
              Crafting Success <br />
              Stories Together
            </h2>
          </div>
        </div>

        <div className="slide w-full h-full relative">
          <img
            src="../images/carousel3.PNG"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 text-secondary-200 text-center w-full">
            <h2 className="text-5xl font-semibold uppercase leading-relaxed">
              Celebrating Memories, <br />
              Creating Futures
            </h2>
          </div>
        </div>
      </div>

      <div className="dots flex justify-center mt-4 absolute bottom-4 left-0 right-0">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
