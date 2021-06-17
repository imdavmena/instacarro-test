import { useEffect, useState } from "react";
import "./App.css";

import Me from "./assets/image/me.jpg";
import Card from "./components/Card";
import { Order } from "./models/Order";

function App() {
  const [data, setData] = useState<Order[]>();

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json"
      )
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.error(err));
    };
    return fetchData();
  }, []);

  const Navbar = () => {
    return (
      <div className="navbarStyle">
        <div className="sideMenuStyle">
          <img
            src="https://www.instacarro.com/wp-content/uploads/2020/09/734d330d-instacarro-logo.svg"
            height="42"
            width="168"
            alt="Instacarro"
          />
        </div>
        <div className="linksStyle">
          <a
            className="linkStyle"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/davmedina.m/"
          >
            Instagram 📸
          </a>
          <a
            className="linkStyle"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sys200/"
          >
            Linkeding 📶
          </a>
          <a
            className="linkStyle"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/imdavmena"
          >
            Twitter 🐥
          </a>
        </div>
        <div className="userMenuStyle">
          <img src={Me} alt="me" height="42" width="42" />
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {data
          ?.sort((a, b) => a.remainingTime - b.remainingTime)
          .map((x) => {
            return (
              <Card
                imageUrl={x.imageUrl}
                make={x.make}
                km={x.km}
                id={x.id}
                model={x.model}
                bids={x.bids}
                year={x.year}
                remainingTime={x.remainingTime}
                version={x.version}
                key={x.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
