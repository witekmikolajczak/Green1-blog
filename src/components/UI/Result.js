import React from "react";

const Result = (props) => {
  console.log(props.data.main);

  return (
    <div>
      <main>
        {typeof props.data.main != "undefined" ? (
          <div>{props.data.main}</div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};
export default Result;
