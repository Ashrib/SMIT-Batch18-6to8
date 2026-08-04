import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../utilis/firebaseConfig.js'
import ProductCard from '../components/ProductCard.jsx';

const LandingPage = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);





    let fetchProducts = async () => {
        try {
            setLoading(true)
            let productsData = []
            let response = await getDocs(collection(db, "products"));
            // console.log(response)
            response.forEach((doc) => {
                // console.log(doc.data())
                productsData = [...productsData, {...doc.data(), id: doc.id} ]
            })
            setProducts([...productsData])

        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        fetchProducts().then(() => setLoading(false))
            .catch(() => setLoading(false))
    }, [])


        console.log(products)


    return (

        (loading) ?


            <h2>loading ......</h2>


            :

            (products.length > 0) ?


                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 gap-2">
                            {products.map((item) => {
                                return <ProductCard
                                    key={item?.id}
                                    id={item?.id}
                                    pId={item?.pid}
                                    title={item?.name}
                                    category={item?.category}
                                    price={item?.price}
                                />
                            })}

                        </div>
                    </div>
                </section>
                :

                <h2>
                    no data ....
                </h2>

    )
}

export default LandingPage