import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import { useNavigate } from 'react-router'
import Navbar from '../../components/Navbar'

const Products = () => {
  let [products, setProducts] = useState([])

  let fetchProducts = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products');
      console.log(response.data)
      setProducts(response.data.products)


    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {

    fetchProducts()

  }, [])


  return (

    <>

      <Navbar/>

      <div>
        {(products.length > 0) ?

          <section className="text-gray-600 body-font">
            <div className="container px-3 py-18 mx-auto">
              <div className="flex flex-wrap -m-4 gap-2">
                {
                  products?.map((product) => {

                    return <ProductCard
                      pId={product?.id}
                      title={product?.title}
                      price={product?.price}
                      category={product?.category}
                      productImg={product?.thumbnail}
                    />
                  })
                }
              </div>
            </div>
          </section>

          :

          <h2>no data...</h2>

        }

      </div>

    </>

  )
}

export default Products