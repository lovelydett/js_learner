import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';

function DisplayTable() {
    // mock some data
    const [articles, setArticle] = useState([
        {
            name: 'Book1',
            numPage: 110,
        },
        {
            name: 'Book2',
            numPage: 120,
        },
        {
            name: 'Book3',
            numPage: 130,
        },
    ]);
    const handleAddArticle = () => {
        setArticle([...articles, {
            name: 'Book4',
            numPage: 140,
        }]);
    };
    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                Articles
            </Typography>
            <Button variant="text" color="primary" onClick={handleAddArticle}> Add Article </Button>
            <ArticleList articles={articles}/>
        </div>
    )
}

function ArticleList(props) {
    const {articles} = props
    return (
        <List>
            {
                articles.map((article) => (
                    <ListItem key={article.name} button onClick={() => alert(article.name)}>
                        <ListItemText primary={article.name} secondary={article.numPage} />
                    </ListItem>
                ))
            }
        </List>
    );
}

export default DisplayTable;