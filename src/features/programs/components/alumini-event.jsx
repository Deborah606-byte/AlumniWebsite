import { Link } from "react-router-dom";

export default function AluminiEvent(props) {
  const { category, title, date, description, location, imgSrc, urls } = props;
  const [day, month, year] = date.split(" ");
  return (
    <div
      className="card shadow-sm relative bg-secondary-300 w-80"
      data-category={category}
    >
      <div className="aspect-w-4 aspect-h-3">
        <img className="object-cover" src={imgSrc} alt="homecoming" />
      </div>
      <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
        <h4 className="text-secondary-100 font-medium text-xl mb-2">{title}</h4>
      </div>
      <div className="flex justify-start space-x-8 mb-4">
        <div className="bg-primary py-16 px-4">
          <p className="text-secondary-200 font-medium mb-2">{month}</p>
          <p className="text-secondary-200 font-medium text-center mb-2">
            {day}
          </p>
          <p className="text-secondary-200 font-medium">{year}</p>
        </div>
        <div className="p-2">
          <p className="text-secondary-200 text-sm font-light leading-relaxed">
            {description}
          </p>

          <div className="relative mt-5">
            <span className="absolute">
              <i className="fa-solid fa-location-dot text-primary"></i>
            </span>
            <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
              {location}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 py-2">
        <Link
          to={urls.eventailsUrl}
          className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
        >
          View Details
        </Link>
        <Link
          to={urls.rsvpUrl}
          className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
        >
          RSVP
        </Link>
      </div>
    </div>
  );
}
