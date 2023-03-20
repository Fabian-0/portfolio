import * as React from "react";

export default function Triangle(
  props: React.HTMLAttributes<HTMLOrSVGElement>
) {
  return (
    <svg
      {...props}
      width="13.229mm"
      height="13.229mm"
      version="1.1"
      viewBox="0 0 13.229 13.229"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m13.229 0v13.229h-13.229z" fill="#f88a24" strokeWidth="0" />
    </svg>
  );
}
