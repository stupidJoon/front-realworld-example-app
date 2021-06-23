import { useState, KeyboardEvent } from 'react';
import EditorFormPresenter from 'components/presenters/EditorForm';

function EditorForm() {
  const [tags, setTags] = useState<Set<string>>(new Set());
  const onTagInputPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputString = event.currentTarget.value.trim();
      setTags(new Set([...tags, inputString]));
      event.preventDefault();
    }
  };

  return (
    <EditorFormPresenter tags={tags} onTagInputPressed={onTagInputPressed} />
  );
}

export default EditorForm;
