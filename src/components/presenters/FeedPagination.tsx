import { MouseEvent } from 'react';
import { Pagination } from 'react-bootstrap';

interface Props {
  page: number;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

function FeedPagination({ page, onClick }: Props) {
  return (
    <Pagination className="flex-wrap">
      {[...Array(50)].map((_, index) => (
        <Pagination.Item
          // key값에 index를 쓰지 말아햐 하지만 지금은 array값이 변하지 않기 때문에 써도 된다
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          active={page === index + 1}
          activeLabel=""
          onClick={onClick}>
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default FeedPagination;
