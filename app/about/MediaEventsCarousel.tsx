import React from 'react';

const mediaEvents = [
  {
    id: 1,
    title: "Event 1",
    date: "June 1, 2024",
    imageUrl: "/assets/event_1.jpg"
  },
  {
    id: 2,
    title: "Event 2",
    date: "July 15, 2024",
    imageUrl: "/assets/event_2.jpg"
  },
  {
    id: 3,
    title: "Event 3",
    date: "August 30, 2024",
    imageUrl: "/assets/event_3.jpg"
  }
];

const MediaEventsCarousel: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mediaEvents.map((event) => (
          <div key={event.id} className="media-event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-4">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaEventsCarousel;
