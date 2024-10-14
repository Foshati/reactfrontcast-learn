import { useState } from "react";

export default function Modal() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return (
    <div>
      <button className="btn" onClick={handleShow}>{show ? "hide":"show"}</button>
      {show && <p>samfa</p>}
    </div>
  );
}
