import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewsDetails from './pages/NewsDetails';
import CategoryNews from './pages/CategoryNews';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Header />
            <main className="py-4">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news/:id" element={<NewsDetails />} />
                        <Route path="/category/:id" element={<CategoryNews />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
