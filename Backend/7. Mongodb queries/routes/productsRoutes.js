import express from 'express'
import mongoose from 'mongoose';
import Product from '../Models/productModel.js';

const productsRoutes = express.Router();

productsRoutes.get('/', async (req, res) => {   ///get all products
    try {
        let { price } = req.query
        let queryObj = {};
        if (req.query.price) {
            queryObj.price = Number(req.query.price)
        }

        console.log(queryObj)

        let productsData = await Product.find({ ...queryObj }); // get users from db

        return res.status(200).json({
            message: 'success in fetching products',
            data: productsData,
            code: 200
        });
    } catch (error) {
        console.error('error in fetching products')
        console.error(error);

        res.status(500).json({
            message: 'error in fetching products',
            data: null,
            code: 500
        })
    }
}
);


productsRoutes.get('/search', async (req, res) => {
    try {
        let { price, category, quantity, title } = req.query;
        console.log(req.query)

        let productsData = await Product.find({
            // price: {$lt: 3000, $gte: 400,},
            // category: {$nin:['electronic','beauty']},
        })



        return res.status(200).json({
            message: 'success in searching products',
            data: productsData,
            code: 200
        });
    } catch (error) {
        console.error('error in seraching products')
        console.error(error);

        res.status(500).json({
            message: 'error in seraching products',
            data: null,
            code: 500
        })
    }


})




/// create user
productsRoutes.post('/newProduct', async (req, res) => {
    try {
        console.log(req.body);

        let { price, description, category, title, quantity } = req.body;
        if (!price || !description || !category || !title || !quantity) {
            return res.status(400).json({
                message: 'required all fields to create product.',
                code: 400
            })
        }


        /// create new product
        let newProduct = new Product({ _id: new mongoose.Types.ObjectId(), ...req.body }); // product obj
        await newProduct.save() /// save product in db 

        res.json({
            message: 'created new product.',
            code: 200,
            data: newProduct
        })


    } catch (error) {
        console.error('error in creating product')
        console.error(error);

        res.status(500).json({
            message: 'error in creating product',
            data: null,
            code: 500
        })
    }
}




)


// /// delete a user
// productsRoutes.delete('/:id', async (req, res) => {
//     try {
//         let { id } = req.params;

//         let findUserExist = await User.findById(id);
//         console.log(findUserExist)
//         if (!findUserExist) {
//             return res.status(404).json({
//                 message: 'cannot find user with this id!',
//                 data: null,
//                 code: 404
//             })
//         }

//         await User.findByIdAndDelete(id);

//         res.status(200).json({
//             message: `successfully deleted a user with id: ${id}`,
//             code: 200
//         })

//     } catch (error) {
//         console.error('error in deleting user')
//         console.error(error);

//         res.status(500).json({
//             message: 'error in deleting user',
//             data: null,
//             code: 500
//         })
//     }

// })


// ///update a user
// productsRoutes.put('/:id', async (req, res) => {
//     try {
//         let { id } = req.params;

//         let findUserExist = await User.findById(id);
//         console.log(findUserExist)
//         if (!findUserExist) {
//             return res.status(404).json({
//                 message: 'cannot find user with this id!',
//                 data: null,
//                 code: 404
//             })
//         }

//         await User.findByIdAndUpdate(id, {
//             ...req.body
//         });

//         res.status(200).json({
//             message: `successfully updated a user with id: ${id}`,
//             code: 200
//         })

//     } catch (error) {
//         console.error('error in updating user')
//         console.error(error);

//         res.status(500).json({
//             message: 'error in updating user',
//             data: null,
//             code: 500
//         })
//     }

// })


export default productsRoutes;

