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
    const rsvpUrl = ROUTES.rsvp
    const storiesUrl = ROUTES.stories
    const opportunitiesUrl = ROUTES.opportunity

    const { root: homeUrl, eventDetails, events } = ROUTES.home
    const eventsUrl = `${homeUrl}/${events}`
    const eventDetailsUrl = `${homeUrl}/${eventDetails}`



    return { rsvpUrl, storiesUrl, opportunitiesUrl, homeUrl, eventDetailsUrl, eventsUrl }

}