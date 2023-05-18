import { useState } from "react";

export const usePagination=(perPageRecord,totalPageRecord)=>{
    const totalPages=Math.ceil(totalPageRecord/perPageRecord);
    const [startPageIndex,setStartPageIndex]=useState(0)
    const [endPageIndex,setEndPageIndex]=useState(perPageRecord-1);
    const [currenPageIndex,setCurrentPageIndex]=useState(1);

    const displayPage=(pageNo)=>{
        setCurrentPageIndex(pageNo);
        let end_page_index=perPageRecord*pageNo-1;
        let start_page_index=(perPageRecord*pageNo)-perPageRecord;
        setStartPageIndex(start_page_index)
        if(end_page_index>totalPageRecord){
            setEndPageIndex(end_page_index-(end_page_index-totalPageRecord)-1)
        }
        else{
            setEndPageIndex(end_page_index);
        }
    }
    return [
        totalPages,
        startPageIndex,
        endPageIndex,
        currenPageIndex,
        displayPage,
    ];

}