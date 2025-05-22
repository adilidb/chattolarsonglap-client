import axios from 'axios';

const API_BASE_URL = 'https://localhost:7207/api/news';

const getAllNews = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all news:', error);
        throw error;
    }
};

const getNewsById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news by ID:', error);
        throw error;
    }
};

const getNewsByCategoryId = async (categoryId) => {
    if (!categoryId) throw new Error("Category ID is required");

    try {
        const response = await axios.get(`${API_BASE_URL}/category/${categoryId}`);
        return response.data.map(news => ({
            newsContentId: news.newsContentId,
            title: news.title,
            content: news.body || news.content || '',
            thumbnailUrl: news.thumbnail?.url || news.thumbnailUrl || '',
            publishedDate: news.publishedDate,
            category: news.category,
        }));
    } catch (error) {
        console.error("Error fetching news by category ID:", error);
        throw error;
    }
};

// Exporting all services under one object
export const newsService = {
    getAllNews,
    getNewsById,
    getNewsByCategoryId
};
