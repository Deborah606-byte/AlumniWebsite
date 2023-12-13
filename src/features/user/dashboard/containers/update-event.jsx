import { Form, SubmitButton } from "../../index/imports";
import {
  SelectInput,
  TextInput,
  TextAreaInput,
  DateInput,
  TimeInput,
  NumberInput,
} from "../components/form-inputs";

export default function UpdateEvent({ event, onClose }) {
  console.log({ event });

  return (
    <div className="fixed inset-0 z-50 items-center justify-center mt-4">
      <Form className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto">
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
          />
          <TextInput label="Event Name" name="eventName" />
        </div>

        {/* <!-- event description and event speaker --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <TextInput label="Event Speaker" name="eventSpeaker" aux />
          {/* <div className="w-1/2 px-2"></div> */}
          <TextAreaInput small label="Description" name="eventDescription" />
        </div>

        {/* <!-- event Agenda --> */}
        <div className="mb-4 -mx-2">
          <TextAreaInput label="Description" name="eventDescription" />
        </div>

        {/* <!-- Date and Time --> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <DateInput label="Date" name="eventDate" />
          <TimeInput label="Time" name="eventTime" />
        </div>

        {/* <!--  Duration and Location--> */}
        <div className="mb-4 flex flex-wrap -mx-2">
          <NumberInput label="Duration (hours)" name="eventDuration" />
          <TextInput label="Location" name="eventLocation" />
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
            Update Event
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}
