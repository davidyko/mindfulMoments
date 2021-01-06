import React from "react";

const TopThree = (props) => (
  <div>
    <h4 class="blocked">Top Three Gratitudes</h4>
    <ol class="listed">
      {props.grats.map((el) => (
        <li>{el}</li>
      ))}
    </ol>
  </div>
);

export default TopThree;
