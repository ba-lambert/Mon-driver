 // src/data/blogData.ts
export type Blog = {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string; // URL to the image
  secondaryImage?: string; // Optional URL to the secondary image
  tertiaryImage?: string;
  style?: string; // Optional custom style class
};

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Rise of Professional Chauffeur Services in Kigali",
    description:
      "Explore how chauffeur services have evolved in Kigali and why more people are opting for professional drivers.",
    content: `
      In recent years, Kigali has witnessed a surge in demand for professional chauffeur services. This trend reflects a broader shift towards convenience and luxury in urban transportation. 
      Monchauffeur has positioned itself at the forefront of this movement by offering premium chauffeur services that cater to both everyday travel and special occasions. 
      Our fleet of modern, well-maintained vehicles and our team of highly-trained drivers ensure that every journey is both comfortable and safe. Discover how Monchauffeur is revolutionizing transportation in Kigali 
      and why more residents and visitors are choosing us for their travel needs.
    `,
    image:
      " /src/assets/images/vecteezy_ai-generated-joyful-black-skinned-businessman-by-his-car_42239659.png",
    // style: "bg-blue-100",
    secondaryImage: "/src/assets/images/caru2.png", // Add the URL of the second image
    tertiaryImage: "/src/assets/images/ch3.jpg",
  },
  {
    id: "2",
    title: "Top 5 Reasons to Choose Monchauffeur for Your Next Trip",
    description:
      "Highlight why Monchauffeur stands out among other chauffeur services.",
    content: `
      Choosing Monchauffeur for your transportation needs comes with numerous benefits. First, our drivers are highly trained professionals committed to providing exceptional service. 
      Second, our vehicles are top-of-the-line, ensuring a luxurious and comfortable ride. Third, our booking process is streamlined for ease and convenience. Fourth, we prioritize safety with rigorous protocols. 
      Lastly, our competitive pricing ensures you receive the best value for your money. Experience these advantages firsthand by choosing Monchauffeur for your next trip.
    `,
    image: " /src/assets/images/caru2.png",
    secondaryImage: "/src/assets/images/person1.png", // Add the URL of the second image
    tertiaryImage: "/src/assets/images/p2.jpeg",

    // style: "bg-green-100",
  },
  {
    id: "3",
    title: "How Monchauffeur Ensures the Safety and Comfort of Its Passengers",
    description:
      "Focus on the safety and comfort measures Monchauffeur implements.",
    content: `
      At Monchauffeur, passenger safety and comfort are our top priorities. Our drivers undergo rigorous training to handle various driving conditions and emergencies. 
      Our vehicles are regularly inspected and maintained to ensure optimal performance. We also provide amenities to enhance your comfort, including climate control and spacious seating. 
      Our commitment to these measures guarantees a secure and pleasant travel experience.
    `,
    image: "  /src/assets/images/car1.png",
    secondaryImage: " /src/assets/images/p2.jpeg",
    tertiaryImage: "/src/assets/images/f2.jpg",
    // style: "bg-yellow-100",
  },
  {
    id: "4",
    title: "A Day in the Life of a Monchauffeur Driver",
    description:
      "Give readers a behind-the-scenes look at what it’s like to be a Monchauffeur driver.",
    content: `
      Ever wondered what a typical day looks like for a Monchauffeur driver? Our drivers start their day early, ensuring their vehicles are clean and ready for the day’s appointments. 
      They undergo daily briefings to stay updated on traffic conditions and any special client requests. Throughout the day, they provide excellent service, navigating Kigali with professionalism and care. 
      Our drivers find their work rewarding as they contribute to safe and enjoyable journeys for our clients.
    `,
    image: "/src/assets/images/ch1.jpg",
    secondaryImage: " /src/assets/images/ch2.jpg",
    tertiaryImage: "/src/assets/images/f2.jpg",
    // style: "bg-red-100",
  },
  {
    id: "5",
    title: "Customer Testimonials: Why Our Clients Love Monchauffeur",
    description: "Showcase real feedback from satisfied customers.",
    content: `
      Our clients have shared their positive experiences with Monchauffeur, highlighting our commitment to exceptional service. Many appreciate the professionalism of our drivers and the quality of our vehicles. 
      Others commend our punctuality and the convenience of our booking system. These testimonials reflect our dedication to providing outstanding chauffeur services and the high level of satisfaction we strive to achieve.
    `,
    image: " /src/assets/images/ch3.jpg",
    secondaryImage: " /src/assets/images/car1.jpeg",
    tertiaryImage: "/src/assets/images/ch3.jpg",
    // style: "bg-purple-100",
  },
];
