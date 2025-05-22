import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newsService } from '../services/newsService';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryNews = async () => {
            try {
                const data = await newsService.getNewsByCategoryId(id);
                setNewsList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCategoryNews();
    }, [id]);

    if (loading) return <Container className="mt-5 text-center"><Spinner animation="border" /></Container>;
    if (error) return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Category News</h2>
            <Row xs={1} sm={2} md={3} className="g-4">
                {newsList.map(news => (
                    <Col key={news.newsContentId}>
                        <NewsCard news={news} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategoryNews;
