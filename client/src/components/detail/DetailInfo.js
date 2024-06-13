import React from 'react';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../actions/CartAction'
import {Link} from 'react-router-dom'
import {formatPrice} from '../../untils/index'
import { message} from 'antd';

function DetailInfo(props) {
    const dispatch = useDispatch()
    const { product } = props;

    const success = () => {
        message.success({
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0'
            },
          });
      };
    
    function handleAddProduct(product) {
        const action = AddToCart(product)
        dispatch(action)
    }

    const  AddProductToCart = async (product) => {
        const action = AddToCart(product);
        await dispatch(action);
        success()
    }

    return (
        <div className="detail-info-right">
            <div className="detail-info-right-price">
                <p className="price-box">
                    <span className="saleprice">{formatPrice(product.salePrice)}đ</span>
                    <span className="old-price">Giá niêm yết : <strong className="price">{formatPrice(product.price)}đ</strong> </span>
                </p>
                <p className="detail-info-sale">
                    Sản phẩm thuộc chương trình HOT SALE CUỐI TUẦN - Nhanh tay thanh toán!
                            </p>
            </div>

            <div className="detail-info-right-buy">
                <div className="detail-info-right-buy-now">
                    <div>
                    <Link to="/cart" onClick={() => handleAddProduct(product)}>
                        <strong>MUA NGAY</strong>
                        <br></br>
                        <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
                    </Link>
                    </div>
                    <div className="add-to-cart">
                    <Link to={"/detail/" + product._id} onClick={(e) => {AddProductToCart(product)}}>
                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/add-to-cart.png" alt="" />
                        <br></br>
                        <span>Thêm vào giỏ hàng</span>
                    </Link>
                    </div>
                </div>
                <div className="detail-info-right-buy-installment">
                    <a href="">
                        <strong>TRẢ GÓP 0%</strong>
                        <br></br>
                        <span>(Xét duyệt qua điện thoại)</span>
                    </a>
                    <a href="">
                        <strong>TRẢ GÓP QUA THẺ</strong>
                        <br></br>
                        <span>(Visa, Master, JCB)</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DetailInfo;