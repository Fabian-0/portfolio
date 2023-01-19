import * as React from "react";
import TopRight from "../svg/TopRight";
import "../../assets/css/styledCard/index.css";
import "../../assets/css/styledCard/edges.css";
import TopLeft from "../svg/TopLeft";
import LeftBottom from "../svg/LeftBottom";

// export interface IAppProps {}

export default function StyledCard(props: any) {
  return (
    <div className="card">
      <div className="card-main">
        {/* {props.children} */}
        
      </div>

      <div className="card-child card-child__top-left">
        <TopLeft className="card-child__top-left-0" />
      </div>
      <div className="card-child card-child__top-right">
        <TopRight className="card-child__top-right-0" />
      </div>
      <div className="card-child card-child__bottom-right"></div>
      <div className="card-child card-child__bottom-left">
        <LeftBottom className="card-child__bottom-left-0" />
      </div>
    </div>
  );
}
