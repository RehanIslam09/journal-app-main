'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from './ui/card';
import testimonials from '@/data/testimonials';

const TestimonialCarousel = () => {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-bold text-center text-rose-900 mb-12">
        What Our Writers Say
      </h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-2"
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-lg h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <blockquote className="space-y-6">
                    <p className="text-neutral-600 italic leading-relaxed">
                      &quot;{testimonial.text}&quot;
                    </p>

                    <footer className="pt-4 border-t border-neutral-200">
                      <div className="font-semibold text-neutral-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-rose-600">
                        {testimonial.role}
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hover:text-rose-600 transition-colors" />
        <CarouselNext className="hover:text-rose-600 transition-colors" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
