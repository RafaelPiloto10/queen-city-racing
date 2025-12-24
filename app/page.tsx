"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/sponsor/racetrack.png"
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
          className="relative z-10 rounded-full overflow-clip w-32 h-32 items-center justify-center flex"
        >
          <Image
            alt="logo"
            width={100}
            height={100}
            src="/logo/logo.png"
            className="w-full h-full font-extrabold text-racing-red drop-shadow-lg"
          />
        </motion.div>

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
          A Motorsport Team in the Collegiate Racing Series‌ ©
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex gap-4 relative z-10"
        >
          <Button asChild>
            <Link
              href="https://groupme.com/join_group/112081853/NOIxf7pt"
              className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg"
              target="_blank"
            >
              Students Join Us
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="#"
              className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg"
              target="_blank"
            >
              Sponsors Contact Us
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              rel="noreferrer"
              target="_blank"
              href="/sponsor/sponsor-packet.pdf"
              className="border-racing-red text-racing-red px-6 py-3 rounded-2xl text-lg bg-white/10 hover:bg-white/20 shadow-lg"
            >
              Learn More
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-12 px-12 bg-white text-black flex flex-col md:flex-row items-center justify-evenly">
        <div className="max-w-5xl text-left">
          <h2 className="text-4xl font-bold text-racing-red mb-6">
            A shared drive to win no matter what.‌
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Queen City Racing (QCR)</span> is a
            student-led, 501(c)(3) non-profit motorsports team competing in the
            Collegiate Racing Series, which provides students with hands-on
            opportunities in team management, marketing, sponsorship, and
            wheel-to-wheel racing. Queen City Racing is open to all majors —
            from engineers, business students, medical students, and DAAP
            students.‌
          </p>
        </div>
        <Image
          alt="crs logo"
          priority
          width={300}
          height={300}
          src="/logo/crs_logo.png"
        />
      </section>

      {/* Sponsors & Donate Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-racing-red mb-12">
            Support Our Mission
          </h2>
          <div className="grid flex-row md:grid-cols-4 gap-6">
            <SponsorCard
              image="/sponsor/copper.png"
              title="COPPER"
              price="$100-$499"
              tags={["THE SPARK THAT POWERS EVERYTHING.‌"]}
              description="Copper Tier gets the car on the track, started, and builds the foundation of the club.‌"
              included={["Coasters", "Team Photo", "Name on the Car"]}
              border
            />
            <SponsorCard
              image="/sponsor/aluminum.png"
              title="ALUMINIUM‌"
              price="$500-$999‌"
              tags={["LIGHTWEIGHT SPEED,", "BUILT TO FLY.‌"]}
              description="Aluminum makes the necessary changes to the car and keeps it running fast.‌"
              included={[
                "Copper Tier",
                "T-Shirts",
                "Small Logo",
                "3D Printed Merchandise",
              ]}
              border
            />
            <SponsorCard
              image="/sponsor/titanium.png"
              title="TITANIUM"
              price="$1,000-$4,999"
              tags={["RAW STRENGTH,", "ENGINEER‌ED‌ TO DOMINATE.‌"]}
              description="Titanium is making significant upgrades to the car and getting practice time to make a formidable team.‌"
              included={[
                "Aluminum Tier",
                "Hoodies",
                "Event Tickets",
                "Medium Logo",
              ]}
              border
            />
            <SponsorCard
              image="/sponsor/carbon.png"
              title="CARBON"
              price="$5,000+"
              tags={["ELITE PERFORMANC‌E.‌", "NO COMPROMISES.‌"]}
              description="Building the winning team with the best upgrades to the car. This tier grants access to the resources necessary to dominate.‌"
              included={[
                "Titanium Tier",
                "Plaque",
                "Signed Helmet",
                "Large Priority Placement Logo",
              ]}
              border={false}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col min-h-screen w-full overflow-hidden bg-black pt-2 items-center justify-center">
          {/* Background Image */}
          <Image
            src="/sponsor/finish-line.png"
            alt="race track"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay / Tint */}
          <div className="absolute inset-0 bg-black/85" />

          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
                TOP BIDDER EXCLUSIVES
              </h1>
            </motion.div>

            <div className="flex flex-col items-center justify-center w-full h-full grow text-left pt-10">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-3 max-w-2xl text-2xl text-gray-200 relative z-10 drop-shadow-md"
                >
                  LOGO ON TEAM RACING SUIT
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-3 max-w-2xl text-2xl text-gray-200 relative z-10 drop-shadow-md"
                >
                  YOUR OWN RACING SUIT
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-3 max-w-2xl text-2xl text-gray-200 relative z-10 drop-shadow-md"
                >
                  CAR NAMING RIGHTS
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-3 max-w-2xl text-2xl text-gray-200 relative z-10 drop-shadow-md"
                >
                  TRACK DAY IN QCR&apos;s RACECAR
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-8 flex items-center gap-4 relative z-10"
                >
                  <p className="text-xl font-bold">LET&apos;S GO FOR A DRIVE</p>
                  <Button asChild>
                    <Link
                      href="https://www.zeffy.com/en-US/ticketing/queen-city-racing-sponsorships"
                      className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-2xl shadow-lg"
                      target="_blank"
                    >
                      Sponsor
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
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
              href="mailto:cincinnatiracing@gmail.com"
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
            <a
              href="https://www.linkedin.com/company/queencityracing"
              className="text-racing-red hover:text-red-700"
              target="_blank"
            >
              <Linkedin className="w-8 h-8" />
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

function SponsorCard({
  image,
  title,
  price,
  tags,
  description,
  included,
  border = false,
}: {
  image: string;
  title: string;
  price: string;
  tags: string[];
  description: string;
  included: string[];
  border: boolean;
}) {
  return (
    <div
      className={`w-full h-full pb-6 md:pr-6  ${border ? "border-b-4 md:border-b-0 border-b-racing-red md:border-r-4 md:border-r-racing-red" : ""}`}
    >
      <Card className="w-full h-full bg-back/70 text-white border-none py-0 px-0">
        <CardHeader className="text-left px-0">
          <Image
            className="w-full"
            alt="copper wires"
            width={300}
            height={300}
            src={image}
          />
          <p className="text-3xl font-extrabold italic">{title}</p>
          <p className="text-2xl font-bold">{price}</p>
          <div>
            {tags.map((tag, idx) => {
              return (
                <p key={idx} className="text-lg text-slate-300">
                  {tag}
                </p>
              );
            })}
          </div>
        </CardHeader>

        <CardContent className="text-left px-0">
          <p>{description}</p>
        </CardContent>

        <CardFooter className="flex flex-col items-start text-left px-0 h-full">
          <p className="font-bold text-left">WHAT’S INCLUDED:‌</p>
          <ul>
            {included.map((line, idx) => {
              return <li key={idx}>- {line}</li>;
            })}
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
}
