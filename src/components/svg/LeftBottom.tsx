import * as React from "react";

export default function LeftBottom(
  props: React.HTMLAttributes<HTMLOrSVGElement>
) {
  return (
    <svg
      {...props}
      width="26.458mm"
      height="26.458mm"
      version="1.1"
      viewBox="0 0 26.458 26.458"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke-width="0">
        <path d="m0 0v26.458h26.458z" fill="#f88a24" />
        <path
          d="m25.665 26.458-25.665-25.665v5.0271l20.638 20.637z"
          fill="#0c0a31"
        />
      </g>
    </svg>
  );
}
