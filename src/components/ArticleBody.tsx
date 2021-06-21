import { Col } from 'react-bootstrap';

function ArticleBody() {
  return (
    <Col
      dangerouslySetInnerHTML={{
        __html: `<h1>Tom Bombadil is strange</h1>
                       <h2>Tom childhood</h2>
                       <p>
                         He born in <i>Middleearth</i> It's far far <b>away</b> from here.
                       </p>
                       <h2>Casual life</h2>
                       <p>Tom doesn't work. He's happy all day long.</p>
                       <h2>Tom's quotes</h2>
                       <ul>
                         <li>
                           <em>heheheheh</em>
                         </li>
                         <li>
                           <em>muahaha</em>
                         </li>
                         <li>
                           <em>no worries</em>
                         </li>
                       </ul>
                       <p>&ltlink&gt</p>`,
      }}></Col>
  );
}

export default ArticleBody;
