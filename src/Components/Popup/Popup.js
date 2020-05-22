import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Popup.css";
import image from "../../images/train.png";

function Popup() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <button
        className="uk-button uk-button-default uk-margin-small-right"
        type="button"
        uk-toggle="target: #popup-menu"
      >
        PopUp Button
      </button>

      <div id="popup-menu" uk-modal="true">
        <div className="uk-modal-dialog ">
          <div className="uk-modal-body">
            <div className="heading">
              <img alt="" src={image} />
              <h3 className="uk-modal-title">Journey Details</h3>
            </div>

            <div className="textArea">
              <div className="textArea1">
                <input
                  className="inputTrain"
                  type="text"
                  placeholder="train# / name"
                ></input>
                <i className="fas fa-train"></i>
              </div>

              <div className="textArea2">
                <input
                  className="inputDest"
                  type="text"
                  placeholder="Boarding station"
                ></input>
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="space"></div>

            <div className="dateBoxNew">
              <DatePicker
                placeholderText="Boarding date"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>

            <div className="dateBox">
              <h4>YESTERDAY</h4>
              <h4>TODAY</h4>
              <h4>TOMORROW</h4>
            </div>

            <div className="orBox"></div>
            <h5 className="or">OR</h5>

            <div className="pnrArea">
              <input className="" type="text" placeholder="Enter PNR "></input>
              <i className="fas fa-train"></i>
            </div>
          </div>

          <div className="recommended">
            <i className="fas fa-star"></i>
            <h6>Recomended Search</h6>
          </div>

          <div className="uk-modal-body">
            <div className="cards">
              <div className="pnrNo">
                <h4>1424567095</h4>
                <p>20-02-2020</p>
              </div>

              <div className="trainDetails">
                <p>12625 - Trivandrum - New Delhi Kerala Express</p>
              </div>
            </div>

            <div className="cards">
              <div className="pnrNo">
                <h4>1424567095</h4>
                <p>20-02-2020</p>
              </div>

              <div className="trainDetails">
                <p>12625 - Trivandrum - New Delhi Kerala Express</p>
              </div>
            </div>

            <div className="cards">
              <div className="pnrNo">
                <h4>1424567095</h4>
                <p>20-02-2020</p>
              </div>

              <div className="trainDetails">
                <p>12625 - Trivandrum - New Delhi Kerala Express</p>
              </div>
            </div>

            <div className="cards">
              <div className="pnrNo">
                <h4>1424567095</h4>
                <p>20-02-2020</p>
              </div>

              <div className="trainDetails">
                <p>12625 - Trivandrum - New Delhi Kerala Express</p>
              </div>
            </div>
          </div>

          <div className="trendingSearch">
            <i className="fas fa-chart-line"></i>
            <h6>Trending Search</h6>
          </div>

          <div className="uk-modal-body">
            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>12625 Kerala SF Express</p>
            </div>

            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>16792 sabari</p>
            </div>

            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>12625 Island Express</p>
            </div>

            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>16381 Kanyakumari Express</p>
            </div>

            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>12218 Kerala Sampark Kranti Express</p>
            </div>

            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>16792 palaruvi Express</p>
            </div>

            <div className="trendingCard">
              <i className="fas fa-chart-line"></i>
              <p>16792 sabari</p>
            </div>
          </div>

          <div className="uk-modal-body uk-modal-footer">
            <button className="rate">
              <i className="fas fa-rupee-sign"></i>
              <h4>439</h4>
              <p className="symbol"> | </p>
              <h6>3 item(s)</h6>
              <i className="fas fa-angle-down"></i>
              <p className="extra">Extra charges may apply</p>
            </button>

            <button className="proceed" type="button">
              <h4>PROCEED</h4>
              <p>Select Delivery Station</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popup;
