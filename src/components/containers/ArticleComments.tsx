import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Comment from 'types/Comment';
import ArticleCommentsPresenter from 'components/presenters/ArticleComments';

function ArticleComments() {
  const [comments, setComments] = useState<Array<Comment>>([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        `https://conduit.productionready.io/api/articles/${slug}/comments`,
      );
      setComments((await response.json()).comments);
    };
    getComments();
  }, [router]);
  return <ArticleCommentsPresenter comments={comments} />;
}

export default ArticleComments;
