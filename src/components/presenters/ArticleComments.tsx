import Comment from 'types/Comment';
import ArticleComment from './ArticleComment';

interface Props {
  comments: Array<Comment>;
}

function ArticleComments({ comments }: Props) {
  return (
    <>
      {comments?.map((comment) => (
        <ArticleComment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default ArticleComments;
