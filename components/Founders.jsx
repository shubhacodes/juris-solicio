// founders.jsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TeamMembers() {
  const members = [
    {
      id: "pratik-ahuja",
      name: "Pratik Ahuja",
      location: "Delhi NCR",
      image: "/team/pratik.jpeg",
    },
    {
      id: "person-2",
      name: "Charu Sharma",
      location: "Delhi NCR",
      image: "/team/charu.jpeg",
    },
    {
      id: "person-3",
      name: "Pranav Sharma",
      location: "Delhi NCR",
      image: "/team/pranav.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <Link href={`/our-team/${member.id}`} key={member.id}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.location}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
