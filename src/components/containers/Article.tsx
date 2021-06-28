import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArticleType from 'types/Article';
import ArticlePresenter from 'components/presenters/Article';
import useUser from 'hooks/useUser';
import UserContext from 'contexts/UserContext';
import Comment from 'types/Comment';

function Article() {
  const [article, setArticle] = useState<ArticleType>();
  const [comments, setComments] = useState<Array<Comment>>([]);

  useUser();
  const { user } = useContext(UserContext);

  const router = useRouter();
  const { slug } = router.query;

  const updateArticle = async () => {
    const response = await fetch(
      `https://conduit.productionready.io/api/articles/${slug}`,
    );
    setArticle((await response.json()).article);
  };

  const updateComments = async () => {
    const response = await fetch(
      `https://conduit.productionready.io/api/articles/${article?.slug}/comments`,
    );
    setComments((await response.json()).comments);
  };

  useEffect(() => {
    updateArticle();
  }, [router]);

  useEffect(() => {
    updateComments();
  }, [article]);

  return (
    <ArticlePresenter
      article={article}
      comments={comments}
      user={user}
      updateComments={updateComments}
    />
  );
}

export default Article;
