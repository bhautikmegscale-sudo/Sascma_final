import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
    const events = [
        {
            id: 1,
            title: "Annual Tech Symposium 2025",
            venue: "Main Auditorium",
            startDate: "10 March 2025",
            endDate: "12 March 2025",
            image: "/c4.webp",
            description:
                "The Annual Tech Symposium brings together industry experts, academicians, and students to explore emerging technologies such as Artificial Intelligence, Cybersecurity, Cloud Computing, and Data Science. The event includes keynote sessions, hands-on workshops, live demonstrations, and networking opportunities with professionals from leading organizations.",
        },
        {
            id: 2,
            title: "Annual Cultural Fest – UTSAV",
            venue: "College Ground",
            startDate: "18 February 2025",
            endDate: "20 February 2025",
            image: "/c5.webp",
            description:
                "UTSAV is the college’s flagship cultural festival celebrating creativity, diversity, and talent. The fest features music and dance performances, drama competitions, fashion shows, art exhibitions, literary events, and various inter-college competitions creating a vibrant campus atmosphere.",
        },
        {
            id: 3,
            title: "Career Guidance & Placement Drive",
            venue: "Conference Hall",
            startDate: "08 May 2025",
            endDate: "09 May 2025",
            image: "/c6.webp",
            description:
                "The Career Guidance & Placement Drive focuses on preparing students for professional careers. Activities include resume-building workshops, mock interviews, aptitude training sessions, and recruitment opportunities with reputed organizations guided by industry experts.",
        },
    ];

    return (
        <div className="bg-white mt-30 lg:mt-50 min-h-screen">

            {/* ================= TITLE SECTION ================= */}
            <section className=" bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Tag */}
                    <div className="flex justify-start md:justify-center items-center mb-2">
                        <span className="w-10 h-0.5 bg-[#9D2235] mr-3"></span>
                        <h4 className="text-sm uppercase tracking-widest text-gray-500">
                            Events
                        </h4>
                        <span className="w-10 h-0.5 bg-[#9D2235] ml-3"></span>
                    </div>

                    <h2 className="text-start md:text-center text-3xl md:text-4xl font-bold mb-3">
                    Campus Events at SASCMA
                    </h2>
                    <p className="text-start md:text-center text-gray-600 max-w-3xl mx-auto mb-4 md:mb-8">
                    Explore academic, cultural, and professional events that enrich
                                    campus life and foster excellence beyond the classroom.
                    </p>
                
                </div>
            </section>

            {/* ================= EVENTS LIST ================= */}
            <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
                <div className="space-y-4 lg:space-y-16">
                    {events.map((event, index) => (
                        <EventRow key={event.id} event={event} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}

/* ================= EVENT ROW ================= */

function EventRow({ event, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-[#213153]/15 rounded-lg overflow-hidden"
        >
            <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="h-64 md:h-auto">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4 md:p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold text-[#213153] mb-3">
                            {event.title}
                        </h3>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 text-sm text-[#213153]/70 mb-6">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-[#213153]" />
                                {event.venue}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-[#213153]" />
                                {event.startDate} – {event.endDate}
                            </span>
                        </div>

                        {/* Description */}
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={open ? "open" : "close"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="text-sm text-[#213153]/80 leading-relaxed"
                            >
                                {open
                                    ? event.description
                                    : `${event.description.slice(0, 150)}...`}
                            </motion.p>
                            {/* Read More */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="mt-6 self-start text-sm font-medium text-[#9d2235]"
                            >
                                {open ? "Read Less" : "Read More"}
                            </button>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
