import { useState, useEffect, MouseEvent } from 'react';
import FeedPresenter from 'components/presenters/Feed';
import Article from 'types/Article';

function Feed() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        `https://conduit.productionready.io/api/articles?${new URLSearchParams({
          limit: '10',
          offset: ((page - 1) * 10).toString(),
        })}`,
      );
      setArticles((await response.json()).articles);
    };
    getArticles();
  }, [page]);

  const onPaginationClick = (event: MouseEvent<HTMLElement>) => {
    setPage(parseInt(event.currentTarget.textContent, 10));
  };

  return (
    <FeedPresenter
      page={page}
      articles={articles}
      onPaginationClick={onPaginationClick}
    />
  );
}

export default Feed;
