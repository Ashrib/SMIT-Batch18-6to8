import { collection, db, getDocs, query, where } from './firebaseConfig.js';

let searchBtn  = document.querySelector("#search-btn");
let searchInp  = document.querySelector("#search-inp");
let products = [];



let getQueryData = async()=>{
    try {
        const q = query(  //// design a query (for certain condition)
            collection(db, "products"), /// collection reference
            where("name", "==", "product12") /// data condition
        );
        
        const querySnapshot = await getDocs(q); /// pass the query and fetch data
        querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());
          products.push({
            pid: doc.id,
            ...doc.data()
          })
        });
        console.log('products =>', products)
    } catch (error) {
        console.error(error);
    }
}


getQueryData()



