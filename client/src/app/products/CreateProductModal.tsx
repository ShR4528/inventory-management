import React, { FormEvent, useState } from 'react'
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

const CreateProductModal = ({isOpen, onClose, onCreate} 
    : CreateProductModalProps) => {

        const [formData, setFormData] = useState({
        productId: v4,
        name: '',
        price: 0,
        stockQuantity: 0,
        rating: 0         
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData,
                 [name]: 
                name === 'price' || name === 'stockQuantity' || name === 'rating'
                 ? parseFloat(value) 
                 : value,

                });
        }
        
        if(!isOpen) return null;

        const handleSubmilt = (e:FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onCreate(formData);
            onClose();
        }
        const labelCssStyle = "block text-sm font-medium text-gray-700";
        const inputCssStyle = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

      


  return (
    <div className='fixed inset-0 flex items-center bg-gray-500 bg-opacity-50 overflow-y-auto h-full w-full z-2'>
        <div className='relative top-20 mx-auto p-5 border w-95 shadow-lg rounded-md bg-white'>
            <Header  name="Create Product"/>
            <form onSubmit={handleSubmilt}>
                <label htmlFor="productName" className={labelCssStyle}>
                    Product Name
                </label>
                <input type="text" name='name' placeholder='Name'  
                onChange={handleChange}
                value={formData.name}
                className={inputCssStyle}
                required
                />
            </form>
        </div>
    CreateProductModal</div>
  )
}

export default CreateProductModal