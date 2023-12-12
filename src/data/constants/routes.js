export const ROUTES = {
  root: "/",
  auth: {
    root: "/auth",
    login: "login",
    signup: "signup",
  },
  home: {
    root: "/user",
    dashboard: "dashboard",
    events: "events",
    eventDetails: "event-details",
  },
  opportunity: "/oportunity",
  stories: "/stories",
  rsvp: "/rsvp",
  jobDetails: "/job-details",
  notFound: "*",
};

export const getUrls = () => {
  const { root: auth, login, signup } = ROUTES.auth;
  const loginUrl = `${auth}/${login}`;
  const signupUrl = `${auth}/${signup}`;

  const { root: homeUrl, eventDetails, events, dashboard } = ROUTES.home;
  const eventsUrl = `${homeUrl}/${events}`;
  const eventDetailsUrl = `${homeUrl}/${eventDetails}`;
  const dashboardUrl = `${homeUrl}/${dashboard}`;

  const rsvpUrl = ROUTES.rsvp;
  const storiesUrl = ROUTES.stories;
  const opportunitiesUrl = ROUTES.opportunity;

  return {
    rsvpUrl,
    storiesUrl,
    opportunitiesUrl,
    homeUrl,
    eventDetailsUrl,
    eventsUrl,
    loginUrl,
    signupUrl,
    dashboardUrl,
  };
};
