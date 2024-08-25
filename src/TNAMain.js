import React from "react";
import styleTNA from "./images/style_tna_1.png";

const TNAMain = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <main>
        <h1 className="text-2xl font-bold mb-4 font-nunito p-4 max-w-lg mx-auto">
          Together Not Alone was a mental health nonprofit founded by Rutgers
          students to serve the greater New Brunswick community's need for
          mental counseling and support.
        </h1>
        <hr className="my-6 border-gray-300" />
        <p className="text-l mb-4 font-lora p-4 max-w-lg mx-auto">
          I served as Tech Lead for this nonprofit, which meant that I was in
          charge of creating our website, and running A/B tests to maximize the
          audience we could reach with SEO. In this role, I learned immensely
          about the power of buiding a community and broadcasting our work to an
          audience of readers. We wouldn't have been able to experience the
          growth/traction we did without investing in our content creation
          strategy.
        </p>
        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={styleTNA}
                alt="Styling portfolio with colors for TNA website"
                className="w-full h-64 object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-2xl font-bold mb-4 font-nunito">
              Style Palette
            </h2>
            <p className="mb-4 font-lora">
              Our logo, featuring two polar bears sitting side by side,
              symbolizes the supportive community we aim to foster. We designed
              this logo through the counsel of Douglass Residential College's
              graphic design team.
              <br></br> <br></br> For our website, I chose a color scheme
              centered around blue, complemented by hues of purple. This best
              aligned with the colors that were a part of our logo, and
              demonstrated our projection of calmness, solitude and quietness.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TNAMain;
