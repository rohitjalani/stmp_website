"use client";
import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import EventGallery from '@/components/Events/EventGallery';
import './events.css';

interface Event {
  title: string;
  description: string;
  price: string;
  quantity: string;
  images: string[];
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/stamps');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleExpandClick = (index: number) => {
    setSelectedEvent(index === selectedEvent ? null : index);
  };

  const handleCloseGallery = () => {
    setSelectedEvent(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-black overflow-hidden rounded-lg shadow-md"
          >
            {/* Image */}
            <img
              src={imageUrlFor(event.images[0]).url()}
              alt={event.title}
              className="w-full h-auto p-2"
            />

            {/* Title */}
            <h2 className="text-sm font-semibold text-center px-4 pt-4">{event.title.toUpperCase()}</h2>

            {/* Description */}
            <p className="text-white text-sm px-4 py-2">{event.description}</p>

            {/* Price */}
            <p className="text-white text-sm px-4 py-2">Price: {event.price}</p>

            {/* Quantity */}
            <p className="text-white text-sm px-4 py-2">Quantity: {event.quantity}</p>

            {/* Button */}
            <div className="flex justify-center pb-4">
              <button
                onClick={() => handleExpandClick(index)}
                className="bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                {selectedEvent === index ? 'Collapse' : 'View Image Gallery'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedEvent !== null && (
        <EventGallery
          images={events[selectedEvent].images}
          onClose={handleCloseGallery}
        />
      )}
    </div>
  );
};

export default EventsPage;
