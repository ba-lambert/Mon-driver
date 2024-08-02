import React from "react";
import { motion } from "framer-motion";
import staffImage from "../../assets/images/4.jpg";
import p1 from "../../assets/images/ch1.jpg";
import p2 from "../../assets/images/ch2.jpg";
import p3 from "../../assets/images/ch3.jpg";
import p from "../../assets/images/p1.jpeg";
import p4 from "../../assets/images/p2.jpeg";
import p5 from "../../assets/images/p3.jpg";

interface TeamMember {
    id: number;
    name: string;
    position: string;
    contact: string;
    email: string;
    image: string;
}

interface Testimonial {
    id: number;
    name: string;
    title:string;
    image: string;
    message: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO",
        contact: "0788091723",
        email: "john@example.com",
        image: p1,
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Secretary",
        contact: "0788091723",
        email: "jane@example.com",
        image: p2,
    },
    {
        id: 3,
        name: "John Doe",
        position: "CEO",
        contact: "0788091723",
        email: "john@example.com",
        image: p3,
    },
    {
        id: 4,
        name: "Jane Smith",
        position: "Secretary",
        contact: "0788091723",
        email: "jane@example.com",
        image: p2,
    },
];

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Alice Johnson",
        title:'CEO-Rwanda Motors',
        image: p,
        message:
            "Fantastic service! My driver was prompt and courteous. Highly recommend!",
    },
    {
        id: 2,
        name: "Bob Smith",
        title:'CEO-Rwanda Motors',
        image: p4,
        message: "The best driving service in Kigali. Reliable and professional.",
    },
    {
        id: 3,
        name: "Bob Smith",
        title:'CEO-Rwanda Motors',
        image: p5,
        message: "The best driving service in Kigali. Reliable and professional.",
    },
];

const AboutUsPage: React.FC = () => {
    return (
        <div className="min-h-screen max-w-screen-lg mx-auto space-y-12 text-center py-20">
            <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.p
                    className="text-customGreen font-bold text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    Welcome to MON-CHAUFFEUR,
                </motion.p>
                <p className="mt-4 text-xl text-gray-500 text-center">
                    your premier driver service provider in Kigali, Rwanda. We offer
                    professional and reliable driver services tailored to meet your
                    diverse transportation needs. Whether you require transportation due
                    to illness, lack of a driving license, corporate events, or simply a
                    desire for comfort and convenience, our team of skilled drivers is
                    here to ensure you reach your destination safely and on time.
                </p>
            </motion.div>
            <motion.div
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.p
                    className="text-customGreen font-bold text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    At MON-CHAUFFEUR,
                </motion.p>
                <p className="mt-4 text-xl text-center text-gray-500">
                    we pride ourselves on our commitment to exceptional service,
                    prioritizing your comfort, safety, and satisfaction. Our services
                    include single trips, round trips, day and night bookings, full-day
                    bookings, weekly and monthly bookings, all at competitive rates. Our
                    drivers are experienced, courteous, and dedicated to providing a
                    smooth and enjoyable ride experience.
                </p>
            </motion.div>
            <motion.img
                src={staffImage}
                alt="Staff"
                className="mx-auto rounded-lg shadow-md w-full h-80 object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="text-center p-6 text-gray-500 italic"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                For more information, visit our social media platforms or stop by our
                office in Kisimenti. Trust MON CHAUFFEUR to drive you wherever you need
                to go with professionalism and care.
            </motion.div>

            <motion.section
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            className="bg-customGreen rounded-lg shadow-md p-4 text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-full mx-auto h-28 w-28 -mt-10 object-cover ring-4 ring-offset-2 ring-customGreen"
                            />
                            <h3 className="text-xl font-bold text-white mt-4 mb-2">
                                {member.name}
                            </h3>
                            <div className="bg-emerald-500 opacity-90 p-2 shadow-md rounded-lg text-white">
                                <p className="mb-2">{member.position}</p>
                                <p>{member.contact}</p>
                                <p>{member.email}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center text-customGreen">Our Network</h2>
                <p className="text-lg text-center text-gray-500">
                    We are proud to collaborate with a diverse range of partners and
                    stakeholders in our industry. Our network includes leading companies
                    and organizations that share our commitment to excellence and
                    innovation.
                </p>
            </motion.section>

            <motion.section
                className="space-y-8"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <h2 className="text-3xl font-bold text-center text-customGreen">
                    Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className="rounded-lg shadow-md p-6 text-center"
                            initial={{opacity: 0, scale: 0.8}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <h3 className="text-sm font-semibold text-customGreen mb-2">
                                {testimonial.name}
                            </h3>
                            <p className="text-xs text-gray-500">,, {testimonial.message} ,,</p>
                            <p className="text-xs text-gray-500 mt-2">{testimonial.title}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

        </div>
    );
};

export default AboutUsPage;
