import ArticleCommentPresenter from 'components/presenters/ArticleComment';
import ArticleType from 'types/Article';
import CommentType from 'types/Comment';
import UserType from 'types/User';

interface Props {
  comment: CommentType;
  user: UserType;
  article: ArticleType;
  updateComments: () => void;
}

function ArticleComment({ comment, user, article, updateComments }: Props) {
  const onDelete = async () => {
    await fetch(
      `https://conduit.productionready.io/api/articles/${article.slug}/comments/${comment.id}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Token ${user.token}` },
      },
    ).then((response) => response.json());
    updateComments();
  };

  return (
    <ArticleCommentPresenter
      comment={comment}
      user={user}
      onDelete={onDelete}
    />
  );
}

export default ArticleComment;
