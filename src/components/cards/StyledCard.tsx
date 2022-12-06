import * as React from "react";
import TopRight from "../svg/TopRight";
import "../../assets/css/styledCard.css";
import TopLeft from "../svg/TopLeft";

// export interface IAppProps {}

export default function StyledCard(props: any) {
  return (
    <div className="card">
      <div className="card-main">{props.children}</div>

      {/* <div className="card-fragments"> */}
        <TopLeft className="card-child card-child__top-left" />
     {/*  <div className="">
        <div className="card-child__top-left-0"></div>
        <div className="card-child__top-left-1"></div>
      </div> */}
      <div className="card-child card-child__top-right">
        <TopRight className="card-child__top-right-0" />
      </div>
      <div className="card-child card-child__bottom-right"></div>
      <div className="card-child card-child__bottom-left"></div>
      {/* </div> */}
    </div>
  );
}
