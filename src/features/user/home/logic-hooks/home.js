import { useNavigate } from "react-router-dom";
import { getUrls } from "../../index/imports";

export default function useHomeLogic() {
  const navigate = useNavigate();
  const urls = getUrls();
  const { homeUrl, eventsUrl, storiesUrl, opportunitiesUrl } = urls;

  const links = [
    { name: "Home", url: homeUrl },
    { name: "Programs & Events", url: eventsUrl },
    { name: "Alumni Stories", url: storiesUrl },
    { name: "Career Opportunities", url: opportunitiesUrl },
  ];

  const onDashboardClick = () => navigate(urls.dashboardUrl, { replace: true });

  return { links, onDashboardClick };
}
