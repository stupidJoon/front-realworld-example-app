import Author from 'types/Author';

interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [string];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export default Article;
