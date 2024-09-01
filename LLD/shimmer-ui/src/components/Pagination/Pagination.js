import React, { useState, useEffect } from 'react'
import Products from './Products';
import './Pagination.css';

const limit = 10;

const Pagination = () => {
    const [ pageNo, setPageNo ] = useState(0);
    const [ products, setProducts ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(0);

    useEffect(() => {
        fetchProducts();
    }, [pageNo]);

    const fetchProducts = async() => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit*pageNo}&select=title,price,description,discountPercentage,thumbnail`);
            const data = await response.json();
            console.log(data);
            setProducts(data.products);
            setTotalPages(Math.floor(data.total/data.limit))
        } catch(err) {
            console.log(err);
        }
    }

    const handlePageClick = (pageNumber) => {
        console.log(pageNumber, "pagenumber")
        setPageNo(pageNumber);
    }

    const handlePrevClick = () => {
        setPageNo((pageNo) => (pageNo>0 ? pageNo-1 : 0));
    }

    const handleNextClick = () => {
        setPageNo((pageNo) => (pageNo<totalPages ? pageNo+1 : totalPages));
    }

  return (
    <div className='pagination-ctr'>
        {
            products?.map((product, idx) => (
                <Products 
                    key={idx}
                    product={product}
                />
            ))
        }
        <div className='pages-indexing-ctr'>
            <p style={{ marginRight: "5px" }} onClick={handlePrevClick}>Prev</p>
            {Array(totalPages).fill(0).map((page, idx) => (
                <span className={idx === pageNo ? 'page-no-fill' : 'page-no'} key={idx} onClick={() => handlePageClick(idx)} style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", margin: "2px", cursor: "pointer" }}>{idx+1}</span>
            ))}
            <p style={{ marginLeft: "5px" }} onClick={handleNextClick}>Next</p>
        </div>
    </div>
  )
}

export default Pagination