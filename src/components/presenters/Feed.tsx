import React from 'react';
import PreviewArticle from './PreviewArticle';
import FeedPagination from './FeedPagination';
import Article from '../../types/Article';

interface Props {
  articles: Array<Article>;
}

function Feed({ articles }: Props) {
  return (
    <>
      {articles.map((article, index) => (
        <PreviewArticle
          key={article.slug}
          isLast={index === articles.length - 1}
          article={article}
        />
      ))}
      <FeedPagination />
    </>
  );
}

export default Feed;
