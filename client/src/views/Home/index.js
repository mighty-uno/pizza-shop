import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Layout, Menu, Badge } from "antd";
import Icon from "@ant-design/icons";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  fetchCategories,
  fetchItems,
  fetchChoices,
  deleteCategory,
  deleteChoice,
  deleteItem,
  updateToCart,
  addToCart,
} from "../../state/actions";
import "./index.scss";
const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const Home = (props) => {
  const {
    cart,
    fetchCategories,
    fetchItems,
    fetchChoices,
    updateToCart,
    addToCart,
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
                        <MinusCircleOutlined
                          onClick={() => {
                            updateToCart(item);
                          }}
                        ></MinusCircleOutlined>,
                        <PlusCircleOutlined
                          onClick={() => {
                            addToCart(item);
                          }}
                        />,
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
      <div className="cartConter">
        {console.log(cart)}
        <Badge count={cart.length}>
          <Icon component={ShoppingCartOutlined} className="badgeHead"></Icon>
        </Badge>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  cart: state.cart,
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
  updateToCart,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
