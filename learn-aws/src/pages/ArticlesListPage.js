import React from 'react'; 
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
    return (
        <React.Fragment>
            <h1>Articles</h1>
            <ArticlesList articles={articles}/>
        </React.Fragment>
    )
}

export default ArticlesListPage 