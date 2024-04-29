import React, { useEffect, useState } from "react";
import './Card.css';


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    images: string[];
}

export const Card: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const id = Math.floor(Math.random() * 100) + 1;
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((data: Product) => {
            const randomImage = data.images[Math.floor(Math.random() * data.images.length)];
            data.images = [randomImage]; 
            setProduct(data);
        });
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-card">
            <div className="badge">Now</div>
            <div className="product-tumb">
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="product-details">
                <span className="product-catagory">{product.category}</span>
                <h4><a href="">{product.title}</a></h4>
                <p>{product.description}</p>
                <div className="product-bottom-details">
                    <div className="product-price">Price ${product.price}</div>
                </div>
            </div>
        </div>
    );
};
