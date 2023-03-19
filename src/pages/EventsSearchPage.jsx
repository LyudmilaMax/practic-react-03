import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEventsByName } from 'services/eventsApi';

const EventsSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const eventName = searchParams.get('eventName');
  useEffect(() => {
    if (eventName) {
      fetchEventsByName(eventName).then(setEvents);
    }
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventName: form.elements.searchEvents.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchEvents" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.length !== 0 &&
          events.map(({ name, id }) => (
            <li key={id}>
              <Link to={id}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default EventsSearchPage;
