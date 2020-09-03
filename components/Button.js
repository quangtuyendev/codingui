import React from "react";
import Template from "./Template";

const ButtonWithIcon = () => {
  return (
    <Template
      title="Button with icon"
      source="form"
      html={`<button class="button-icon"><i class="fab fa-youtube icon"></i><span class="text">Youtube</span></button>`}
      css={`
        .button-icon {
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.4rem;
          text-transform: uppercase;
          width: 100%;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-color: #e62117;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button-icon .icon {
          font-size: 2rem;
          margin-right: 1rem;
        }
        .button-icon .text {
          font-weight: 600;
        }
      `}
    ></Template>
  );
};

const GradientButton = () => {
  return (
    <Template
      title="Gradient Button"
      source="form"
      html={`<button class="gradient-button">Gradient Button</button>`}
      css={`
        .gradient-button {
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-image: var(--gradient);
        }
      `}
    ></Template>
  );
};
const RoundedButton = () => {
  return (
    <Template
      title="Rounded Button"
      source="form"
      html={`<button class="rounded-button">Rounded button</button>`}
      css={`
        .rounded-button {
          border-radius: 100rem;
          padding: 1.5rem 2rem;
          color: white;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-color: #e14eca;
        }
      `}
    ></Template>
  );
};
const OutlineButton = () => {
  return (
    <Template
      title="Outline Button"
      source="form"
      html={`<button class="outline-button">Outline button</button>`}
      css={`
        .outline-button {
          display: block;
          margin: 0 auto;
          font-weight: normal;
          border-radius: 100rem;
          padding: 1rem;
          color: white;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
          font-family: "Montserrat", sans-serif;
          background-color: transparent;
          color: var(--primary);
          border: 1px solid currentColor;
        }
      `}
    ></Template>
  );
};

const FloatingButton = () => {
  return (
    <Template
      title="Floating Button"
      source="form"
      html={`<button class="floating-button"><i class="fa fa-bolt"></i></button>`}
      css={`
        .floating-button {
          margin-left: auto;
          margin-right: auto;
          font-size: 3rem;
          color: white;
          width: 6rem;
          height: 6rem;
          border-radius: 100rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(40deg, #ff6ec4, #7873f5);
        }
      `}
    ></Template>
  );
};
const LoadingButton = () => {
  return (
    <Template
      title="Loading Button"
      source="form"
      html={`<button class="loading-button"><i class="fa fa-spinner fa-spin"></i></button>`}
      css={`
        .loading-button {
          margin-left: auto;
          margin-right: auto;
          font-size: 3rem;
          color: white;
          width: 100%;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}
    ></Template>
  );
};

export {
  ButtonWithIcon,
  GradientButton,
  FloatingButton,
  RoundedButton,
  OutlineButton,
  LoadingButton,
};
