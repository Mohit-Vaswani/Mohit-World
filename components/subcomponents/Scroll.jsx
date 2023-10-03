import Link from 'next/link';
import React from 'react';

const ScrollButton = () => {
  return (
    <div className='scrollMain'>
      <Link href="/about" className="go-down-btn" >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="150px"
          height="150px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
        >
          <polygon fill="#232426" points="55.334,46 49.333,58 43.333,46" />
          <path
            id="textPath"
            fill="none"
            d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
          />
          <text className='text'>
            <textPath xlinkHref="#textPath">
              <tspan x="10">NEXT</tspan>
              <tspan x="47" dx="30">
                NEXT
              </tspan>
              <tspan x="77" dx="60">
                NEXT
              </tspan>
              <tspan x="107" dx="90">
                NEXT
              </tspan>
            </textPath>
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default ScrollButton;
