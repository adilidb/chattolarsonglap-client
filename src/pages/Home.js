import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { newsService } from '../services/newsService';
import NewsCard from '../components/NewsCard';

const Home = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await newsService.getAllNews();

                // Optional: যদি body, thumbnail ইত্যাদি validate করতে হয়
                const formatted = data.map(news => ({
                    newsContentId: news.newsContentId,
                    title: news.title,
                    content: news.body || news.content || '',
                    thumbnailUrl: news.thumbnail?.url || news.thumbnailUrl || '',
                    publishedDate: news.publishedDate,
                    category: news.category?.name || news.categoryName || 'N/A',
                }));

                setNewsList(formatted);
            } catch (err) {
                setError(err.message || 'Failed to load news');
            } finally {
                setLoading(false);
            }
        };
        loadNews();
    }, []);

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Latest News</h2>
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

export default Home;
