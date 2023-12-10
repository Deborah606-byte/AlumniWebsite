export default function SubmitButton({ children, clx }) {
  return (
    <button
      type="submit"
      className={
        clx ??
        "rounded-full text-secondary-200 bg-primary mx-auto px-5 py-2 hover:text-hover"
      }
    >
      {children}
    </button>
  );
}
