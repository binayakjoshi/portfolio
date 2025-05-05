import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";
import { ReactNode } from "react";

type SideDrawerProps = {
  show: boolean;
  onClick: () => void;
  children: ReactNode;
};
const SideDrawer = ({ show, onClick, children }: SideDrawerProps) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")!
  );
};
export default SideDrawer;
