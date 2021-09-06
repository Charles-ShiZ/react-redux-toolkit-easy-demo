import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import roleManagement from "./pages/shein/authorityManagement/roleManagement";
import sideMenuManagement from "./pages/shein/authorityManagement/sideMenuManagement";
import featuresManagement from "./pages/shein/authorityManagement/featuresManagement";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Shein</Menu.Item>
              <Menu.Item key="2">Codemao</Menu.Item>
              <Menu.Item key="3">Silkroad</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["roleManagement"]}
                defaultOpenKeys={["authorityManagement"]}
                style={{ height: "100%", borderRight: 0 }}
                onClick={(menuItem) => {
                  // console.log(menuItem);
                }}
              >
                <SubMenu key="authorityManagement" icon={""} title="权限管理">
                  <Menu.Item key="roleManagement">
                    <Link to="/roleManagement">角色管理</Link>
                  </Menu.Item>
                  <Menu.Item key="sideMenuManagement">
                    <Link to="/sideMenuManagement">菜单管理</Link>
                  </Menu.Item>
                  <Menu.Item key="featuresManagement">
                    <Link to="/featuresManagement">功能管理</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Route path="/">
                  <Redirect to={"/roleManagement"} />
                </Route>
                <Route path="/roleManagement" component={roleManagement} />
                <Route
                  path="/sideMenuManagement"
                  component={sideMenuManagement}
                />
                <Route
                  path="/featuresManagement"
                  component={featuresManagement}
                />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}
