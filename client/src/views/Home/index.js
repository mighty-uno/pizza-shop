import React from "react";
import { connect } from "react-redux";
import { Row, Col, Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const Home = (props) => {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
          <Menu.Item key="5">nav 5</Menu.Item>
          <Menu.Item key="6">nav 6</Menu.Item>
          <Menu.Item key="7">nav 7</Menu.Item>
          <Menu.Item key="8">nav 8</Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          ></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Pizza Shop @2020</Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(null, null)(Home);
