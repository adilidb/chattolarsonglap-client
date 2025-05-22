import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../services/categoryService';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then(setCategories)
            .catch(err => console.error(err));
    }, []);

    return (
        <header className="bg-dark text-white py-3 px-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h2 className="m-0 text-success fw-bold">
                    চট্টলার <span className="text-danger">সংলাপ</span>
                </h2>
                <nav className="d-flex flex-wrap justify-content-end mt-2 mt-md-0">
                    <Link to="/" className="btn btn-outline-light me-2 mb-2">হোম</Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.categoryId}
                            to={`/category/${cat.categoryId}`}
                            className="btn btn-outline-light me-2 mb-2"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
