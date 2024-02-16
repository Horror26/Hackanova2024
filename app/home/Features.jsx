import React from 'react'
export const Features = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <section className="bg-white p-6 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="mb-8">
            MindfulMe is more than just a meditation app. We offer a variety of features to help you manage stress and
            improve your mental wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <img
                alt="AI chatbot counseling"
                className="mb-4 w-full h-auto bg-[#00C6FF] rounded-lg"
                height="300"
                src="/assets/images/f1.jpg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
              <h3 className="text-xl font-semibold mb-2">AI chatbot counseling</h3>
              <p>Talk to an AI counselor trained in cognitive behavioral therapy</p>
            </div>
            <div>
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
              <h3 className="text-xl font-semibold mb-2">Personalized stress relief activities</h3>
              <p>Get a list of personalized stress relief activities based on your mental health quiz results</p>
            </div>
          </div>
        </section>
        </div>
      )
}

export default Features;



  
  


  
  
