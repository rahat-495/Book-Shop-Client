import { Card, CardContent } from "@/components/ui/card";
import { FaBullseye, FaEye } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-muted-foreground mt-2">
          Learn about our mission and vision
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaBullseye className="text-red-500 text-2xl" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              Our mission is to provide book lovers with easy access to a wide
              variety of genres, affordable prices, and a seamless reading
              experience through our online platform.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="hover:shadow-xl transition-shadow">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaEye className="text-indigo-600 text-2xl" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              Our vision is to become the most trusted and beloved bookshop,
              inspiring readers across the globe and promoting the joy of
              reading in every home.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mission;
