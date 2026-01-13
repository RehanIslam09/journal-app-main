import React from 'react';
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import TestimonialCarousel from '@/components/testimonial-carousel';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { getDailyPrompt } from '@/actions/public';
import faqs from '@/data/faqs';

const features = [
  {
    icon: Book,
    title: 'Rich Text Editor',
    description:
      'Express yourself with a powerful editor supporting markdown, formatting, and more.',
  },
  {
    icon: Sparkles,
    title: 'Daily Inspiration',
    description:
      'Get inspired with daily prompts and mood-based imagery to spark your creativity.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description:
      'Your thoughts are safe with enterprise-grade security and privacy features.',
  },
];

export default async function LandingPage() {
  const advice = await getDailyPrompt();

  return (
    <div className="relative container mx-auto px-4 pt-16 pb-24">
      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl gradient-title">
          Your Space to Reflect. <br /> Your Story to Tell.
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
          Capture your thoughts, track your moods, and reflect on your journey
          in a calm, beautiful, and private space.
        </p>

        {/* Journal Preview */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200 shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-rose-500" />
                <span className="font-medium text-rose-900">
                  Today&rsquo;s Entry
                </span>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-200" />
                <div className="h-3 w-3 rounded-full bg-violet-200" />
                <div className="h-3 w-3 rounded-full bg-neutral-300" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">
                {advice ?? 'My Thoughts Today'}
              </h3>
              <Skeleton className="h-4 bg-neutral-200 rounded w-3/4" />
              <Skeleton className="h-4 bg-neutral-200 rounded w-full" />
              <Skeleton className="h-4 bg-neutral-200 rounded w-2/3" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="#features">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-rose-400 text-rose-600 hover:bg-rose-100/50 transition-colors"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <section
        id="features"
        className="mt-28 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-lg"
          >
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* DETAIL SECTIONS */}
      <div className="space-y-32 mt-32">
        {/* Editor */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-rose-800">
              Rich Text Editor
            </h3>
            <p className="text-lg text-neutral-600">
              Express yourself fully with an editor designed for clarity and
              flow.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
                Format text with ease
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
                Embed links and structure ideas
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-neutral-200">
            <div className="flex gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-neutral-200" />
              <div className="h-8 w-8 rounded bg-neutral-200" />
              <div className="h-8 w-8 rounded bg-neutral-200" />
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-neutral-200 rounded w-3/4" />
              <div className="h-4 bg-neutral-200 rounded w-full" />
              <div className="h-4 bg-neutral-200 rounded w-2/3" />
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2 space-y-6">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-rose-800">Mood Analytics</h3>
            <p className="text-lg text-neutral-600">
              Visualize emotional patterns and understand your inner rhythms.
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                Mood trends over time
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                Pattern recognition
              </li>
            </ul>
          </div>

          <div className="md:order-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-neutral-200">
            <div className="h-40 bg-gradient-to-t from-rose-100 to-violet-50 rounded-lg" />
            <div className="flex justify-between mt-4">
              <div className="h-4 w-16 bg-neutral-200 rounded" />
              <div className="h-4 w-16 bg-neutral-200 rounded" />
              <div className="h-4 w-16 bg-neutral-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* FAQ */}
      <div className="mt-32 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rose-900 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-rose-400 text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="mt-32">
        <Card className="bg-gradient-to-r from-rose-100 via-pink-50 to-violet-100 border border-neutral-200">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">
              Start Reflecting on Your Journey Today
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join thousands of writers discovering the power of gentle,
              intentional journaling.
            </p>
            <Button size="lg" variant="journal">
              Get Started for Free <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
