import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../utilis/firebaseConfig'
import { useParams } from 'react-router'
import ProductCard from '../components/ProductCard'

const ProductDetails = () => {
    let { id } = useParams();
    let [productData, setProductData] = useState(null)


    let fetchProductDetails = async () => {
        try {
            let response = await getDoc(doc(db, "products", id));
            setProductData(response.data());
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        if (id) {
            fetchProductDetails();
        }
    }, [])

    return (
        <ProductCard
            pId={productData?.pid}
            title={productData?.name}
            category={productData?.category}
            price={productData?.price}
        />
    )
}

export default ProductDetails