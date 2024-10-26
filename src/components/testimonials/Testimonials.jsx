import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Pratham Keshari",
      position: "Chemistry Student",
      message:
        "This platform has completely transformed my approach to learning! The course content is detailed, and the instructors bring complex topics to life with real-world examples.",
      image:
        "./image/pratham.jpg",
    },
    {
      id: 2,
      name: "Shubham Chowdhury",
      position: "Computer Science Engineering Student",
      message:
        "The hands-on projects and interactive sessions have made coding feel so accessible. I’ve gained skills here that have made me more confident in my abilities.",
      image:
        "./image/shubham.jpg",
    },
    {
      id: 3,
      name: "Rahul Sen",
      position: "Software Development Enthusiast",
      message:
        "Thanks to this platform, I now feel equipped to handle real-world challenges. The practical exercises and project-based learning are game-changers!",
      image:
        "./image/3.png",
    },
    {
      id: 4,
      name: "Aman gupta",
      position: "App Development Intern",
      message:
        "The personalized feedback and support from mentors have been invaluable. I now approach app development with a structured mindset, and I’m excited about my future.",
      image:
       "./image/4.jpg",
    },
    {
      id: 5,
      name: "Anita Kapoor",
      position: "Data Science Enthusiast",
      message:
        "From data wrangling to advanced machine learning concepts, this platform covers it all. The content is well-organized, making it easy to learn at my own pace.",
      image:
       "./image/5.png",
    },
    {
      id: 6,
      name: "Meera Iyer",
      position: "Web Development Intern",
      message:
        "This platform taught me to develop responsive websites with modern tools and techniques. I feel prepared to tackle projects and create beautiful, functional sites.",
      image:
        "./image/6.png",
    },
  ];
  
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
