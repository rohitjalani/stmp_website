import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/sanityClient';
import './event1.css';

interface EventGalleryProps {
  images: string[];
  onClose: () => void;
}

const builder = imageUrlBuilder(client);
const imageUrlFor = (source: any) => builder.image(source);

const EventGallery: React.FC<EventGalleryProps> = ({ images, onClose }) => {
  const navbarHeight = 60; 
  const galleryHeight = 500;
  const galleryMargin = 20; 

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex justify-center items-center">
      <div className="container mx-auto relative">
        <div className="gallery-container" style={{ height: `${galleryHeight}px`, overflowY: 'auto', margin: `0 ${galleryMargin}px` }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: `${navbarHeight}px` }}>
            {images.map((image, imageIndex) => (
              <div key={imageIndex} className="aspect-w-2 aspect-h-2 mb-4">
                <img
                  src={imageUrlFor(image).width(1200).url()}
                  alt={`Image ${imageIndex + 1}`}
                  className="object-cover rounded-lg max-w-full mx-auto"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="close-button absolute top-2 right-10 text-white font-bold text-sm cursor-pointer bg-blue-500 rounded-full py-2 px-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventGallery;
