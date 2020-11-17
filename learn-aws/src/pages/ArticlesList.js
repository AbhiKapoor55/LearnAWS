import React from 'react'; 
import articles from './article-content';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
    return (
        <React.Fragment>
            <h1>Articles</h1>
            {articles.map((article, key) => (
                <Link class="article-list-item" key={key} to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
                
            ))}; 
        </React.Fragment>
    )
}

export default ArticlesList 