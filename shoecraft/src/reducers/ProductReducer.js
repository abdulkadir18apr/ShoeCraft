export const  ProductReducer=(state,action)=>{
    const {type,payload}=action;
    
    switch(type){
        case 'setProducts':
            return {...state,products:[...payload],currentPage:[...payload.slice(0,8)],loading:false}
        case 'setCurrentPage':
            const currentPageProducts=[];
            for(let i=payload.startIndex;i<=payload.endIndex;i++){
                currentPageProducts.push(state.products[i]);
            }
            return {...state,currentPage:currentPageProducts,loading:false};
        default:
            return state;
    }

}