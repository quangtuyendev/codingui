import React from "react";
import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,user-scalable=no, initial-scale=1.0"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="./reset.css" />
      <link rel="stylesheet" href="./util.css" />
      <title>CodingUI - Just a simple place to share a lot of free UIs</title>
      <meta
        key="description"
        name="description"
        content="CodingUI - Just a simple place to share a lot of free UIs, where you can find and get a lot of ui that you want to use in your project"
      />
      <meta
        key="keywords"
        name="keywords"
        content="html,css,frontend,ui,codingui,evondev,"
      />
      <meta key="author" name="author" content="evondev" />
      <meta key="url" name="url" content="https://codingui.dev" />
      <meta
        key="og-title"
        property="og:title"
        content="CodingUI - Just a simple place to share a lot of free UIs"
      />
      <meta key="url" property="og:url" content="https://codingui.dev" />
      <meta
        key="og-description"
        property="og:description"
        content="CodingUI - Just a simple place to share a lot of free UIs, where you can find and get a lot of ui that you want to use in your project"
      />
      <meta key="og-image" property="og:image" content="/images/og-image.jpg" />
      <link rel="shortcut icon" href={`/images/logo.png`} />
    </Head>
  );
};

export default Meta;
