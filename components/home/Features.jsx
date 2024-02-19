import React from "react";
import "./styles/features.css";
export const Features = () => {
  return (
    <section className="home-features-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 data-aos="fade-right" className="home-features-title">Features</h2>
      <p data-aos="fade-right" className="mb-8">
        MindfulMe is more than just a meditation app. We offer a variety of
        features to help you manage stress and improve your mental wellbeing.
      </p>
      <div className="features-images-container-wrapper flex-col sm:flex-row">
        <div data-aos="zoom-in" className="features-images-container">
          <img
            alt="AI chatbot counseling"
            className="home-feature-image"
            src="/assets/images/chatbot.jpg"
          />
          <div>
            <h3>AI chatbot counseling</h3>
            <p>
              Talk to an AI counselor trained in cognitive behavioral therapy
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="features-images-container">
          <img
            alt="AI chatbot counseling"
            className="home-feature-image"
            src="/assets/images/quiz.jpg"
          />
          <div>
            <h3>Gamified Assessment</h3>
            <p>
              Engage in our mental health gamified quiz, designed to educate
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="features-images-container">
          <img
            alt="AI chatbot counseling"
            className="home-feature-image"
            src="/assets/images/community.jpg"
          />
          <div>
            <h3>Community</h3>
            <p>Join our open forum for mental health discussion</p>
          </div>
        </div>
        {/* <div>
          <img
            alt="Personalized stress relief activities"
            className="mb-4 w-full h-auto bg-[#FFE700] rounded-lg"
            height="300"
            src="/assets/images/f2.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <h3 className="text-xl font-semibold mb-2">
            Personalized stress relief activities
          </h3>
          <p>
            Get a list of personalized stress relief activities based on your
            mental health quiz results
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Features;
