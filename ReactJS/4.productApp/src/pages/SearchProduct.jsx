import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import SkeletonCard from '../components/SkeletonCard'

const SearchProduct = () => {
    let [allProducts, setAllProducts] = useState([]);
    let [searchProducts, setSearchProducts] = useState([]);
    let [searchInput, setSearchInput] = useState(null);
    let [isLoading, setIsLoading] = useState(false);

    let fetchAllProducts = async () => {
        try {
            setIsLoading(true)
            let response = await axios.get('https://dummyjson.com/products');
            console.log(response.data)
            setAllProducts(response.data.products)
        } catch (error) {
            console.error(error);
        }
    }


    let fetchSearchProducts = async () => {
        try {
            let response = await axios.get(`https://dummyjson.com/products/search?q=${searchInput}`);
            console.log(response);
            setSearchProducts(response?.data?.products)

        } catch (error) {
            console.error(error)
        }

    }


    useEffect(() => {

        fetchAllProducts()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false))
    }, [])


    useEffect(() => {
        setSearchProducts([])
        if (searchInput?.length > 2) {
            fetchSearchProducts()
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false))
        }
    }, [searchInput])


    return (
        <>
            <Navbar />
            {/* <SkeletonCard/> */}
            <div>
                <div className='flex justify-center'>
                    <input type="text" placeholder='search product'
                        className='px-4 py-3 outline-2 outline-blue-800'
                        onChange={(e) => setSearchInput((e.target.value).toLowerCase())}
                    />
                    {/* <button>search</button> */}
                </div>


                {
                    (isLoading) ?

                        <div className='grid justify-center grid-cols-4'>
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>

                        :

                        (searchProducts.length > 0) ?

                            <div className='flex justify-center flex-col'>
                                <h2 className='text-center text-4xl p-4'>Products</h2>

                                <div className='flex flex-wrap justify-center'>
                                    {searchProducts?.map((item) => {
                                        return <ProductCard
                                            pId={item?.id}
                                            title={item?.title}
                                            price={item?.price}
                                            category={item?.category}
                                            productImg={item?.thumbnail}
                                        />

                                    })}

                                </div>
                            </div>

                            :

                            (allProducts.length > 0) ?

                                <div className='flex justify-center flex-col'>
                                    <h2 className='text-center text-4xl p-4'>Products</h2>

                                    <div className='flex flex-wrap justify-center'>
                                        {allProducts?.map((item) => {
                                            return <ProductCard
                                                pId={item?.id}
                                                title={item?.title}
                                                price={item?.price}
                                                category={item?.category}
                                                productImg={item?.thumbnail}
                                            />

                                        })}
                                    </div>
                                </div>
                                :
                                <h2>no data.</h2>

                }

            </div>
        </>


    )
}

export default SearchProduct