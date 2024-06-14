import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Company A",
    testimony: "Digicraft's innovative solutions helped us streamline our operations and significantly boost our productivity.",
    imageUrl: "/assets/testimonial_1.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, Company B",
    testimony: "The team's expertise in digital transformation is unparalleled. They delivered beyond our expectations.",
    imageUrl: "/assets/testimonial_2.jpg"
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Product Manager, Company C",
    testimony: "Their data-driven insights and automation strategies have been a game-changer for our business.",
    imageUrl: "/assets/testimonial_3.jpg"
  }
];

const Testimonial: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
            <p className="text-gray-700">{testimonial.testimony}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
