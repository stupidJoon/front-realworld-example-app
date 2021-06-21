import { useState, useEffect } from 'react';
import FeedPresenter from 'components/presenters/Feed';
import Article from 'types/Article';

function Feed() {
  const [articles, setArticles] = useState<Array<Article>>([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        'https://conduit.productionready.io/api/articles',
      );
      setArticles((await response.json()).articles);
    };
    getArticles();
  }, []);
  return <FeedPresenter articles={articles} />;
}

export default Feed;
