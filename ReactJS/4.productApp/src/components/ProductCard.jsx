import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({price, productImg, category, title, pId}) => {


  let navigate = useNavigate()

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-1 border-black" 
        
        onClick={()=> navigate(`/product-details/${pId}`)}
        >
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={productImg}
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