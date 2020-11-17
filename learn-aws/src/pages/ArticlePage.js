import React from 'react'; 
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
    const name = match.params.name; 
    const article = articles.find(article => article.name === name); 

    if (!article) return <h1>Article Does Not Exist!</h1>

    return (
        <React.Fragment>
            <h1>This is the article on {article.title} !</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))} 
            <ArticlesList articles={articles}/>
        </React.Fragment>
    )
}

export default ArticlePage 