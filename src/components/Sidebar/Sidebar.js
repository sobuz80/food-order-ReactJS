import React from "react";
import "./Sidebar.css";
import { IoChevronDown } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";
import Food from "../../image/04.jpg";
import { RxCross2 } from "react-icons/rx";
import Form from "react-bootstrap/Form";
import { RiCouponLine } from "react-icons/ri";

function Sidebar() {
  return (
    <>
      {/* Right Side: 1/3 Width */}
      <div className="col-md-3">
        <div className="my-3">
          <div className="card checkout-card">
            <div className="card-body">
              <h5 className="card-title">Order Information</h5>

              {/* Address Section */}
              <div className="my-3">
                <p className="delivery_Address">delivery address</p>
                <div className="order_address">
                  <p className="del_address">
                    1234 Main St, Springfield, IL 62704
                  </p>
                  <IoChevronDown />
                </div>
                <div className="d-flex align-items-center pt-2">
                  <CiStopwatch />
                  <p className="m-0 order_time">20 min</p>
                </div>
              </div>

              {/* Items Section */}
              <div className="my-3">
                <h6>Items</h6>

                <div className=" p-2 rounded-2 order_item_div">
                  <div>
                    <img
                      src={Food}
                      alt=""
                      className="img-fluid order_item_img"
                    />
                  </div>
                  <div className=" w-100 order_details">
                    <div>
                      <p className="order_name">order name</p>
                      <div className="increase_list">
                        <RxCross2 />
                        <Form.Select aria-label="" className="select_item">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Select>
                      </div>
                    </div>
                    <p className="order_price">$70</p>
                  </div>
                </div>
              </div>

              {/* Subtotal Section */}
              <div className="my-3 total_price">
                <div className="d-flex justify-content-between pt-3">
                  <p className="all_margin">Subtotal</p>
                  <p className="all_margin">$30.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="all_margin">Delivery Fee</p>
                  <p className="all_margin">$5.00</p>
                </div>
              </div>

              {/* Payment Section */}
             
                <div className="coupon_bg p-2 d-flex justify-content-between align-items-center">
                  <p className="all_margin coupon_text">find promotion</p>

                  <button className="coupon_btn d-flex align-items-center">
                    <RiCouponLine size={"12px"} />
                    <span className="add_coupon_text">add coupon</span>
                  </button>
                </div>
              {/* Total Section */}
              <div className="my-3">
                <div className="d-flex justify-content-between border-top pt-3">
                  <p>Total</p>
                  <p>$35.00</p>
                </div>
              </div>
              {/* Checkout Button */}
              <button className="btn btn-primary btn-block">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
