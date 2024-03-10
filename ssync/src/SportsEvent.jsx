import React, { useState, useEffect } from 'react';

function SportsEvents() {
  const [events, setEvents] = useState([]);
  const [images, setImages] = useState([
    'https://cdn.pixabay.com/photo/2015/09/13/22/10/sport-938797_640.jpg',
    'https://cdn.pixabay.com/photo/2016/07/23/06/06/spectators-1536342_640.jpg',
    'https://cdn.pixabay.com/photo/2015/08/24/01/53/zawisza-stadion-904335_640.jpg',
    'https://cdn.pixabay.com/photo/2014/09/14/23/23/bike-race-446087_640.jpg',
    'https://cdn.pixabay.com/photo/2014/07/31/22/21/tennis-court-407017_640.jpg',
    'https://cdn.pixabay.com/photo/2014/09/28/06/12/crowd-464571_640.jpg',
  ]);
  const [error, setError] = useState(null);

  const accessToken = 'VzOeizGQMc0foSfDPOrMZnBM1XksHN3GcXt05dDO';

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.predicthq.com/v1/events/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
        params: {
          category: 'sports',
          country: 'IN',
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setEvents(data.results);
          console.log(data.results);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {events.slice(0, 6).map((event, index) => (
        <div key={event.id || index} className="card">
          <img src={images[index]} alt="" />
          <h4>{event.title}</h4>
          {event.description.length > 195 ? (
            <p>{event.description.slice(0, 195)}...</p>
          ) : (
            <p>{event.description}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default SportsEvents;
