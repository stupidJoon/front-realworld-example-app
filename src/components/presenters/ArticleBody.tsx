import ReactMarkdown from 'react-markdown';
import Article from 'types/Article';

interface Props {
  article: Article;
}

function ArticleBody({ article }: Props) {
  return <ReactMarkdown>{article?.body}</ReactMarkdown>;
}

export default ArticleBody;
