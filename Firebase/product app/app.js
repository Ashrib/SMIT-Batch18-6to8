
import { addDoc, collection, db, getDocs, onSnapshot } from './firebaseConfig.js'


let addBtn = document.querySelector("#add-btn");
let productPriceInp = document.querySelector("#product-price");
let productNameInp = document.querySelector("#product-name");
let productCategoryInp = document.querySelector("#product-category");
let productsCont = document.querySelector("#products-container");
let products = [];



let formValidate = () => {
    if (productPriceInp.value == "" ||
        productNameInp.value == '' ||
        productCategoryInp.value == ''
    ) {
        console.log(new Error("all fields are required!"));
        return false
    }

    if (isNaN(Number(productPriceInp.value))) { /// price datatype must be numeric
        console.log(new Error("invalid price!"));
        return false
    }

    return true;
}


let addProduct = async () => {
    try {
        const docRef = await addDoc(collection(db, "products"), {
            name: productNameInp.value,
            price: Number(productPriceInp.value),  ///  convert string into number 
            category: productCategoryInp.value,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error(error)
    }
}

// let fetchProducts = async () => {
//     try {

//         const querySnapshot = await getDocs(collection(db, "products"));
//         querySnapshot.forEach((doc) => {
//             console.log(doc.id, " => ", doc.data());

//             // products.push({
//             //     ...doc.data(),
//             //     pId: doc.id,
//             // })

//             ///// OR
//             products = [...products, {
//                 ...doc.data(),
//                 pId: doc.id,
//             }]
//         });
//         console.log('products =>', products)

//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchProducts().then(() => {
//     renderProducts()
// })




let renderProducts = () => {
    productsCont.innerHTML = ''
    products.map((product) => {
        productsCont.innerHTML += `<div class='product-card'>
            <h3>Name: ${product?.name}</h3>
            <h3>Price: ${product?.price}</h3>
            <h3>Category: ${product?.category}</h3>
        
        </div>`
    })
}

/// products fetch (real-time updates) ----> GET request
const unsubscribe = onSnapshot(collection(db, "products"), (querySnapshot) => {
    products = []
    querySnapshot.forEach((doc) => {
        products.push({
            ...doc.data(),
            pId: doc.id,
        })
    });
    console.log("new data =>", products);
});



addBtn.addEventListener('click', () => {
    let checkValidation = formValidate();

    if (checkValidation) {
        addProduct();
    }
});


