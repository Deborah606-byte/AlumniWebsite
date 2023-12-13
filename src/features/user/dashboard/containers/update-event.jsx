import { Form, SubmitButton } from "../../index/imports";
import {
  SelectInput,
  TextInput,
  TextAreaInput,
  DateInput,
  TimeInput,
  NumberInput,
} from "../components/form-inputs";
import useUpdateEventLogic from "../logic-hooks/update-event";

export default function UpdateEvent({ event, onClose }) {
  const { isLoading, values, handleInputChange, handleSubmit } =
    useUpdateEventLogic({ event, closeModal: onClose });
  const {
    eventCategory,
    eventName,
    eventSpeaker,
    eventSpeaker_aux,
    eventAgenda,
    eventDescription,
    eventDate,
    eventTime,
    eventDuration,
    eventLocation,
  } = values;

  return (
    <div className="fixed inset-0 z-50 items-center justify-center mt-4">
      <Form
        className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
            Update Event
          </h2>
          <span id="">
            <i className="close-update fa-solid fa-xmark text-primary"></i>
          </span>
        </div>
        {/* <!-- event category --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <SelectInput
            label="Event Categories"
            name="eventCategory"
            options={[
              { name: "None", value: "None" },
              { name: "Networking", value: "Networking" },
              { name: "Campus Events", value: "Campus Events" },
              {
                name: "Professional Development",
                value: "Professional Development",
              },
            ]}
            onChange={handleInputChange}
            defaultValue={eventCategory}
          />
          <TextInput
            label="Event Name"
            name="eventName"
            value={eventName}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- event description and event speaker --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <TextInput
            aux
            label="Event Speaker"
            name="eventSpeaker"
            value={eventSpeaker}
            aux_value={eventSpeaker_aux}
            onChange={handleInputChange}
          />
          {/* <div className="w-1/2 px-2"></div> */}
          <TextAreaInput
            small
            label="Description"
            name="eventDescription"
            value={eventDescription}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- event Agenda --> */}
        <div className="mb-4 -mx-2">
          <TextAreaInput
            label="Agenda"
            name="eventAgenda"
            value={eventAgenda}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- Date and Time --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <DateInput
            label="Date"
            name="eventDate"
            value={eventDate}
            onChange={handleInputChange}
          />
          <TimeInput
            label="Time"
            name="eventTime"
            value={eventTime}
            onChange={handleInputChange}
          />
        </div>

        {/* <!--  Duration and Location--> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <NumberInput
            label="Duration (hours)"
            name="eventDuration"
            value={eventDuration}
            onChange={handleInputChange}
          />
          <TextInput
            label="Location"
            name="eventLocation"
            value={eventLocation}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- Buttons --> */}
        <div className="flex justify-between">
          <button
            className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            onClick={onClose}
          >
            Cancel
          </button>
          <SubmitButton clx="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover">
            {isLoading ? "Loading..." : "Edit Event"}
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}
