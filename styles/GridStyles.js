import styled from "styled-components";
export const GridStyles = styled.div`
  --font-code: "SF Mono";
  --code-bg: #292e3e;
  .grid {
    min-height: 80vh;
    padding: 1rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      grid-gap: 5rem;
      padding: 2rem 5rem;
    }
  }

  .grid__column {
    margin-bottom: 3rem;
  }

  .grid__result {
    overflow: hidden;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid__name {
    background-color: #fafafa;
    padding: 1rem;
    font-size: 1.4rem;
    display: inline-block;
    color: #001940;
  }

  .grid__desc {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
  .grid__copy {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    transform: translateY(-100%);
    text-transform: uppercase;
    background-color: #fafafa;
    color: #999;
  }
  .grid__code {
    position: relative;
    margin-top: 5rem;
  }

  .grid__code:before {
    content: "HTML";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    display: inline-block;
    padding: 5px;
    text-transform: uppercase;
    font-size: 1.4rem;
    background-color: #fafafa;
    color: #999;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .grid__code.grid__css:before {
    content: "CSS";
  }

  .grid pre[class*="language-"] {
    background-color: var(--code-bg) !important;
  }
  .grid code[class*="language-"],
  .grid pre {
    white-space: nowrap;
    font-family: "SF Mono", "Roboto Mono", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    padding: 1rem !important;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
  }
`;
