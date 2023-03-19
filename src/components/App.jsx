import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import EventPage from 'pages/EventsPage';
import EventsSearchPage from 'pages/EventsSearchPage';
import EventSubPage from 'pages/EventSubPage';
import EventDetailsPage from 'pages/EventDetailsPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
        <Route path="search" element={<EventsSearchPage />}></Route>
        <Route path="events/:id/datails" element={EventDetailsPage} />
      </Route>
    </Routes>
  );
};
