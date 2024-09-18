import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.loadingReducer.isLoading);

  return isLoading ? (
    <div className="fixedAllPage">
      <Spin size="large" />
    </div>
  ) : null;
};

export default Loading;
