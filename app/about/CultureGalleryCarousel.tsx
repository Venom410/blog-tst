import React from 'react';

const cultureGallery = [
  {
    id: 1,
    title: "Team Building",
    imageUrl: "/assets/culture_1.jpg"
  },
  {
    id: 2,
    title: "Office Fun",
    imageUrl: "/assets/culture_2.jpg"
  },
  {
    id: 3,
    title: "Corporate Retreat",
    imageUrl: "/assets/culture_3.jpg"
  }
];

const CultureGalleryCarousel: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cultureGallery.map((gallery) => (
          <div key={gallery.id} className="culture-gallery-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={gallery.imageUrl} alt={gallery.title} className="w-full h-40 object-cover mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mb-2">{gallery.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureGalleryCarousel;
