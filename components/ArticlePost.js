import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const ArticlePost = ({ slug, date, chapterTitle }) => {
  return (
    <Card className="w-[calc(50%-0.5rem)] aspect-square flex flex-col justify-between mb-4">
      <div>
        <CardHeader>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={date}>{date}</time>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold tracking-tight line-clamp-3">
            {chapterTitle}
          </h2>
        </CardContent>
      </div>
      <CardFooter className="mt-auto">
        <Button variant="outline" asChild className="w-full">
          <Link href={`/articles/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticlePost;
