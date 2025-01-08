import React from "react";
import PropTypes from "prop-types";

const AppLayout = ({ children, backgroundImage }) => {
  return (
    <div
      className="h-[80%] w-[100%] bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container mx-auto py-3 px-5">{children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string.isRequired
};

export default AppLayout;