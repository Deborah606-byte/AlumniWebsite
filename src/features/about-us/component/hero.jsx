import { image1 } from "../index/imports";

export default function HeroInfo() {
  return (
    <div className="grid lg:grid-cols-2 py-16 container mx-auto w-[80%]">
      <div>
        <img className="w-[full]" src={image1} alt="" />
      </div>
      <div>
        <h3 className="text-secondary-100 text-4xl mb-8 font-bold">
          Alumni History
        </h3>
        <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
          <span className="text-bold text-2xl">F</span>or decades, our esteemed
          university has been a nurturing ground for brilliant minds and a
          catalyst for countless success stories. Our journey as alumni began
          here, under the welcoming embrace of this institution, where we forged
          friendships, pursued knowledge, and laid the foundation for our
          futures.
        </p>
        <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
          <span className="text-bold text-2xl">A</span>s we take this journey
          forward, we invite you to become an integral part of our evolving
          story. Join us in rekindling old friendships, creating new ones, and
          advancing our professional and personal growth. Together, we'll
          continue to honor the legacy of AlumniNexus, a place where dreams are
          nurtured and bonds are forged.
        </p>
        <p className="text-secondary-200 mb-8 italic font-light leading-relaxed text-justify">
          Welcome to a space where history meets the present, where alumni past
          and present unite to shape the future.
        </p>
        <div className="flex justify-start space-x-8">
          <a href="/auth/signup">
            <button className="text-secondary-200 bg-secondary-100 hover:text-black rounded-full w-[7em] py-2">
              Join Us
            </button>
          </a>
          <a href="/auth/login">
            <button className="rounded-full text-secondary-200 border-2 border-secondary-300 w-[7em] hover:text-hover py-2">
              Sign In
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
