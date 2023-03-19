import { fetchEventById } from 'services/eventsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);
  return event;
};

export default useFetchEvent;
