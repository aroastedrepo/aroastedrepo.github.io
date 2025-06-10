import React from "react";
import concertHall from "./images/concert_hall.png";
import drumPractice from "./images/drum_sets.png";

const JamItMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <main>
        <h1 className="text-2xl font-bold mb-4 font-nunito p-4 max-w-lg mx-auto">
          Jam It is a VR platform where musicians and their fans can create
          their own concert venues through drag and drop designs.
        </h1>
        <hr className="my-6 border-gray-300" />
        <p className="text-l mb-4 font-lora p-4 max-w-lg mx-auto">
          I worked on this idea during the pandemic, when live music venues
          faced closures. I wanted to reconnect musicians and their fans in a
          meaningful way, while supporting emerging creators. Virtual reality
          enabled the recreation and reinvention of collaborative music
          experiences. This app's unique, intuitive drag-and-drop interface
          offers a novel solution for artists and audiences to share and
          celebrate music in a personalized manner.
        </p>
        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={concertHall}
                alt="Concert Hall with Prateek Kuhad"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-2xl font-bold mb-4 font-nunito">
              Concert Hall
            </h2>
            <p className="mb-4 font-lora">
              When you open the app, you're routed to the Concert Hall page.
              Here, you can explore concerts being hosted by local artists, as
              well as advertise your own concert venue. From a UI/UX
              perspective, aesthetics were a major driver in the design, given
              Gen Z preferences.
              <br />
              <br />
              Our ideal user profile is a 18-25 year old concert goer who is
              eager to pursue music as a hobby. For such users, having an edgy,
              sleek design, with artists who are relevant to their interests is
              key. In our mock-up, we present Prateek Kuhad, a South Asian
              musician whose songs appeal to a Gen Z audience.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={drumPractice}
                alt="Drum Sets"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-4 font-nunito">
              Jamming Away
            </h3>
            <p className="font-lora">
              Prior to hosting their own shows, it’s crucial that our users
              practice their songs. In this case, we showcase our user, Zander,
              playing the drums. Once Zander has accumulated enough points in
              his Jam Score, which serves to represent the amount of time he has
              practiced in tune and correctly, he is able to host a show for his
              friends and other artists who may be interested in attending.
              Depending on his performance, our app proactively provides words
              of encouragement.
              <br></br>
              <br></br>
              From a UI/UX perspective, our ideal user is always excited to
              practice their music skills. We wanted to offer them an
              environment where they could do so with frequent, positive
              feedback.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JamItMain;
