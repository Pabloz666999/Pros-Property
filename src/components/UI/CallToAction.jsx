import React from "react";

export default function CallToAction({image = '/assets/image-1.png', title ="You've found a neighbour you love"}) {
    return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6 custom-container ">
        <div>
          <img src={image} alt=""/>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-2xl md:text-5xl md:leading-[1.5]">{title}</h4>  
            <p className="text-gray-600 text-sm leading-relaxed md:text-lg md:leading-[1.8]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          <button className="btn outline-1 rounded-xl p-2 ">
            Contact Us
          </button>
        </div>
      </div>
    </section>
    );
}