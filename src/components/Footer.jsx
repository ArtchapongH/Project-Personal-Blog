//import { Linkedin, Github, Mail } from "lucide-react";
//import { Linkedin, Share2, Mail } from "lucide-react";
//import {Heart, Heart, Share2 } from "lucide-react";
import { Heart, Share2, Globe } from "lucide-react";

function Footer() {
  return (

<footer className="bg-white py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-4">
  {/* Social Media & Contact Row */}
  <div className="flex items-center gap-4">
    <span className="text-[#2d2a26] text-base font-medium">Get in touch</span>
    
    {/* LinkedIn Icon */}
    <a href="#" className="w-7 h-7 bg-[#2d2a26] text-[#f2f1ec] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
      <Heart className="w-4 h-4" />
    </a>

    {/* GitHub Icon */}
    <a href="#" className="w-7 h-7 bg-[#2d2a26] text-[#f2f1ec] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
      <Share2 className="w-4 h-4" />
    </a>

    {/* Google Icon */}
    <a href="#" className="w-7 h-7 bg-[#2d2a26] text-[#f2f1ec] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
      <Globe className="w-4 h-4" />
    </a>
  </div>

  {/* Navigation Link */}
  <a href="#" className="text-[#2d2a26] text-base font-medium underline underline-offset-4 decoration-1 hover:opacity-80 transition-opacity">
    Home page
  </a>
</footer>
  )
};
export default Footer;