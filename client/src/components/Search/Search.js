import React from 'react';
import { useSelector } from 'react-redux';
import {handlePercentDiscount} from '../../untils/index'
import './Search.css'
import ListProduct from './ListProduct'
function Search(props) {
    const searchProduct = useSelector(state => state.searchProduct)
    const {products} = searchProduct;
    
    
    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                {
                    products && products.length > 0 ? (<ListProduct HotSaleProducts={handlePercentDiscount(products)}></ListProduct>) : (
                    <>
                    <div className="search-empty-result-section">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/search/a60759ad1dabe909c46a.png" alt="" />
                    <h3>Không tìm thấy sản phẩm nào</h3>
                    <h3>Hãy thử sử dụng các từ khóa chung chung hơn</h3>
                    </div>
                    </>
                )
                }
            </div>
        </section>
    );
}

export default Search;