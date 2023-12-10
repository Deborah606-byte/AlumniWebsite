export default function Form(props) {
  const { children, onSubmit } = props;
  return (
    <form
      className="flex flex-col items-start space-y-4 max-w-xl mx-auto w-full md:w-[50%]"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
