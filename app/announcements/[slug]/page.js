import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Card, CardContent } from "@/components/ui/card";

const MarkdownContent = ({ content }) => (
  <div
    className="prose prose-slate dark:prose-invert max-w-none
               prose-headings:font-bold 
               prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-6
               prose-h2:text-3xl prose-h2:mb-4
               prose-h3:text-2xl prose-h3:mb-3
               prose-h4:text-xl prose-h4:mb-2
               prose-p:mb-4 prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed
               prose-ul:list-disc prose-ul:pl-5
               prose-ol:list-decimal prose-ol:pl-5
               prose-li:mb-2
               prose-a:text-primary hover:prose-a:text-primary/80
               prose-strong:text-foreground
               prose-em:text-foreground/80
               prose-code:bg-muted prose-code:text-foreground prose-code:p-1 prose-code:rounded"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export async function generateStaticParams() {
  const announcementsDirectory = path.join(
    process.cwd(),
    "public",
    "content",
    "announcements"
  );
  const filenames = await fs.readdir(announcementsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

async function getAnnouncement(slug) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "content",
    "announcements",
    `${slug}.md`
  );
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter,
    slug,
    contentHtml,
  };
}

export default async function AnnouncementPost({ params }) {
  const { slug } = await params;
  const announcement = await getAnnouncement(slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-[800px] mx-auto">
          <CardContent className="p-8 sm:p-10 lg:p-12">
            <article>
              <header className="mb-10">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-[#423e58]">
                  {announcement.frontmatter.title}
                </h1>
                <p className="text-muted-foreground">
                  {announcement.frontmatter.date}
                </p>
              </header>
              <div className="mt-8">
                <MarkdownContent content={announcement.contentHtml} />
              </div>
            </article>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
