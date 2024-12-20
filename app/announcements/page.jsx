import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import AnnouncementHeader from "@/components/announcement_header";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

// Helper functions
const formatDate = (date) => {
  const d = new Date(date);
  return {
    date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    year: d.getFullYear().toString(),
  };
};

const getExcerpt = (content, length = 120) => {
  const plainText = content.replace(/[#*`]/g, "").trim();
  return plainText.length > length
    ? `${plainText.slice(0, length)}...`
    : plainText;
};

export default function AnnouncementsPage() {
  const announcementsDir = path.join(
    process.cwd(),
    "public",
    "content",
    "announcements"
  );
  const files = fs.readdirSync(announcementsDir);

  const announcements = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(announcementsDir, filename),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
      slug,
      excerpt: getExcerpt(content),
      ...frontmatter,
    };
  });

  return (
    <div className="m-0 p-0">
      <AnnouncementHeader />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {announcements.map((announcement) => {
            const { date, year } = formatDate(announcement.date);
            return (
              <Card
                key={announcement.slug}
                className="bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-20 text-center flex-shrink-0">
                      <div className="text-sm font-medium text-gray-600">
                        {date}
                      </div>
                      <div className="text-sm text-gray-500">{year}</div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-[#143963] mb-2">
                        {announcement.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {announcement.excerpt}
                      </p>
                      {/* Replace Link with the Interactive Hover Button */}
                      <Link href={`/announcements/${announcement.slug}`}>
                        <InteractiveHoverButton text="Read More" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
