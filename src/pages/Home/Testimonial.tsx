import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profile from "../../assets/p1.jpg";
import profile1 from "../../assets/p2.avif";
import profile2 from "../../assets/p3.avif";
import profile3 from "../../assets/p4.jpg";

const testimonials = [
  {
    avatar: profile,
    text: "Finding this bookshop has been a game-changer! The variety, the vibe, and the recommendations are top-notch. It's my new favorite spot for discovering great reads. 📚",
    name: "John Doe",
  },
  {
    avatar: profile1,
    text: "I love how easy it is to explore and order from this store. The books arrive quickly and in perfect condition. Highly recommended for book lovers!",
    name: "Sarah Smith",
  },
  {
    avatar: profile2,
    text: "Such a great selection of genres! The customer support team also helped me find exactly what I needed. I’ll be back for more!",
    name: "Mike Johnson",
  },
  {
    avatar: profile3,
    text: "This bookshop brings back the joy of reading. It’s like having a personal library that keeps getting better. Great job!",
    name: "Emily Davis",
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 mb-24 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Testimonials</h1>
      <p className="text-lg text-gray-600 mb-8">What Our Readers Say</p>

      <div className="relative w-full">
        <Card className="testimonial-slide-bg text-white min-h-[350px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
          <CardContent className="relative z-10 max-w-2xl text-center px-4 py-6 sm:py-10">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-white mb-4"
            />
            <p className="text-base sm:text-lg md:text-xl italic">
              "{testimonials[current].text}"
            </p>
            <h4 className="text-sm sm:text-base font-semibold mt-4">
              - {testimonials[current].name}
            </h4>
          </CardContent>
        </Card>

        {/* Navigation buttons */}
        <div className="flex justify-between absolute inset-y-0 w-full px-4 items-center z-10">
          <Button variant="ghost" size="icon" onClick={prevSlide}>
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
          <Button variant="ghost" size="icon" onClick={nextSlide}>
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
