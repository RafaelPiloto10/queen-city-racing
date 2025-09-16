"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/logo/logo.jpg"
          alt="Racing background"
          fill
          priority
          sizes="100vw"
          className="md:object-cover object-contain"
        />
        {/* Overlay / Tint */}
        <div className="absolute inset-0 bg-black/90" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-racing-red drop-shadow-lg">
            Queen City Racing
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-gray-200 relative z-10 drop-shadow-md"
        >
          Introducing University of Cincinnati students to racing with track
          opportunities, community, and speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex gap-4 relative z-10"
        >
          <Button asChild>
            <Link
              href="#"
              className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg"
            >
              Join Us
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={"#"}
              className="border-racing-red text-racing-red px-6 py-3 rounded-2xl text-lg bg-white/10 hover:bg-white/20 shadow-lg"
            >
              Learn More
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-racing-red mb-6">About Us</h2>
          <p className="text-lg text-gray-700">
            Queen City Racing is a student organization at the University of
            Cincinnati passionate about motorsports. We provide students with
            unique opportunities to experience track days, connect with fellow
            racing enthusiasts, and build lifelong skills in teamwork,
            mechanics, and leadership.
          </p>
        </div>
      </section>

      {/* Sponsors & Donate Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-racing-red mb-12">
            Support Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border border-racing-red rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <Users className="mx-auto text-racing-red w-12 h-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Become a Sponsor
                </h3>
                <p className="text-gray-300 mb-6">
                  Help us grow by partnering with Queen City Racing. Your
                  support provides students with access to tracks, equipment,
                  and unforgettable racing experiences.
                </p>
                <Button className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg">
                  Sponsor Us
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border border-racing-red rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <DollarSign className="mx-auto text-racing-red w-12 h-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Make a Donation
                </h3>
                <p className="text-gray-300 mb-6">
                  Every contribution fuels our mission to introduce students to
                  the world of motorsports. Donations go directly toward track
                  opportunities and racing resources.
                </p>
                <Button className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-racing-red mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions or want to get involved? Reach out to us!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:queencityracing@uc.edu"
              className="text-racing-red hover:text-red-700"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/queen.city.racing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-racing-red hover:text-red-700"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500 border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} Queen City Racing - University of
          Cincinnati
        </p>
      </footer>
    </div>
  );
}
