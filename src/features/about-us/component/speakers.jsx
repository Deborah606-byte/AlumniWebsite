import { speaker1, speaker2, speaker3, speaker4 } from "../index/imports";

export default function Speakers() {
  return (
    <div id="speakers" className="container mx-auto py-16 w-[80%]">
      <h3 className="text-secondary-100 text-4xl font-bold mb-5">
        Our Speakers
      </h3>

      <div className="grid lg:grid-cols-4 gap-10">
        <div>
          <img className="h-[300px] w-[300px]" src={speaker1} alt="" />
          <div className="text-secondary-200 text-center font-light leading-loose">
            <p className="text-secondary-100">Mrs. Eshun Araba Nsia</p>
            <p className="italic">Trailblazer Mentor</p>
            <p>
              "Paving the way for future leaders with wisdom and inspiration.""
            </p>
          </div>
        </div>
        <div>
          <img className="h-[300px] w-[300px]" src={speaker3} alt="" />
          <div className="text-secondary-200 text-center font-light leading-loose">
            <p className="text-secondary-100">Alexandra Akins</p>
            <p className="italic">Innovation Catalyst</p>
            <p>"Mentoring Momentum: Empowering Futures"</p>
          </div>
        </div>
        <div>
          <img className="h-[300px] w-[300px]" src={speaker4} alt="" />
          <div className="text-secondary-200 text-center font-light leading-loose">
            <p className="text-secondary-100">David Patel</p>
            <p className="italic">Leadership Luminary</p>
            <p>"Guiding Aspirations: Nurturing Potential"</p>
          </div>
        </div>
        <div>
          <img className="h-[300px] w-[300px]" src={speaker2} alt="" />
          <div className="text-secondary-200 text-center font-light leading-loose">
            <p className="text-secondary-100">Mrs. Rachel Turner</p>
            <p className="italic">Industry Visionary</p>
            <p>"Empowering Tomorrows: Fostering Growth"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
