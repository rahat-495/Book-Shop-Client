import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import team1 from "@/assets/t1.jpg";
import team2 from "@/assets/t3.jpg";
import team3 from "@/assets/t2.jpg";

const teamData = [
  {
    name: "Mahmud Hasan",
    role: "Founder & CEO",
    image: team1,
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Fatima Rahman",
    role: "Marketing Lead",
    image: team2,
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Sajid Islam",
    role: "Lead Developer",
    image: team3,
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
];

const TeamMembers = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-muted-foreground">
            A passionate group of individuals driving the vision forward.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teamData.map((member, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.role}
                </p>
                <div className="flex gap-3 text-primary text-lg">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
