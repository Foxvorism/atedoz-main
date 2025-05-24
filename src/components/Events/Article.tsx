import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Articles {
  id: number;
  judul: string;
  content: string;
  thumbnail: string;
  created_at: string;
}

interface ArticleProps {
  articles: Articles[];
}

const Article: React.FC<ArticleProps> = ({ articles }) => {
  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);

  return (
    <div className="p-14 w-full text-center px-50">
      <h2 className="text-2xl font-bold mb-3">Articles</h2>
      <h2 className="text-base font-medium mb-10">
        Berikut adalah article-article yang kami selenggarakan
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {sortedArticles.map((article) => (
            <Link href={`/events/detail-article/${article.id}`} key={article.id}>
              <div
                className="relative w-full bg-gray-100 rounded-lg overflow-hidden hover:scale-[102%]"
              >
                <Image
                  layout="responsive"
                  width={500}
                  height={0}
                  src={article.thumbnail}
                  alt={article.judul}
                  className="aspect-video w-full object-cover cursor-pointer"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-3">{article.judul}</h2>
                  <h3 className="text-gray-400 text-xs">
                    {article.created_at}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
