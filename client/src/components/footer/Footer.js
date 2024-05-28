import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-name">
            <h2>phone store</h2>
          </div>
          <div className="footer-top-about">
            <h2>Thông tin và chính sách</h2>
            <ul>
              <li>
                <a>Mua hàng và thanh toán Online</a>
              </li>
              <li>
                <a>Mua hàng trả góp Online</a>
              </li>
              <li>
                <a>Mua hàng trả góp bằng thẻ tín dụng</a>
              </li>
              <li>
                <a>Chính sách giao hàng</a>
              </li>
              <li>
                <a>Tra thông tin bảo hành</a>
              </li>
              <li>
                <a>Tra cứu hoá đơn điện tử</a>
              </li>
              <li>
                <a>Thông tin hoá đơn mua hàng</a>
              </li>
              <li>
                <a>Trung tâm bảo hành chính hãng</a>
              </li>
              <li>
                <a>Quy định về việc sao lưu dữ liệu</a>
              </li>
              <li>
                <a>
                  <img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"></img>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-sp">
            <h2>Tổng đài hỗ trợ miễn phí</h2>
            <p>Support 028.71.087.088 (07:00-21:00)</p>
            <p>Delivery 1800 6936 (07:00-21:00)</p>
            <h2>Phương thức thanh toán</h2>
            <div>
              <ul>
                <li>
                  <a href="https://cellphones.com.vn/sforum/apple-pay-viet-nam">
                    <img src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"></img>
                  </a>
                </li>
                <li>
                  <a href="https://cellphones.com.vn/sforum/huong-dan-su-dung-vnpay-qrcode-tren-website-cellphones">
                    <img src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"></img>
                  </a>
                </li>
                <li>
                  <a href="https://cellphones.com.vn/huong-dan-thanh-toan-qua-vi-momo-cellphones">
                    <img src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"></img>
                  </a>
                </li>
                <li>
                  <a href="https://cellphones.com.vn/sforum/huong-dan-toan-bang-zalopay-khi-mua-hang-tren-website-cellphones">
                    <img src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-top-delivery">
            <h2>Dịch vụ và thông tin khác</h2>
            <ul>
              <li>
                <a>Ưu đãi thanh toán</a>
              </li>
              <li>
                <a>Quy chế hoạt động</a>
              </li>
              <li>
                <a>Chính sách bảo mật thông tin cá nhân</a>
              </li>
              <li>
                <a>Chính sách Bảo hành</a>
              </li>
              <li>
                <a>Liên hệ hợp tác kinh doanh</a>
              </li>
              <li>
                <a>Tuyển dụng</a>
              </li>
              <li>
                <a>Dịch vụ bảo hành điện thoại</a>
              </li>
              <li>
                <a>Dịch vụ bảo hành mở rộng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <p>Copyright © 2024 Phone Store. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
