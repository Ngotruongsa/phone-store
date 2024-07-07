import React, { useEffect, useState } from 'react';
import ListProduct from './ListProduct';
import './Sale.css';
import { handlePercentDiscount } from '../../untils/index';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../actions/ProductAction';
import FilterProduct from './FilterProduct';
import SortByPrice from './SortByPrice/SortByPrice';
import { Pagination } from 'antd';

function AllProduct(props) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.allProduct.product);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20);

    useEffect(() => {
        dispatch(getAllProduct());

        return () => {
            return [];
        };
    }, [dispatch]);

    // Calculate current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product ? product.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); // Scroll to top of the page
    };

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <FilterProduct />
                <SortByPrice />
                {product && product.length > 0 ? (
                    <>
                        <ListProduct HotSaleProducts={handlePercentDiscount(currentProducts)} />
                        <Pagination
                            current={currentPage}
                            pageSize={productsPerPage}
                            total={product.length}
                            onChange={paginate}
                            style={{ textAlign: 'center', marginTop: '20px' }}
                        />
                    </>
                ) : (
                    <span>Không có sản phẩm</span>
                )}
            </div>
        </section>
    );
}

export default AllProduct;
