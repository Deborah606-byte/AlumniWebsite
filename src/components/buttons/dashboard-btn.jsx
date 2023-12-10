export default function DashboardBtn(props) {
  return (
    <button
      className="uppercase bg-secondary-100 hover:scale-110 py-2 px-4 text-center text-secondary-200 rounded-lg"
      onClick={props.onClick}
    >
      My dashboard
    </button>
  );
}
