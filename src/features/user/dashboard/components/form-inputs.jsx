export function SelectInput(props) {
  const { label, name, options, onChange } = props;
  return (
    <div className="w-1/2 px-2">
      <label
        for={name}
        className="block text-secondary-100 text-sm font-medium"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full p-2 rounded-lg border-gray-500 border-2"
        onChange={onChange}
      >
        {options.map(({ name, value }) => (
          <option key={name} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextInput(props) {
  const { label, name, value, onChange, aux } = props;
  return (
    <div className="w-1/2 px-2">
      <label
        htmlFor={name}
        className="block text-secondary-100 text-sm font-medium"
      >
        {label}
      </label>
      <input
        required
        className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {!!aux ? (
        <input
          type="text"
          id="events"
          name={`${name}_aux`}
          className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
          required
        />
      ) : null}
    </div>
  );
}

export function TextAreaInput(props) {
  const { label, name, value, small, onChange } = props;

  const clx = small ? "w-1/2 px-2" : "px-2";
  return (
    <div className={clx}>
      <label
        htmlFor={name}
        className="block text-secondary-100 text-sm font-medium"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
        rows="3"
        required
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export function DateInput(props) {
  const { label, name, value, onChange } = props;

  return (
    <div className="w-1/2 px-2">
      <label
        htmlFor={name}
        className="block text-secondary-100 text-sm font-medium"
      >
        {label}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function TimeInput(props) {
  const { label, name, value, onChange } = props;

  return (
    <div className="w-1/2 px-2">
      <label
        htmlFor={name}
        className="block text-secondary-100 text-sm font-medium"
      >
        {label}
      </label>
      <input
        type="time"
        id={name}
        name={name}
        className="w-full p-2 rounded-lg border-gray-500 border-2"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function NumberInput(props) {
  const { label, name, value, onChange } = props;

  return (
    <div className="w-1/2 px-2">
      <label
        htmlFor={name}
        className="block text-secondary-100 text-sm font-medium"
      >
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        className="w-full p-2 rounded-lg border-gray-500 border-2"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
