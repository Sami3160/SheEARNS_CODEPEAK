import React, { useEffect,useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShop } from "../actions/shopActions";
import Loader from "./Loader";
import ShopCard from "./ShopCard";

const SpecialProduct = () => {

  const { keyword } = useParams();
  const { location } = useParams();
  const dispatch = useDispatch();
  const { shops, loading, error } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShop(keyword));
  }, [dispatch]);


  return (
    <>
      {loading && <Loader />}
      <div   style={{"display":"flex", "flexWrap":"wrap", "justifyContent":"space-between"}}>
        {shops &&
          shops.map((shop) => (
            
            <>
            <ShopCard imgurl={shop.image} title={shop.name} value={4} id={shop._id} category={shop.category}/>
              {/* <div className="special-product-card">
                <div className="d-flex justify-content-between">
                  <div className="prod-image">
                    <img src={shop.image} className="img-fluid" alt="watch" />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand"></h5>
                    <h6 className="title">{shop.name}</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />

                    <div className="discount-till d-flex align-items-center gap-10"></div>
                    <div className="prod-count my-3">
                      <p>{shop.category}</p>
                    </div>
                    <Link to={`/items/${shop._id}`} className="button">
                      View Shop
                    </Link>
                  </div>
                </div>
              </div> */}
            </>
          ))}

      </div>
    </>
  );
};

export default SpecialProduct;
