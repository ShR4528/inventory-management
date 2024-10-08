import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from 'uuid';
import Header from '../(components)/Header';

type ProductFormData = {
    name: string;
    price: number;
    rating: number;
    stockQuantity: number;
}


type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
}

const CreateProductModal = ({ isOpen, onClose, onCreate }
    : CreateProductModalProps) => {

    const [formData, setFormData] = useState({
        productId: v4(),
        name: '',
        price: 0,
        stockQuantity: 0,
        rating: 0
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:
                name === 'price' || name === 'stockQuantity' || name === 'rating'
                    ? parseFloat(value)
                    : value,

        });
    }

    if (!isOpen) return null;

    const handleSubmilt = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    }
    const labelCssStyle = "block text-sm font-medium text-gray-700 dark:text-gray-300";
    const inputCssStyle = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md dark:bg-gray-800 dark:text-white";




    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
            <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
                <Header name="Create Product" />
                <form onSubmit={handleSubmilt} className='mt-5'>
                    {/* Product Name */}
                    <label htmlFor="productName" className={labelCssStyle}>
                        Product Name
                    </label>
                    <input type="text" name='name' placeholder='Name'
                        onChange={handleChange}
                        value={formData.name}
                        className={inputCssStyle}
                        required
                    />
                    {/*     PRICE */}
                    <label htmlFor="productPrice" className={labelCssStyle}>
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={formData.price}
                        className={inputCssStyle}
                        required
                    />
                    {/* STOCK QUANTITY */}
                    <label htmlFor="stockQuantity" className={labelCssStyle}>
                        Stock Quantity
                    </label>
                    <input
                        type="number"
                        name="stockQuantity"
                        placeholder="Stock Quantity"
                        onChange={handleChange}
                        value={formData.stockQuantity}
                        className={inputCssStyle}
                        required
                    />

                    {/* RATING */}
                    <label htmlFor="rating" className={labelCssStyle}>
                        Rating
                    </label>
                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating"
                        onChange={handleChange}
                        value={formData.rating}
                        className={inputCssStyle}
                        required
                    />
                    {/* CREATE ACTIONS */}
                    <button type='submit' className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                        Create
                    </button>
                    <button onClick={onClose}
                        type='button' className='ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'>
                        Close
                    </button>
                </form>
            </div>
            CreateProductModal</div>
    )
}

export default CreateProductModal