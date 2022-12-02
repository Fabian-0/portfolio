import React, { useContext } from "react";
import { BoxesContext } from "../../App";

/* export interface IAppProps {
} */

export function Portfolio(/* props: IAppProps */) {
  const { setCtx } = useContext(BoxesContext);

  function handleClick() {
    setCtx((prevState) => ({ ...prevState, isCardVisible: false }));
  }
  return (
    <div className="porfolio-card">
      <button onClick={handleClick} className="card__btn">
        x
      </button>
    </div>
  );
}
