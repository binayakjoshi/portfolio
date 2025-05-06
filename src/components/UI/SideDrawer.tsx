import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { type ReactNode } from "react";

type SideDrawerProps = {
  show: boolean;
  onClick: () => void;
  children: ReactNode;
};

const SideDrawer = ({ show, onClick, children }: SideDrawerProps) => {
  return ReactDOM.createPortal(
    <aside className={`side-drawer ${show ? "visible" : ""}`} onClick={onClick}>
      {children}
    </aside>,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
