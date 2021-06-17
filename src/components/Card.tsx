import React, { useEffect, useState } from "react";
import { Order } from "../models/Order";
import "./Card.css";

const Card = (order: Order) => {
  const [bid, setBid] = useState(0);
  const [time, setTime] = useState(order.remainingTime);
  useEffect(() => {
    const OrderValue = () => {
      if (order.bids.length > 0) {
        return setBid(Math.max(...order.bids.map((x) => x.amount)));
      }
      return setBid(0);
    };

    OrderValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div key={order.id}>
      <div className="card">
        <ul>
          <li
            className="booking-card"
            style={{ backgroundImage: `url('${order.imageUrl}')` }}
          >
            <div className="book-container">
              <div className="content">
                <button className="btn" onClick={() => setBid(bid + 250)}>
                  Fazer oferta
                </button>
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">{order.make}</h2>
              <p className="sub-title">
                {order.model} - {order.year}
              </p>
              <p className="sub-title">{time} ⏰</p>
              <p className="price">
                <svg
                  className="icon"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z"
                  />
                </svg>
                Max bid: R$
                {bid.toLocaleString("pt-BR", {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                })}
              </p>
              <div className="more-information">
                <div className="info-and-date-container">
                  <div className="box info">
                    <svg
                      className="icon"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                      />
                    </svg>
                    <p>{order.version}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
