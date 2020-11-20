import express from 'express'; 
import bodyParser from 'body-parser'; 
// var bodyParser = require('body-parser')

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    }, 
    'learn-node': {
        upvotes: 0,
        comments: [], 
    }, 
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: [], 
    },
}

const app = express(); 

app.use(bodyParser.json())

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name 
    articlesInfo[articleName].upvotes += 1 
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})

app.post('/api/articles/:name/add-comment', (req, res) => {
    const username = req.body.username 
    const text = req.body.text 
    const articleName = req.params.name 
    articlesInfo[articleName].comments.push({ username, text }) 

    res.status(200).send(articlesInfo[articleName])
})

app.listen(8000, () => console.log('Listening on port 8000'))
