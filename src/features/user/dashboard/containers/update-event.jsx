export default function UpdateEvent() {
  return (
    <div className="update-event-modal fixed inset-0 z-50 justify-center mt-4 bg-white p-8 rounded-lg shadow-2xl hidden max-w-2xl mx-auto">
      <div className="flex justify-between">
        <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
          Update Event
        </h2>
        <span id="">
          <i className="close-update fa-solid fa-xmark text-primary"></i>
        </span>
      </div>
      <form action="" method="">
        {/* <!-- event category --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-1/2 px-2">
            <label
              for="eventCategory"
              className="block text-secondary-100 text-sm font-medium"
            >
              Event Category
            </label>
            <input
              type="text"
              id="eventCategory"
              name="eventCategory"
              className="w-full p-2 rounded-lg border-gray-500 border-2"
              required
            />
          </div>

          <div className="w-1/2 px-2">
            <label
              for="eventName"
              className="block text-secondary-100 text-sm font-medium"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              className="w-full p-2 rounded-lg border-gray-500 border-2"
              required
            />
          </div>
        </div>

        {/* <!-- event description and event speaker --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-1/2 px-2">
            <label
              for="eventSpeaker"
              className="block text-secondary-100 text-sm font-medium"
            >
              Event Speaker
            </label>
            <input
              type="text"
              id="events"
              name="eventSpeaker"
              className="w-full p-2 mb-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
              required
            />
            <input
              type="text"
              id="events"
              name="eventSpeaker"
              className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
              required
            />
          </div>

          <div className="w-1/2 px-2">
            <label
              for="eventDescription"
              className="block text-secondary-100 text-sm font-medium"
            >
              Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        {/* <!-- event Agenda --> */}
        <div className="mb-4 -mx-2">
          <div className="px-2">
            <label
              for="eventAgenda"
              className="block text-secondary-100 text-sm font-medium"
            >
              Event Agenda
            </label>
            <textarea
              id="eventAgenda"
              name="eventAgenda"
              className="w-full block p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        {/* <!-- Date and Time --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-1/2 px-2">
            <label
              for="eventDate"
              className="block text-secondary-100 text-sm font-medium"
            >
              Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
              required
            />
          </div>
          <div className="w-1/2 px-2">
            <label
              for="eventTime"
              className="block text-secondary-100 text-sm font-medium"
            >
              Time
            </label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              className="w-full p-2 rounded-lg border-gray-500 border-2"
              required
            />
          </div>
        </div>

        {/* <!--  Duration and Location--> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-1/2 px-2">
            <label
              for="eventDuration"
              className="block text-secondary-100 text-sm font-medium"
            >
              Duration (hours)
            </label>
            <input
              type="number"
              id="eventDuration"
              name="eventDuration"
              className="w-full p-2 rounded-lg border-gray-500 border-2"
              required
            />
          </div>
          <div className="w-1/2 px-2">
            <label
              for="eventLocation"
              className="block text-secondary-100 text-sm font-medium"
            >
              Location
            </label>
            <input
              type="text"
              id="eventLocation"
              name="eventLocation"
              className="w-full p-2 rounded-lg border-gray-500 border-2"
              required
            />
          </div>
        </div>

        {/* <!-- Buttons --> */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            onclick="cancelEvent()"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
          >
            Update Event
          </button>
        </div>
      </form>
    </div>
  );
}
