import { MouseEvent } from 'react';
import PreviewArticle from './PreviewArticle';
import FeedPagination from './FeedPagination';
import Article from '../../types/Article';

interface Props {
  page: number;
  articles: Array<Article>;
  onPaginationClick: (event: MouseEvent<HTMLElement>) => void;
}

function Feed({ page, articles, onPaginationClick }: Props) {
  return (
    <>
      {articles.map((article, index) => (
        <PreviewArticle
          key={article.slug}
          isLast={index === articles.length - 1}
          article={article}
        />
      ))}
      <FeedPagination page={page} onClick={onPaginationClick} />
    </>
  );
}

export default Feed;
