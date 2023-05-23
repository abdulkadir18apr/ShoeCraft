export const  ProductReducer=(state,action)=>{
    const {type,payload}=action;
    
    switch(type){
        case 'setProducts':
            return {...state,products:[...payload],currentPage:[...payload.slice(0,8)],loading:false}
        case 'setCurrentPage':
            const currentPageProducts=[];
            for(let i=payload.startIndex;i<=payload.endIndex;i++){
                currentPageProducts.push(payload.filteredProducts[i]);
            }
            return {...state,currentPage:currentPageProducts,loading:false};
        case 'addCategoryFilter':
            return {...state,filters:{...state.filters,category:[...state.filters.category,payload]}};
        case 'removeCategoryFilter':
            return {...state,filters:{...state.filters,category:[...state.filters.category.filter((filter)=>filter!==payload)]}};
        case "setPriceFilter":
            return {...state,filters:{...state.filters,price:payload}};
        case "addFootwearTypeFilter":
            return {...state,filters:{...state.filters,footwearType:[...state.filters.footwearType,payload]}}
        case "removeFootwearTypeFilter":
            return {...state,filters:{...state.filters,footwearType:[...state.filters.footwearType.filter((type)=>type!==payload)]}}
        case "setRatingFilter":
            return {...state, filters:{...state.filters,rating:payload}}
        case "setSortingFilter":
            return {...state,filters:{...state.filters,sort:payload}}
        case "setSearhFilter":
            console.log("payload")
            return {...state,filters:{...state.filters,searchQuery:payload}}
        case "clearFilters":
            return {...state,filters:{category:[],sort:-1,rating:-1,footwearType:[],price:250,searchQuery:""}}
        

        default:
            return state;
    }

}