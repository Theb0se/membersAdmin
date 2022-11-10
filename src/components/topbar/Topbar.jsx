import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

function Topbar(props) {
  const ref = useRef(null);
  useEffect(() => {
    if (props.barLoading) {
      ref.current.continuousStart();
    } else {
      ref.current.complete();
    }
  }, [props.barLoading]);

  return (
    <>
      <LoadingBar ref={ref} color="#ff8355" height={3} />
    </>
  );
}

export default Topbar;
