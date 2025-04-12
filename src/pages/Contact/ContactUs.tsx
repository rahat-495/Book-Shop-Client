import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImg from "@/assets/loginPic.webp";

const ContactUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="Your Message" rows={5} required />
                <Button type="submit" className="w-full mt-2">
                  Send Message
                </Button>
              </form>
              <div className="mt-7">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Contact Information
                </h3>
                <div>
                  <ul className="text-muted-foreground md:flex justify-center text-center gap-2 grid">
                    <li className="flex items-center gap-1">
                      <FaPhoneAlt className="text-primary" /> +880 1234 567 890
                    </li>
                    <li className="flex items-center gap-1">
                      <FaEnvelope className="text-primary" />{" "}
                      support@bookshop.com
                    </li>
                    <li className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-primary" /> Dhaka,
                      Bangladesh
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info and Image */}

          <img
            src={contactImg}
            alt="Contact Illustration"
            className="rounded-lg shadow-md hidden md:block h-[475px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
