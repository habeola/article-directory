import React, { Component } from 'react';
import Article from '../components/Article';
import axios from 'axios';


const datas = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  

class ArticleList extends Component {
    state = {
        articles: []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                articles: res.data
            })
            console.log(res.data)
        })

   
    }
    render() { 
        return ( <Article data={this.state.articles}/> );
    }
}
 
export default ArticleList;