import * as React from "react";
import TopRight from "../svg/TopRight";
import "../../assets/css/styledCard/index.css";
import "../../assets/css/styledCard/edges.css";
import "../../assets/css/styledCard/carousel.css";
import TopLeft from "../svg/TopLeft";
import LeftBottom from "../svg/LeftBottom";
import Triangle from "../svg/Triangle";

// export interface IAppProps {}

export default function StyledCard(props: any) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-main">
          {/* {props.children} */}
          <div className="card-carousel">
            <div className="card-carousel__icons">
              <Triangle className="card-carousel__prev" />
              <Triangle className="card-carousel__next" />
            </div>
            <div className="card_carousel-images">
              <img src="/img/1.png" alt="myt cambio climatico" />
            </div>
            <div className="card-carousel__info">
              <ul className="card-carousel-list">
                <li className="card-carousel-list__item">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima inventore consequuntur quia!
                </li>
                <li className="card-carousel-list__item">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima inventore consequuntur quia!
                </li>
                <li className="card-carousel-list__item">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima inventore consequuntur quia!
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-child card-child__top-left">
          <TopLeft className="card-child__top-left-0" />
        </div>
        <div className="card-child card-child__top-right">
          <TopRight className="card-child__top-right-0" />
        </div>
        {/* <div className="card-child card-child__bottom-right"></div> */}
        <Triangle className="card-child card-child__bottom-right" />
        <div className="card-child card-child__bottom-left">
          <LeftBottom className="card-child__bottom-left-0" />
        </div>
      </div>
    </div>
  );
}
