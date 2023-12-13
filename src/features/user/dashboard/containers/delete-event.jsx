export default function DeleteEvent({ event, onClose }) {
  console.log({ event });

  return (
    <div className="delete-event-modal inset-0 z-50 justify-center  bg-white p-8 rounded-lg mx-auto">
      <div className="flex justify-between">
        <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
          Delete Event
        </h2>
        <span id="">
          <i className="close-delete fa-solid fa-xmark text-primary"></i>
        </span>
      </div>

      <p className="text-secondary-100 mb-2">Delete this event</p>

      {/* <!-- Button --> */}
      <div className="flex justify-between">
        <button
          className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover">
          Delete
        </button>
      </div>
    </div>
  );
}
