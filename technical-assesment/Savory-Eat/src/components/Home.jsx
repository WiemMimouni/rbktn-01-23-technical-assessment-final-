import { React } from "react";
// import Allrecepies from "./allrecepies.jsx";

const Home = ({ changeView }) => {

  return (
    <div>
      <div className="latest_trand_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trand_info text-center">
                <h3>Discover latest trending recepies</h3>
                <a className="boxed-btn3" onClick={() => changeView("Allrecepies")}>
                  View all recepies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
