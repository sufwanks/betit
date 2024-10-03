import React from "react";

const TestData = ({ data }) => {
  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default TestData;
