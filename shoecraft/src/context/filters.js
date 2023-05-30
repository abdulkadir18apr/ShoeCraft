import { useProductContext } from "./ProductContext";



const categoryFilter=(products,categories)=>{
    let filteredResult=[]
    if(categories.length===0){
        return products;
    }
    else{
        const {men,women,kids}=products.reduce((acc,item)=>{
            if(item.gender==="MEN"){
                return {...acc,men:[...acc.men,item]}
            }
            else if(item.gender==="WOMEN"){
                return {...acc,women:[...acc.women,item]}
            }
            else{
                return {...acc,kids:[...acc.kids,item]}
            }
        },{men:[],women:[],kids:[]})
    categories.map((category)=>{
        if(category==='MEN'){
            filteredResult=[...filteredResult,...men]
        }
        else if(category==='WOMEN'){
            filteredResult=[...filteredResult,...women]
        }
        else{
            filteredResult=[...filteredResult,...kids]
        }
        })
    }
    return filteredResult;
}

const priceFilter=(products,value)=>{
    
    if(value>=250){
        return products;
    }
    else{
        return products.filter((item)=>item.price<=value)
    }
}

const footwearTypeFilter=(products,footwearType)=>{

    if(footwearType.length===0){
        return products;
    }
    else{
        return products.filter((product)=>footwearType.includes(product.category));
    }

}

const ratingFilter=(products,rating)=>{
    if(rating===-1){
        return products;
    }
    else{
        return products.filter((products)=>products.rating>=rating)
    }
}

const sortingFilter=(products,sortingType)=>{
    if(sortingType===-1){
        return products;
    }
    else if(sortingType===0){
        //asending sort by price
        return products.sort((a,b)=>a.price-b.price)
    }
    else{
        //descending  sort by price
        return products.sort((a,b)=>b.price-a.price)

    }
}

const SearchFilter=(products,searchQuery)=>{
    if(searchQuery===""){
        return products;        
    }
    return(products.filter((product)=>{
        const productName=product.name.toLowerCase();
        const productBrand=product.brand.toLowerCase();
        const searchQueryLower=searchQuery.toLowerCase();
        return productName.includes(searchQueryLower) || productBrand.includes(searchQueryLower);
    }));

}


 export const applyFilters=(products,filters)=>{
    let filteredProducts=categoryFilter([...products],filters.category);
    filteredProducts= priceFilter([...filteredProducts],filters.price); 
    filteredProducts=footwearTypeFilter([...filteredProducts],filters.footwearType);
    filteredProducts=ratingFilter([...filteredProducts],filters.rating);
    filteredProducts=sortingFilter([...filteredProducts],filters.sort);
     filteredProducts=SearchFilter([...filteredProducts],filters.searchQuery);
    return filteredProducts;
}