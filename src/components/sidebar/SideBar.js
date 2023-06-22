import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faList,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>US-SHAPE Dashboard</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        {/* <p>Dummy Heading</p> */}
        {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
        {/* <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem> */}
        {/* <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem> */}
        {/* <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink tag={Link} to={"/blogs"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Blogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/bloglist"}>
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Blog Lists
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/blogSeachReasult"}>
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Blog Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/news"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            News
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/newslist"}>
            <FontAwesomeIcon icon={faList} className="mr-2" />
            News Lists
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/appointments"}>
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Appointments
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);
export default SideBar;
