"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria G.",
      role: "Aspiring Singer",
      rating: 5,
      quote: "Transformed my singing in weeks! The coaches on Music Minds are incredible, and the scheduling system makes it so easy to fit lessons into my busy life.",
    },
    {
      name: "James K.",
      role: "Songwriter",
      rating: 5,
      quote: "I’ve connected with amazing producers through Music Minds. The collaboration features have totally changed how I create music and get feedback.",
    },
    {
      name: "Franklin M.",
      role: "Music Student",
      rating: 5,
      quote: "As a college student, the flexibility of booking sessions around my schedule has been a game-changer. The coaches are world-class!",
    },
    {
      name: "David R.",
      role: "Hobbyist Musician",
      rating: 5,
      quote: "I never thought I’d be able to afford lessons with such talented coaches. Music Minds made it accessible and the progress tracking keeps me motivated.",
    },
    {
      name: "James K.",
      role: "Songwriter",
      rating: 5,
      quote: "I’ve connected with amazing producers through Music Minds. The collaboration features have totally changed how I create music and get feedback.",
    },
    {
      name: "Franklin M.",
      role: "Music Student",
      rating: 5,
      quote: "As a college student, the flexibility of booking sessions around my schedule has been a game-changer. The coaches are world-class!",
    },
    {
      name: "David R.",
      role: "Hobbyist Musician",
      rating: 5,
      quote: "I never thought I’d be able to afford lessons with such talented coaches. Music Minds made it accessible and the progress tracking keeps me motivated.",
    },
    {
      name: "Maria G.",
      role: "Aspiring Singer",
      rating: 5,
      quote: "Transformed my singing in weeks! The coaches on Music Minds are incredible, and the scheduling system makes it so easy to fit lessons into my busy life.",
    },
  ];

  const topRow = testimonials.slice(0, 4);
  const bottomRow = testimonials.slice(4, 8);

  return (
    <section className="container mx-auto py-16 text-black">
      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-slide-left {
          animation: slideLeft 10s linear infinite;
        }
        .animate-slide-right {
          animation: slideRight 10s linear infinite;
        }
      `}</style>
      <h2 className="mb-4 text-center text-4xl font-bold" style={{ background: 'linear-gradient(to right, #4B5EFC, #A94BFD)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        What Our Users Say
      </h2>
      <p className="mb-12 text-center text-sm text-gray-500">
        Join thousands of musicians who are transforming their musical journey with Music Minds.
      </p>
      <div className="overflow-x-auto">
        <div className="flex gap-6 animate-slide-left">
          {topRow.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md min-w-[280px] max-w-[280px] min-h-[320px] max-h-[320px] overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300" />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-2 flex-1 overflow-y-auto">
                <p className="text-gray-700 line-clamp-5">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex gap-6 mt-6 animate-slide-right">
          {bottomRow.map((testimonial, index) => (
            <Card key={index + 4} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md min-w-[280px] max-w-[280px] min-h-[320px] max-h-[320px] overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300" />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-2 flex-1 overflow-y-auto">
                <p className="text-gray-700 line-clamp-5">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}