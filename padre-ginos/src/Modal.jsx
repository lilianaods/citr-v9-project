import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(function create() {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    function remove() {
      modalRoot.removeChild(elRef.current);
    }
    return remove;
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
