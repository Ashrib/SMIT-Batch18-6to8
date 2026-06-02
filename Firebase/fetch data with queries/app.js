import { collection, db, getDocs, query, where } from './firebaseConfig.js';

let searchBtn  = document.querySelector("#search-btn");
let searchInp  = document.querySelector("#search-inp");
let categoryBarDiv  = document.querySelector(".category-bar");


let products = [];
let categories = [];


let fetchCategories = async()=>{
    try {
        const querySnapshot = await getDocs(collection(db, 'categories') );  /// ==> [{},{}] 
        querySnapshot.forEach((doc)=>{
            categories = doc.data().categories;
            console.log(categories)
        })


    } catch (error) {
        console.error(error)
    }
}

fetchCategories().then(()=>{
    categories.map((category)=>{
        categoryBarDiv.innerHTML += `<button>${category}</button>`
    })
})



let searchProducts = async()=>{
    try {
    const q = query(
        collection(db, "products"), 
        where("category", "==", searchInp.value )
    );

    const querySnapshot = await getDocs(q); // ==> [] of objects

    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    } catch (error) {
        console.error(error)
    }

}

searchBtn.addEventListener("click", ()=> searchProducts())









/// get all docs
// update
// delete
/// create addDoc



/// chat.html
