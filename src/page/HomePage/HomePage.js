import React from "react";
import "./Homepage.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function HomePage() {
  return (
    <>
      {/* Cover Page */}
      <section>
        <div className="container">
          <div className="my-3">
            <img
              src="images/banner2.jpg"
              className="img-fluid rounded-corners"
              alt="Cover Image"
              style={{ width: "100%" }}
            />
          </div>

          {/* Category Section */}
          <div className="my-5" >
          <div className="my-5">
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab
                eventKey="nearby"
                title={
                  <>
                    <i className="fas fa-laptop" style={{ marginRight: '8px' }} />
                    Nearby
                  </>
                }
              >
              </Tab>
              <Tab
                eventKey="promotion"
                title={
                  <>
                    <i className="fas fa-laptop" style={{ marginRight: '8px' }} />
                    Promotion
                  </>
                }
              >
              </Tab>
              <Tab
                eventKey="newcomers"
                title={
                  <>
                    <i className="fas fa-laptop" style={{ marginRight: '8px' }} />
                    Newcomers
                  </>
                }
              >
                
              </Tab>
              <Tab
                eventKey="best-sellers"
                title={
                  <>
                    <i className="fas fa-laptop" style={{ marginRight: '8px' }} />
                    Best Sellers
                  </>
                }
              >
                
              </Tab>
              <Tab
                eventKey="top-rated"
                title={
                  <>
                    <i className="fas fa-laptop" style={{ marginRight: '8px' }} />
                    Top Rated
                  </>
                }
              >
                
              </Tab>
            </Tabs>
          </div>
          </div>

   


          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product1.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product2.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product2.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product3.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product4.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product5.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product5.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card no-border">
                <img
                  src="images/product6.jpg"
                  className="card-img-top rounded-corners"
                  alt="..."
                />
                <div className="card-body">
                <div className="d-flex justify-content-between">
                   <div>
                   <h6 className="card-title ">Burger Mozza XL</h6>
                   <p className="card-text">Some quick</p>
                   </div>
                  <p className="card-price">$9.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
