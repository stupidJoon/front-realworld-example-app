import TagsPresenter from 'components/presenters/Tags';
import { useState, useEffect } from 'react';

function Tags() {
  const [tags, setTags] = useState<Array<string>>([]);
  useEffect(() => {
    const getTags = async () => {
      const response = await fetch(
        'https://conduit.productionready.io/api/tags',
      );
      setTags((await response.json()).tags);
    };
    getTags();
  }, []);
  return <TagsPresenter tags={tags} />;
}

export default Tags;
