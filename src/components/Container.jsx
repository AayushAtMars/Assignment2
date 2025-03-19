import React from 'react'
import {search} from '../data/dummy'
import {featuredItems} from '../data/dummy'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from './Card';
import Card2 from './Card2';

const Container = () => {

    const handleAddToCart = (itemName) => {
        toast.success(`${itemName} added to cart!`);
      };

      
  return (
    <div className="p-6 bg-white">
      <ToastContainer  autoClose={2000} />
      
      <h2 className="text-2xl font-bold mb-3">Based on your search</h2>
      <div className="grid grid-cols-3 gap-4">
        {search.map((item) => (
          <Card key={item.id} item={item} onAdd={handleAddToCart} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-3">Featured Items</h2>
      <div className="flex justify-between items-center px-15">
        {featuredItems.map((item) => (
          <Card2 key={item.id} item={item} onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default Container
