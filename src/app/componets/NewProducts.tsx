
import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
{
    img:"/shirt2.jpg",
    title: "shirt",
    desc: "Pure Garment Dyed Cotton T-shirt",
    rating: 4,
    price: "45.00",
},
{
    img:"/shirt2.jpg",
    title: "shirt",
    desc: "Pure Garment Dyed Cotton T-shirt",
    rating: 3,
    price: "58.00",
},
{
    img:"/shirt4.jpg",
    title: "shirt",
    desc: "Pure Garment Dyed Cotton T-shirt",
    rating: 4,
    price: "100.00",
},
{
    img:"/shirt4.jpg",
    title: "shirt",
    desc: "Pure Garment Dyed Cotton T-shirt",
    rating: 4,
    price: "120.00",
},
{
    img:"/glasses1.jpg",
    title: "Sunglasses",
    desc: "Stunning Sunglasses",
    rating: 2,
    price: "120.00",
},
{
    img:"/glasses2.jpg",
    title: "Sunglasses",
    desc: "Stunning Sunglasses",
    rating: 3,
    price: "120.00",
},
{
    img:"/glasses1.jpg",
    title: "Sunglasses",
    desc: "Stunning Sunglassest",
    rating: 4,
    price: "120.00",
},
{
    img:"/glasses2.jpg",
    title: "Sunglasses",
    desc: "Stunning Sunglasses",
    rating: 5,
    price: "120.00",
},
{
    img:"/pant1.jpg",
    title: "Pants and trousers",
    desc: "Formal Pants",
    rating: 3,
    price: "120.00",
},
{
    img:"/pant2.jpg",
    title: "Pants and trousers",
    desc: "Formal Pants",
    rating: 4,
    price: "120.00",
},
{
    img:"/pant2.jpg",
    title: "Pants and trousers",
    desc: "Formal Pants",
    rating: 2,
    price: "120.00",
},
{
    img:"/pant1.jpg",
    title: "Pants and trousers",
    desc: "Formal Pants",
    rating: 4,
    price: "120.00",
},
{
    img:"/shoes1.jpg",
    title: "Sneakers",
    desc: "Plain White Casual Chunky Sneakers",
    rating: 3,
    price: "500.00",
},
{
    img:"/shoes2.jpg",
    title: "Sneakers",
    desc: "Plain White Casual Chunky Sneakers",
    rating: 2,
    price: "1000.00",
},
{
    img:"/shoes5.jpg",
    title: "Sneakers",
    desc: "Plain White Casual Chunky Sneakers",
    rating: 4,
    price: "1100.00",
},
{
    img:"/shoes4.jpg",
    title: "Sneakers",
    desc: "Plain White Casual Chunky Sneakers",
    rating: 5,
    price: "800.00",
},

];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>

                {productsData.map((item, index) => (
                <ProductCard key={index}
                img = {item.img}
                title = {item.title}
                desc = {item.desc}
                rating = {item.rating}
                price = {item.price} />
                ))}
                        </div>
                    </div>
                </div>
                );
                };

export default NewProducts;