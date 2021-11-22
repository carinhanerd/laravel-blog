import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import Avatar from '@/../img/about-me-avatar.jpg'

function About() {
  return (
    <AppLayout>
      <div className="grid grid-cols-3 gap-8 mb-4">
        <div className="col-span-2">
          <h1 className="mb-4 text-6xl font-extrabold text-right">
            About
            <br />
            me
          </h1>

          <p className="text-right text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis
            nemo explicabo distinctio, amet dolore dolores corrupti est harum
            porro itaque omnis officiis tenetur sunt recusandae nesciunt quaerat
            numquam nisi odio alias? Magni molestias vel, natus cupiditate
            adipisci reprehenderit! Iste?
          </p>

          <br />

          <p className="text-right text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur impedit rerum perferendis quibusdam voluptatum.
            Expedita, qui suscipit! Tempora, rerum? Sapiente, necessitatibus.
            Nisi, laudantium distinctio non qui nemo nostrum magni excepturi.
          </p>
        </div>

        <img src={Avatar} alt="Author Picture" />
      </div>
    </AppLayout>
  );
}

export default About;
