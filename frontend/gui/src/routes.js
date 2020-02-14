import React from 'react';
import {Route} from 'react-router-dom'
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/DetailView';
import DynamicRule from './containers/Contact';

const BaseRouter = () => {
    return ( 
        <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleID' component={ArticleDetail} />
            <Route exact path='/contact' component={DynamicRule} />
        </div>
    );
}
 
export default BaseRouter;