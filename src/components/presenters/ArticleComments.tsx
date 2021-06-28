import Comment from 'types/Comment';
import UserType from 'types/User';
import ArticleComment from 'components/containers/ArticleComment';
import ArticleType from 'types/Article';

interface Props {
  comments: Array<Comment>;
  user: UserType;
  article: ArticleType;
  updateComments: () => void;
}

function ArticleComments({ comments, user, article, updateComments }: Props) {
  return (
    <>
      {comments?.map((comment) => (
        <ArticleComment
          key={comment.id}
          comment={comment}
          user={user}
          article={article}
          updateComments={updateComments}
        />
      ))}
    </>
  );
}

export default ArticleComments;
