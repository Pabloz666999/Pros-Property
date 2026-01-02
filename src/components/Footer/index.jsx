import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FBFBFB] py-6 md:pt-12">
            <div className="custom-container space-y-6 md:flex md:justify-between">
                <div className="md:w-2/4">
                    <img className="w-[200px] mb-3" src="/assets/logo.svg" alt="Logo" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                        ProsProperty is a leading real estate platform that connects buyers, sellers, and renters with properties across the globe. Our mission is to simplify the property search process and provide comprehensive listings for all your real estate needs.
                    </p>
                </div>
                <div className="space-y-2 md:space-y-4">
                    <p className="font-bold md:text-lg">Menu</p>
                    <ul className="space-y-1 md:space-y-3 text-gray-600 text-sm md:text-base">
                        <li>
                            <Link href="/" className="text-gray text-xs">Home</Link>
                        </li>
                        <li>
                            <Link href="/listings" className="text-gray text-xs">Listings</Link>
                        </li>
                        <li>
                            <Link href="/agents" className="text-gray text-xs">Agents</Link>
                        </li>
                        <li>
                            <Link href="/my-favorite" className="text-gray text-xs">my Favorites</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2 md:space-y-4">
                    <p className="font-bold md:text-lg">Contact Us</p>
                    <ul className="space-y-1 md:space-y-3 text-gray-600 text-sm md:text-base">
                        <li>
                            <a href="#" className="text-gray text-xs">2118 Thornridge Cir. Sycrause. Connecticut 35624</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray text-xs">pros.property@test.dev</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray text-xs">+6287759852266</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-2 md:py-4 text-center mt-12">
                <p>@2025 Dream Homes Reality. All rights reserved</p>
            </div>
        </footer>
    );
}