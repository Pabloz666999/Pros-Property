import react from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SocmedItem({icon, text, link}) {
    return(
        <a href={link} target="_blank" rel='noopener noreferrer' className="rounded-lg hover:shadow-md transition-shadow">
            <img src={icon} className="w-6 md:w-8" alt="" />
        </a>
    );
}