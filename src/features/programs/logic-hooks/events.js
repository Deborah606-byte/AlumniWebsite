import { ROUTES } from "../index/imports"


export default function useEventsLogic() {
    const rsvpUrl = ROUTES.rsvp
    const storiesUrl = ROUTES.stories
    const opportunitiesUrl = ROUTES.opportunity
    const { root: homeUrl, eventDetails } = ROUTES.home
    const eventDetailsUrl = `${homeUrl}/${eventDetails}`


    const urls = { rsvpUrl, storiesUrl, opportunitiesUrl, homeUrl, eventDetailsUrl }
    return { urls }
}