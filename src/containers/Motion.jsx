import React from "react";
import { delay, motion } from "framer-motion";
// import { useRouteMatch } from "react-router-dom";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Motion({ children }) {
  // const dir = useSelector((state) => state.dir);
  const isOpen = true;
  // const match = useRouteMatch();
  const location = useLocation();
  // const isOpen = location.pathname === match.url;
  const style = useSelector((state) => state.style);
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
