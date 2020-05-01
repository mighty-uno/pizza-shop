import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Layout, Menu } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  fetchCategories,
  fetchItems,
  fetchChoices,
  deleteCategory,
  deleteChoice,
  deleteItem,
} from "../../state/actions";
const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const Home = (props) => {
  const {
    fetchCategories,
    fetchItems,
    fetchChoices,
    deleteCategory,
    deleteChoice,
    deleteItem,
  } = props;

  const [category, setCategory] = useState("");

  const loadSettings = async (req) => {
    await Promise.all([fetchCategories(), fetchItems(), fetchChoices()]);
  };

  // const updateCategoryValue = (req) => {
  //   if (props.categories.length) {
  //     setCategory(props.categories[0]["_id"]);
  //   }
  // };

  useEffect(() => {
    loadSettings();
  }, []);

  // useEffect(() => {
  //   updateCategoryValue();
  // }, [props.categories]);

  return (
    <Layout>
      <Layout className="site-layout">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu
            theme="dark"
            onSelect={(v) => setCategory(v.key)}
            mode="horizontal"
            defaultSelectedKeys={category}
          >
            {props.categories.map((category) => (
              <Menu.Item key={category._id}>{category.name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div className="site-layout-background" style={{ marginTop: 64 }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
              {props.items
                .filter((item) => item.category._id == category)
                .map((item) => (
                  <Col
                    sm={10}
                    md={8}
                    xs={12}
                    lg={4}
                    style={{ marginBottom: "8px" }}
                  >
                    <Card
                      hoverable
                      cover={<img alt="item pic" src={item.image} />}
                      actions={[
                        <MinusCircleOutlined></MinusCircleOutlined>,
                        <PlusCircleOutlined />,
                      ]}
                    >
                      <Meta title={item.name} description={item.description} />
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Pizza Shop @2020</Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  items: state.items,
  choices: state.choices,
});

const mapDispatchToProps = {
  fetchCategories,
  fetchItems,
  fetchChoices,
  deleteCategory,
  deleteChoice,
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
