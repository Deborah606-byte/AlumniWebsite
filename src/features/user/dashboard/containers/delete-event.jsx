export default function DeleteEvent() {
  return (
    <div className="delete-event-modal fixed inset-0 z-50 justify-center mt-4 bg-white p-8 rounded-lg shadow-sm max-w-sm hidden mx-auto">
      <div className="flex justify-between">
        <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
          Delete Event
        </h2>
        <span id="">
          <i className="close-delete fa-solid fa-xmark text-primary"></i>
        </span>
      </div>
      <form id="delete-event" action="" method="POST">
        <p className="text-secondary-100 mb-2">Delete this event:</p>
        <input type="radio" id="yes" name="yes" value="yes" />
        <label for="yes" className="text-primary text-sm font-medium">
          Yes
        </label>
        <br />
        <input type="radio" id="no" name="no" value="no" />
        <label for="yes" className="text-primary text-sm font-medium">
          No
        </label>

        <br />
        <br />
        {/* <!-- Button --> */}
        <button
          type="submit"
          className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
        >
          Delete Event
        </button>
      </form>
    </div>
  );
}
