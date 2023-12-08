import { goalImage, approachImage, missionImage } from "../index/imports";

export default function AluminiGoals() {
  return (
    <div className="container mx-auto py-16 w-[80%]">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* <!-- goal --> */}
        <div className="bg-secondary-300 px-4 py-8 relative">
          <p className="text-secondary-100 text-2xl mb-4 text-center font-bold">
            Our Goal
          </p>
          <p className="text-primary text-justify">
            Our goal at AlumniNexus is to foster excellence among our alumni
            community. We aim to create a thriving environment where alumni can
            reconnect, engage, and grow both personally and professionally.
            Whether through networking, professional development, or shared
            experiences, we strive to empower our members to reach new heights
            in their careers and beyond.
          </p>
          <span className="absolute -top-8 lg:right-0">
            <img className="w-[30%] h-[30%]" src={goalImage} alt="" />
          </span>
        </div>
        {/* <!-- approach --> */}
        <div className="bg-secondary-300 px-4 py-8 relative">
          <p className="text-secondary-100 text-2xl mb-4 text-center font-bold">
            Our Approach
          </p>
          <p className="text-primary text-justify">
            At AlumniNexus, our approach to alumni engagement is rooted in
            inclusivity and diversity. We believe in a holistic approach that
            caters to the diverse needs and interests of our members. We're
            dedicated to offering a blend of professional development,
            networking, and cultural experiences that contribute to the personal
            and collective growth of our community.
          </p>
          <span className="absolute -top-8 lg:right-0">
            <img className="w-[30%] h-[30%]" src={approachImage} alt="" />
          </span>
        </div>
        {/* <!-- mission --> */}
        <div className="bg-secondary-300 px-4 py-8 relative">
          <p className="text-secondary-100 text-2xl mb-4 text-center font-bold">
            Our Mission
          </p>
          <p className="text-primary text-justify">
            Our mission at AlumniNexus is simple yet profound: to unite alumni
            for lifelong success. We're committed to creating a space where
            alumni can reconnect with their past, engage with their present, and
            envision a brighter future. Through our platform, we aspire to
            foster a sense of belonging, collaboration, and shared achievement
            among our alumni members.
          </p>
          <span className="absolute -top-8 lg:right-0">
            <img className="w-[30%] h-[30%]" src={missionImage} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
