import React from 'react';

import { List, Card } from 'antd';

const Article = (props) => {
    return ( <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <a href={`/${item.id}`}><Card title={item.title}>{item.Content}</Card></a>
          </List.Item>
        )}
      /> );
}
 
export default Article;
  
 