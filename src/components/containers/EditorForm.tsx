import EditorFormPresenter from 'components/presenters/EditorForm';
import Router from 'next/router';
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from 'react';

function EditorForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [errors, setErrors] = useState({});

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else if (event.target.name === 'description') {
      setDescription(event.target.value);
    } else if (event.target.name === 'body') {
      setBody(event.target.value);
    }
  };

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await fetch(
      'https://conduit.productionready.io/api/articles',
      {
        method: 'POST',
        body: JSON.stringify({
          article: { title, description, body, tagList: tags },
        }),
        headers: {
          Authorization: `Token ${localStorage.getItem('jwtToken')}`,
          'Content-Type': 'application/json',
          charset: 'utf-8',
        },
      },
    );
    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }
    const {
      article: { slug },
    } = await response.json();
    Router.push(`/article/${slug}`);
  };

  const onTagInputPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputString = event.currentTarget.value.trim();
      if (inputString === '') return;
      // event.currenttarget으로 접근하는거 보다 setstate와 onchange를 통한 controlled component형식으로 접근하는것이 좋음
      // 일단은 eslint 경고 무시하는데 나중에 수정 요함
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.value = '';
      setTags([...new Set([...tags, inputString])]);
      event.preventDefault();
    }
  };

  const onTagDeleted = (event: MouseEvent<HTMLDivElement>) => {
    setTags(
      tags.filter(
        (tag) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          tag !== event.currentTarget.parentElement.childNodes[1].textContent,
      ),
    );
  };

  return (
    <EditorFormPresenter
      title={title}
      description={description}
      body={body}
      tags={tags}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      onTagInputPressed={onTagInputPressed}
      onTagDeleted={onTagDeleted}
    />
  );
}

export default EditorForm;
