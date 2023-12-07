export function TextInput(props) {
  const { name, placeholder, value, onChange, iconClass } = props;
  return (
    <div className="relative w-full flex items-center">
      <span className="absolute top-2 left-5">
        <i className={iconClass}></i>
      </span>
      <input
        className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
        type="text"
        autoComplete={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export function EmailInput(props) {
  const { name, placeholder, value, onChange, iconClass } = props;
  return (
    <div className="relative w-full flex items-center">
      <span className="absolute top-2 left-5">
        <i className={iconClass}></i>
      </span>
      <input
        className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
        type="email"
        autoComplete={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function PasswordInput(props) {
  const { value, onChange } = props;
  return (
    <div className="relative w-full flex items-center">
      <span className="absolute top-2 left-5">
        <i className="fa-solid fa-lock text-primary"></i>
      </span>
      <input
        type="password"
        id="password"
        name="password"
        className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
      <span
        id="togglePassword"
        className="absolute top-2 right-5 cursor-pointer"
      >
        <i className="fa-regular fa-eye-slash text-primary"></i>
      </span>
    </div>
  );
}
export function NumberInput(props) {
  const { placeholder, name, value, onChange } = props;
  return (
    <div className="relative w-full flex items-center">
      <span className="absolute top-2 left-5">
        <i className="fa-solid fa-phone"></i>
      </span>
      <input
        className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
        type="tel"
        id="phone"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
