import { Card, CardContent } from "@/components/ui/card";
import { FaBuilding } from "react-icons/fa";
import companyImage from "@/assets/combg.jpg";

const CompanyBackground = () => {
  return (
    <section className="bg-muted py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={companyImage}
            alt="Company Background"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <Card className="bg-white shadow-md rounded-xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <FaBuilding className="text-3xl text-amber-500" />
              <h2 className="text-2xl font-bold">Company Background</h2>
            </div>
            <p className="text-muted-foreground text-justify leading-relaxed">
              Founded in 2022, Book Home started as a passion project by a group
              of book enthusiasts who believed in the power of reading to
              transform lives. With humble beginnings and a mission to bridge
              the gap between readers and their favorite stories, we’ve grown
              into a trusted name among thousands of readers.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              Today, we continue our journey by offering a curated selection of
              books, fast delivery, and a personalized shopping experience — all
              rooted in our love for books and community.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompanyBackground;
