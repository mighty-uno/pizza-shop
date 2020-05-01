import React, { useEffect, useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { Layout, Menu, Button, Modal, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { CategoryForm, ItemForm, ChoiceForm } from "../../components";
const { Header, Content, Footer } = Layout;
const menus = [
  {
    name: "Categories",
    id: "categories",
    tableView: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
    ],
  },
  {
    name: "Items",
    id: "items",
    tableView: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
    ],
  },
  {
    name: "Choices",
    id: "choices",
    tableView: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
    ],
  },
];
const Admin = (props) => {
  const [menu, setMenu] = useState(menus[0]["id"]);
  const [openedForm, setOpenedForm] = useState(false);

  const getForm = (req) => {
    switch (req) {
      case "categories":
        return <CategoryForm></CategoryForm>;
      case "items":
        return <ItemForm></ItemForm>;
      case "choices":
        return <ChoiceForm></ChoiceForm>;
    }
  };

  const getColumns = (req) => {
    return menus.find((r) => r.id == req)["tableView"];
  };
  return (
    <Layout>
      {openedForm ? (
        <Modal
          onCancel={() => setOpenedForm(!openedForm)}
          title={`${menu} form`}
          visible={openedForm}
          footer={null}
        >
          {getForm(menu)}
        </Modal>
      ) : null}
      <Header style={{ padding: 0 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          onSelect={(v) => {
            setMenu(v.key);
          }}
          defaultSelectedKeys={menu}
        >
          {menus.map((menu) => (
            <Menu.Item key={menu.id}>{menu.name}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div style={{ padding: 24, textAlign: "center" }}>
          <Table columns={getColumns(menu)} dataSource={props[menu]}></Table>
        </div>
        <Button
          className="floatingBtn"
          type="primary"
          shape="circle"
          size={"large"}
          onClick={() => {
            setOpenedForm(!openedForm);
          }}
          icon={<DownloadOutlined />}
        />
      </Content>
      <Footer style={{ textAlign: "center" }}>Pizza Shop @2020</Footer>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  items: state.items,
  choices: state.choices,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Admin);
