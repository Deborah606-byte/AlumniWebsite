export default function HomeDashboard() {
  return (
    <div className="container mx-auto py-16 w-[80%]">
      <h2 className="text-secondary-100 text-3xl font-bold">
        My Alumni Nexus Dashboard
      </h2>
      <div className="grid lg:grid-cols-2 mt-8 gap-16">
        <div>
          <span>
            <i className="fa-solid fa-user text-secondary-200"></i>
          </span>
          <h4 className="text-secondary-100 font-medium py-4 text-2xl">
            Update My Information
          </h4>
          <p className="text-secondary-200 text-justify">
            Keep your profile up-to-date. Showcase your achievements, share your
            journey, and connect with fellow alumni by effortlessly updating
            your personal and professional information.
          </p>

          <div className="mt-8">
            <a href="/dashboard">
              <button className="uppercase bg-secondary-100 hover:scale-110 py-2 px-4 text-center text-secondary-200 rounded-lg">
                Go to dashboard
              </button>
            </a>
          </div>
        </div>
        <div>
          <span>
            <i className="fa-solid fa-users text-secondary-200"></i>
          </span>
          <h4 className="text-secondary-100 font-medium py-4 text-2xl">
            Create Events
          </h4>
          <p className="text-secondary-200 text-justify">
            Take the lead in alumni engagement. Organize and promote events that
            matter to you and your community. From professional development
            workshops to memorable reunions, your Alumni Nexus Dashboard is your
            platform to bring alumni together.
          </p>
        </div>
      </div>
    </div>
  );
}
