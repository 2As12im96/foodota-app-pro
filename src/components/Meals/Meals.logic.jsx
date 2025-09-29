import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from '../../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import { addToCart, getTotals } from '../../redux/cartSlice';

function useMealsLogic() {
    const [filterName, setFilterName] = useState(null);
    const [request, setRequest] = useState([]);

    const products = useSelector(state => state.products.data);
    const productStatus = useSelector((state) => state.products.status);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems, cartTotalQuantity, cartTotalAmount, favoriteTotalQuantity } = useSelector(state => state.cart);
    useEffect(() => {
        dispatch(getTotals()); 
    }, [cartItems, dispatch]);
    useEffect(()=>{
        const fetchData = async()=>{
            dispatch(productsFetch());
        }
        fetchData();
    },[]);
    useEffect(() => {
        if (products && Array.isArray(products)) {
            setRequest(products);
        } else {
            console.log(products);
            setRequest([]);
        }
    }, [products]);

    const groupedData = useMemo(() => {
        if (Array.isArray(request)) {
            return request.reduce((acc, item) => {
                acc[item.type] = (acc[item.type] || 0) + 1;
                return acc;
            }, {});
        } else {
            return {};
        }
    }, [request]);

    const handleFilter = (name) => {
        setFilterName(name);
    };

    const filteredData = useMemo(() => {
        if (Array.isArray(request)) {
            return filterName
                ? request.filter((item) => item.type === filterName)
                : request;
        } else {
            return [];
        }    
    }, [request, filterName]);

    const chexkpointer = [
        { id:'all', value: null, name:'All in one', count:100 },
        { id:'Appetizers', value: 'Appetizers', name:'Appetizers', count:10 },
        { id:'Beverages', value: 'Beverages', name:'Beverages', count:10 },
        { id:'Burgers', value: 'Burgers', name:'Burgers', count:10 },
        { id:'Chicken', value: 'Chicken', name:'Chicken', count:10 },
        { id:'Desserts', value: 'Desserts', name:'Desserts', count:10 },
        { id:'Pasta', value: 'Pasta', name:'Pasta', count:10 },
        { id:'Pizza', value: 'Pizza', name:'Pizza', count:10 },
        { id:'Sauces', value: 'Sauces', name:'Sauces', count:10 },
        { id:'SeaFood', value: 'SeaFood', name:'SeaFood', count:10 },
        { id:'Shakes', value: 'Shakes', name:'Shakes', count:10 }
    ];
    
    const productTypes = useMemo(() => {
        const types = Array.isArray(products) ? [...new Set(products.map(p => p.type))] : [];
        return [{ value: null, name: 'All in one' }, ...types.map(type => ({ value: type, name: type }))];
    }, [products]);

    const chexkpointerData = productTypes.map((item) => {
        return (
            <span key={item.value || 'all'} className="d-flex justify-content-between align-items-center pt-3 pb-3 type-product" onClick={() => handleFilter(item.value)}>
                <label htmlFor={item.value || 'all'}>
                    <input 
                    id={item.value || 'all'} 
                    className="mx-1" 
                    type="checkbox" 
                    checked={filterName === item.value} 
                    onChange={() => handleFilter(item.value)}/>{item.name}
                </label>
                <span className="lenght">({groupedData[item.value] || (item.value === null ? request.length : 0)})</span>
            </span>
        );
    });

    //create pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; 
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (startPage > 1) {
            pageNumbers.push(
                <li key={1} className="page-item">
                    <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
                </li>
            );
            if (startPage > 2) {
                pageNumbers.push(
                    <li key="ellipsis-start" className="page-item disabled">
                        <span className="page-link">...</span>
                    </li>
                );
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                    <button onClick={() => setCurrentPage(i)} className="page-link">
                        {i}
                    </button>
                </li>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push(
                    <li key="ellipsis-end" className="page-item disabled">
                        <span className="page-link">...</span>
                    </li>
                );
            }
            pageNumbers.push(
                <li key={totalPages} className="page-item">
                    <button className="page-link" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                </li>
            );
        }

        return pageNumbers;
    };
    
    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredData]); 

    const loadingState = productStatus === 'pending';

    // Handles adding the current item to the cart
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    const handleNavigate = ()=>{
        navigate('/Login' , {replace:true})
    }
    
    return {
        chexkpointerData,
        filterName,
        loading: loadingState, 
        filteredData,
        setFilterName,
        renderPageNumbers,
        goToPrevPage,
        goToNextPage,
        currentItems,
        currentPage,
        totalPages,
        handleAddToCart,
        handleNavigate
    }
}

export default useMealsLogic;