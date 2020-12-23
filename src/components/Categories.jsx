import React from "react";

import "../assets/styles/components/Categories.scss";

const Categories = (props) => {
  const { children } = props;
  return (
    <div className="categories">
      <h3 className="categories__title">Mi lista</h3>
      {children}
    </div>
  );
};

export default Categories;