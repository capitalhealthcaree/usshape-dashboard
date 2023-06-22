import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Blog from "../Blog";
import News from "../News";
import NewsList from "../NewsList";
import ContactForm from "../ContactForm";
import BlogList from "../BlogList";
import EditBlog from "../BlogList/blogEdit";
import EditNews from "../NewsList/editNews";
import BlogSeachReasult from "../BlogSearch";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => "USSHAPE Dashboard"} />
      <Route exact path="/blogs" component={() => <Blog />} />
      <Route exact path="/news" component={() => <News />} />
      <Route exact path="/newslist" component={() => <NewsList />} />
      <Route exact path="/bloglist" component={() => <BlogList />} />
      <Route exact path="/blogedit" component={() => <EditBlog />} />
      <Route
        exact
        path="/blogSeachReasult"
        component={() => <BlogSeachReasult />}
      />
      <Route exact path="/newsedit" component={() => <EditNews />} />
      <Route exact path="/contact-form" component={() => <ContactForm />} />
    </Switch>
  </Container>
);

export default Content;
