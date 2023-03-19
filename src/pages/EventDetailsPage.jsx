import useFetchEvent from 'hooks/useFetchEvent';
import { useNavigate, useLocation } from 'react-router-dom';

const EventDetailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go Back
      </button>
      {event && (
        <>
          <h1>{event.name}</h1>
          <img src={event.images[1].url} alt={event.name} />
          <p>Genre:{event.classifications[0].genre.name}</p>
          <p>SubGenre:{event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
export default EventDetailsPage;
