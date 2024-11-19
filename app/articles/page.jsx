import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Helper function to format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Helper function to get excerpt from content
const getExcerpt = (content, length = 150) => {
  const plainText = content.replace(/[#*`]/g, "").trim();
  return plainText.length > length
    ? `${plainText.slice(0, length)}...`
    : plainText;
};

export default function ArticlesPage() {
  const blogDir = path.join(process.cwd(), "public", "content", "article");
  const files = fs.readdirSync(blogDir);
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(blogDir, filename),
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">JS Articles</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of Lawyer articles
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col h-full transition-all duration-200 hover:shadow-lg"
            >
              <CardHeader className="p-4 sm:p-5">
                <time className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <h2 className="text-lg sm:text-xl font-semibold mt-2">
                  {post.title}
                </h2>
              </CardHeader>

              <CardContent className="p-4 sm:p-5 pt-0 flex-grow">
                <p className="text-sm sm:text-base text-muted-foreground">
                  {post.excerpt}
                </p>
              </CardContent>

              <CardFooter className="p-4 sm:p-5 pt-0 flex justify-center">
                <a href={`/articles/${post.slug}`}>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-black hover:bg-gray-800 text-white px-4"
                  >
                    Read More
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
