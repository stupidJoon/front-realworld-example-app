import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArticleType from 'types/Article';
import ArticlePresenter from 'components/presenters/Article';

function Article() {
  const [article, setArticle] = useState<ArticleType>();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const getArticle = async () => {
      const response = await fetch(
        `https://conduit.productionready.io/api/articles/${slug}`,
      );
      setArticle((await response.json()).article);
    };
    getArticle();
  }, [router]);
  return <ArticlePresenter article={article} />;
}

export default Article;
