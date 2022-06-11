import React, { useEffect } from "react";
import styled from "styled-components";

export default function HexagonGallery({ img1, img2, img3, img4, img5, img6 }) {
  return (
    <PageWrapper>
      {/* base(target="_blank") */}
      <ul>
        <li>
          <a href="https://unsplash.com/photos/iuvLYv85r40" />
          <img src={img1} />
        </li>

        <li>
          <a href="https://unsplash.com/photos/iuvLYv85r40" />
          <img src={img2} />
        </li>
        <li>
          <a href="https://unsplash.com/photos/iuvLYv85r40" />
          <img src={img3} />
        </li>
        <li>
          <a href="https://unsplash.com/photos/iuvLYv85r40" />
          <img src={img4} />
        </li>
        <li>
          <a href="https://unsplash.com/photos/iuvLYv85r40" />
          <img src={img5} />
        </li>
        <li>
          <a href="https://unsplash.com/photos/iuvLYv85r40" />
          <img src={img6} />
        </li>
      </ul>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
  }

  ul {
    width: 70vmin;
    height: 70vmin;
    position: relative;
    list-style: none;
  }

  li {
    /*
    |a|d|a|
    -------  -           
    |/   \|  | 0.5h
    |\   /|  ^          
    ------- 
    |  w  |
  
    a = 0.5h/tan60 = 0.28867513459h
    d = 0.5h/sin60 = 0.57735026919h
    w = a + d + a  = 1.15470053838h
  
    [zoom out]
  
        |a|_d_|         _____    _
        /|     \       /     \   |
  ang=60_|      \__d__/       \  | h     
       \        /     \       /  |
        \_____|/|      \_____/  _|
              a     
       |--------|
           w
  */
    --h: calc(100% / 3);
    --w: calc(1.15470053838 * var(--h));
    --a: calc(0.28867513459 * var(--h));
    --d: calc(0.57735026919 * var(--h));
    height: var(--h);
    width: var(--w);
    position: absolute;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 
  
   [clip-path coordinates]
  
    --A-F--
   B|/   \|E    coord.
    |\   /|       A(a/w, 0)
    --C-D--       B(0, 50%)
                  C(a/w, 100%)
                  D(100% - a/w, 100%)
                  E(100%, 50%)
                  F(100% - a/w, 0)
                where a/w = 0.24999999999
  */
    --aw: 24.99999999999%;
    clip-path: polygon(
      var(--aw) 0,
      0 50%,
      var(--aw) 100%,
      calc(100% - var(--aw)) 100%,
      100% 50%,
      calc(100% - var(--aw)) 0
    );
  }

  li:nth-of-type(1) {
    left: calc(50% - var(--a) - var(--d) * 0.5);
    top: 0;
  }
  li:nth-of-type(2) {
    left: calc(50% - var(--a) * 2 - var(--d) * 1.5);
    top: calc(var(--h) * 0.5);
  }
  li:nth-of-type(3) {
    left: calc(50% - var(--a) * 2 - var(--d) * 1.5);
    top: calc(var(--h) * 1.5);
  }
  li:nth-of-type(4) {
    left: calc(50% - var(--a) - var(--d) * 0.5);
    top: calc(var(--h) * 2);
  }
  li:nth-of-type(5) {
    left: calc(50% + var(--d) * 0.5);
    top: calc(var(--h) * 0.5);
  }
  li:nth-of-type(6) {
    left: calc(50% + var(--d) * 0.5);
    top: calc(var(--h) * 1.5);
  }

  /* 
style 
*/

  ul {
    filter: drop-shadow(0 0 10px hsla(0, 0%, 0%, 0.3));
  }

  li:hover {
    filter: drop-shadow(0 0 10px powderblue);
    z-index: 10;
  }

  /*
anim
*/

  ul {
    animation: r 4s forwards;
  }
  @keyframes r {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0);
    }
  }

  li {
    animation: ir 4s forwards;
  }
  @keyframes ir {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;
