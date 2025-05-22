import axios from 'axios';

const API_URL = 'https://localhost:7207/api/category';

export const getAllCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const getCategoryById = async (id) => {
    if (!id) throw new Error("Category ID is required");
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        throw error;
    }
};
