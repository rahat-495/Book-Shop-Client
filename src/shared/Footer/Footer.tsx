import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import logo from "../../assets/bookslogo.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-200 text-neutral-800 py-12 rounded-t-0 md:rounded-t-[125px] text-sm leading-5">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src={logo}
            alt="Bookshop Logo"
            className="w-24 mb-6 rounded-full"
          />
          <p>
            A bookshop offering a curated collection of genres, bestsellers,
            classics, and more. Explore our titles and dive into the world of
            stories and knowledge.
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-lg font-semibold mb-6 relative">
            Office
            <span className="block h-1 bg-secondary absolute bottom-[-12px] left-0 w-full overflow-hidden"></span>
          </h2>
          <p>Elephant Road</p>
          <p>Doctor Para, Rampur</p>
          <p>Dhaka, Postal 5662, Bangladesh</p>
          <p className="mt-4">bookshop@gmail.com</p>
          <h3 className="mt-2 font-semibold">+880 1234556890</h3>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-6 relative">
            Links
            <span className="block h-1 bg-secondary absolute bottom-[-12px] left-0 w-full overflow-hidden"></span>
          </h2>
          <ul className="space-y-2">
            <li>
              <Link className="text-neutral-700 hover:underline" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-neutral-700 hover:underline" to="#">
                Service
              </Link>
            </li>
            <li>
              <Link className="text-neutral-700 hover:underline" to="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-neutral-700 hover:underline" to="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-neutral-700 hover:underline" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-6 relative">
            Newsletter
            <span className="block h-1 bg-secondary absolute bottom-[-12px] left-0 w-full overflow-hidden"></span>
          </h2>
          <form className="flex items-center border-b border-neutral-300 pb-4 mb-6">
            <MdOutlineMailOutline className="text-neutral-700 text-2xl mr-2" />
            <Input
              type="email"
              placeholder="Enter your email id"
              className="bg-transparent text-neutral-700 border-0 outline-none flex-1 placeholder:text-neutral-700"
            />
            <Button type="submit" variant="ghost" className="p-0 ml-2">
              <FaArrowRightToBracket className="text-neutral-700 text-lg" />
            </Button>
          </form>
          <div className="flex gap-4">
            <FaFacebookF className="bg-neutral-300 text-primary rounded-full w-10 h-10 p-2 cursor-pointer" />
            <FaInstagram className="bg-neutral-300 text-primary rounded-full w-10 h-10 p-2 cursor-pointer" />
            <FaTwitter className="bg-neutral-300 text-primary rounded-full w-10 h-10 p-2 cursor-pointer" />
            <FaWhatsapp className="bg-neutral-300 text-primary rounded-full w-10 h-10 p-2 cursor-pointer" />
          </div>
        </div>
      </div>
      <hr className="border-t border-muted my-6 w-[90%] mx-auto" />
      <p className="text-center">Team-1 © - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
