// app/EventContext.js
import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  // Initialize with pre-made events
  const [events, setEvents] = useState([
    {
      id: '1',
      eventName: 'Women Who Code, Women Who Lead',
      dateTime: '1ST MAY - SAT - 2:00 PM',
      location: 'Central Park, NY',
      description: 'A session on empowering women in tech.',
      facilitators: 'John Doe',
    },
    {
      id: '2',
      eventName: 'STEM Circles: Women Mentoring Women',
      dateTime: '1ST MAY - SAT - 2:00 PM',
      location: 'Brooklyn, NY',
      description: 'Join us to share and grow our skills together.',
      facilitators: 'Jane Doe',
    },
    // Add more default events as needed...
  ]);

  const addEvent = (newEvent) => {
    setEvents(prev => [...prev, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
