import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';

function DisplayTable() {
    // when loading the component, request the data from the backend
    const [articles, setArticle] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3003/api/table';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setArticle(data);
            }).catch(err => {
                console.log(err);
                setArticle([]);
            });
    });

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
            <ArticleList articles={articles} />
        </div>
    )
}

function ArticleList(props) {
    const { articles } = props
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