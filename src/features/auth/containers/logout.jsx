export default function Logout() {
  return (
    <div
      id="logout-modal"
      className="fixed inset-0 z-50 items-center justify-center hidden mt-4"
    >
      <form
        action=""
        method=""
        id="logout-form"
        className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
            Log Out
          </h2>
          <span id="close-logout-form">
            <i className="fa-solid fa-xmark text-primary"></i>
          </span>
        </div>

        {/* <!-- Name --> */}
        <p className="text-secondary-100">Log out of my Dashboard</p>

        {/* <!-- Buttons --> */}
        <div className="flex justify-between mt-2">
          <button
            type="button"
            className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            onclick="cancelLogout()"
          >
            Cancel
          </button>
          <button
            id="dashboard_logout"
            type="button"
            className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
          >
            Log Out
          </button>
        </div>
      </form>
    </div>
  );
}
