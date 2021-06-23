import { KeyboardEvent } from 'react';
import EditorFormPresenter from 'components/presenters/EditorForm';

function EditorForm() {
  const onTagInputPressed = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputString = event.currentTarget.value.trim();
      console.log(inputString);
      event.preventDefault();
    }
  };

  return <EditorFormPresenter onTagInputPressed={onTagInputPressed} />;
}

export default EditorForm;
