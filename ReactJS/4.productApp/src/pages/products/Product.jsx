import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const Product = () => {
    let [productData, setProductData] = useState(null)
    let { id } = useParams()

    let fetchProductDetails = async () => {
        try {
            let response = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(response.data);
            setProductData(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {

        fetchProductDetails()

    }, [])





    return (
        (productData)?

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={productData?.thumbnail}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            {productData?.brand}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {productData?.title}
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {Array((Math.round((productData?.rating)||0)))?.fill(0)?.map((i) => {
                                    return (<svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>)
                                })}

                                <span className="text-gray-600 ml-3">Rating: {productData?.rating} </span>
                            </span>

                                <span className="flex items-center border-l-2 ml-2 pl-2">

                                    {
                                        ((`${productData?.availabilityStatus}`).toLowerCase() == 'in stock')
                                        ?
                                        <span className='text-2xl text-green-700 '>{productData?.availabilityStatus}</span>
                                        
                                        :
                                        <span className='text-2xl text-red-700 '>{productData?.availabilityStatus}</span>

                                    }

                                </span>

                            
                        </div>
                        <p className="leading-relaxed">
                            {productData?.description}
                        </p>
                        
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                ${productData?.price}
                            </span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Buy
                            </button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :
        <h1>loading....</h1>

    )
}

export default Product