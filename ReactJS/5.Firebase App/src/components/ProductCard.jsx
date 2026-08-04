import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({ title, price, pId, category,id }) => {
    let navigate = useNavigate()

    return (

        <div onClick={()=> {
            if(id){ navigate(`/product-details/${id}`)}
        } }

            className="lg:w-1/4 md:w-1/2 p-4 w-full border-1 border-black rounded-2xl">
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
                />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                </h2>
                <p className="mt-1">${price}</p>
            </div>
        </div>
    )
}

export default ProductCard