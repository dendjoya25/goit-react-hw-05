import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import css from "./GoBackBtn.module.css";

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state.from ?? "/movies");

  return (
    <Link to={backLinkRef.current} className={css.backBtn}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};

export default GoBackBtn;
