import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BASE_URL = "https://localhost:7207";

const NewsCard = ({ news }) => {
    return (
        <Card className="h-100 shadow-sm">
            {news.thumbnailUrl && (
                <Card.Img
                    variant="top"
                    src={`${BASE_URL}${news.thumbnailUrl}`}
                    alt="News Thumbnail"
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            )}
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {new Date(news.publishedDate).toLocaleDateString()} | {news.category}
                </Card.Subtitle>
                <Link to={`/news/${news.newsContentId}`}>
                    <Button variant="primary" size="sm">Read More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;
