import React from "react";

const Quote = (props) => {
  let ranNum = Math.floor(Math.random() * 9 + 1);
  return (
    <div class="listed">
      <h3 class="black">____________________</h3>
      <h5>{props.mindful[ranNum]}</h5>
    </div>
  );
};

export default Quote;
