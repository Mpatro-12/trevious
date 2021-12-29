import React from "react";
import { useState, useEffect } from "react";
import "../css/apidata.css";
import Header from "./Header";
import LoginForm from "./LoginForm";

function Apidatademo({ isAuth }) {
  const [datas, setData] = useState([]);
  const [origData, setOrigData] = useState([]);

  useEffect(() => {
    getData();

    // Update the document title using the browser API
  }, []);
  const getData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`
    );
    const data = await response.json();
    setData(data);
    setOrigData(data);
  };

  function onSearchInput(e) {
    e.target.value
      ? setData(
          origData.filter((data) =>
            data.name.toLowerCase().includes(e.target.value)
          )
        )
      : setData(origData);
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="form-outline mb-4 mt-3">
              <input
                type="search"
                className="form-control"
                id="datatable-search-input"
                placeholder="search"
                onChange={onSearchInput}
              />
            </div>

            <table className="table container">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Logo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Add to Favourites</th>
                </tr>
              </thead>
              {datas.map((d) => (
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <img
                        src={d.image}
                        className="img-container"
                        alt="image"
                      ></img>
                    </td>
                    <td>{d.name}</td>
                    <td>{d.current_price}</td>
                    <td>
                      <button className="btn btn-primary"></button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="col-6 py-3">
            {isAuth ? <h4>Favourite Coins</h4> : <LoginForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Apidatademo;
