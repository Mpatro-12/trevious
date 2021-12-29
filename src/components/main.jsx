import React from "react";
import "../css/section.css";

const Main = () => {
  return (
    <>
      <section className="border d-flex justify-content-center">
        <div className="row container main-container">
          <div className="col-md-8 col-12 border">
            <div class="form-outline mb-4 mt-3">
              <input
                type="search"
                class="form-control"
                id="datatable-search-input"
                placeholder="search"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
