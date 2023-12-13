import useEventsLogic from "../logic-hooks/events";
import { audienceImage } from "../../index/imports";
export default function Events({ setEvent }) {
  const { isLoading, events, selectedEventId, toggleDropDown } =
    useEventsLogic();

  if (isLoading) return <p>Loading events....</p>;

  if (!isLoading && events.length === 0) return <p>No Event Found</p>;

  return (
    <div className="container mx-auto py-10">
      <div id="event-container" className="grid lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            className="card shadow-sm relative bg-secondary-300"
            key={event._id}
          >
            <img className="w-full" src={audienceImage} alt="seminar" />
            <div className="absolute top-[49%] left-0 bg-black/50 w-full">
              <ul className="list-disc px-6 py-2">
                <p className="text-secondary-200 font-bold text-xl -mx-6">
                  Speakers
                </p>
                {event.eventSpeaker.map((speaker) => (
                  <li key={speaker} className="text-secondary-200 font-medium">
                    {speaker}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-start space-x-8 mb-4">
              <div className="bg-primary px-4 py-2">
                <p className="text-secondary-200 font-medium">
                  {formatEventDate(event.eventDate)[0]}
                </p>
                <p className="text-secondary-200 font-medium">
                  {formatEventDate(event.eventDate)[1]}
                </p>
              </div>
              <div className="p-2">
                <p className="text-primary font-medium text-2xl mb-2">
                  {event.eventName}
                </p>
                <div className="relative">
                  <span className="absolute">
                    <i class="fa-regular fa-clock text-primary"></i>
                  </span>
                  <p className="pl-6 text-secondary-200 font-semibold text-">
                    {event.eventTime}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-5">
              <span className="dropdown-toggle cursor-pointer">
                <i
                  class="fa-solid fa-ellipsis-vertical text-primary"
                  onClick={() => toggleDropDown(event._id)}
                >
                  """
                </i>
              </span>
              {selectedEventId === event._id && (
                <div className="dropdown-menu absolute right-0 mt-2 w-40 bg-primary rounded-lg shadow-lg border border-secondary-300">
                  <ul className="py-1">
                    <li>
                      <p
                        className="edit-event-form cursor-pointer block px-4 py-2 text-secondary-200 hover:text-hover"
                        onClick={() => setEvent(event)}
                      >
                        Edit Event
                      </p>
                    </li>
                    <li>
                      <p
                        className="edit-event-form cursor-pointer block px-4 py-2 text-secondary-200 hover:text-hover"
                        onClick={() => setEvent(event._id)}
                      >
                        Delete Event
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const formatEventDate = (date) =>
  new Date(date)
    .toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    })
    .split(" ");
