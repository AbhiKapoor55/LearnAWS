import React from 'react'; 
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
    return (
        <React.Fragment>  
            {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
                <h4>{article.title}</h4>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </React.Fragment>
    )
}

export default ArticlesList 