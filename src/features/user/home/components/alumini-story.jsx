import { sameshun, gallery } from "../../index/imports";
export default function AluminiStory() {
  return (
    <>
      <div className="container mx-auto py-16 w-[80%]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative">
            <img className="h-full w-[70%]" src={sameshun} alt="Story" />
            <p className="absolute top-[92%] text-secondary-200 text-3xl font-bold">
              Samuella Eshun
            </p>
          </div>
          <div>
            <h4 className="text-secondary-100 text-3xl font-bold mb-8">
              Alumni Interview
            </h4>
            <p className="text-secondary-200 font-light text-xl text-justify leading-relaxed">
              Driven by her passion for education, Samuella founded a
              scholarship program, providing underprivileged students with
              access to quality education. Her commitment to philanthropy earned
              her recognition, with accolades celebrating her contributions to
              both the business world and the community.
              <br />
              <br />
              Today, Samuella Eshun continues to shape tomorrow's leaders. As a
              sought-after speaker at AlumniNexus events, she shares insights,
              lessons, and the guiding principle that fueled her success:
              "Empower others, and you'll find empowerment in return."
            </p>
            <div className="mt-8 text-center">
              <a href="">
                <button className="bg-secondary-300 hover:text-hover py-2 px-24 text-center text-secondary-200">
                  View Samuella's Story
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- gallery --> */}
      <div className="container mx-auto py-16 w-[80%]">
        <img src={gallery} alt="" />
      </div>
    </>
  );
}
