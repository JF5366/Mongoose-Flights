import React from "react";

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="public/css/styles.css" />
      </head>
      <body>
        <nav>
          <a href="/flights/new">ADD FLIGHT</a>
          <br />
          <a href="/flights">ALL FLIGHTS</a>
          <br />
        </nav>
        <div>
          {/* <h1>DEFAULT LAYOUT</h1> */}
          <div>{props.children}</div>
        </div>
      </body>
    </html>
  );
}

export default DefaultLayout;