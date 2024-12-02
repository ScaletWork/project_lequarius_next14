import { SvgProps } from "@/types/common";
import { FC } from "react";

const MailIconSvg: FC<SvgProps> = (props) => {
  return (
    <svg
      width={props.width || "46px"}
      height={props.height || "46px"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Complete">
        <g id="mail">
          <g>
            <polyline
              fill="none"
              points="4 8.2 12 14.1 20 8.2"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />

            <rect
              fill="none"
              height="14"
              rx="2"
              ry="2"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="18"
              x="3"
              y="6.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MailIconSvg;
