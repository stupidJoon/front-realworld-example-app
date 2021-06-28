import ArticleCommentEditorPresenter from 'components/presenters/ArticleCommentEditor';
import UserContext from 'contexts/UserContext';
import { ChangeEvent, useContext, useState } from 'react';
import ArticleTypes from 'types/Article';

interface Props {
  article: ArticleTypes;
  updateComments: () => void;
}

function ArticleCommentEditor({ article, updateComments }: Props) {
  const [comment, setComment] = useState('');
  const { user } = useContext(UserContext);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const onPost = async () => {
    await fetch(
      `https://conduit.productionready.io/api/articles/${article.slug}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({ comment: { body: comment } }),
        headers: {
          'Content-Type': 'application/json',
          charset: 'utf-8',
          Authorization: `Token ${user.token}`,
        },
      },
    ).then((response) => response.json());
    updateComments();
    setComment('');
  };

  return (
    <ArticleCommentEditorPresenter
      comment={comment}
      onChange={onChange}
      onPost={onPost}
    />
  );
}

export default ArticleCommentEditor;
