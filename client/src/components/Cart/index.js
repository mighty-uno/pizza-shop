import React, { useState, useEffect } from "react";
import {
  PageHeader,
  List,
  Avatar,
  Space,
  Modal,
  Tag,
  Button,
  Row,
  Col,
} from "antd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  ShoppingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./index.scss";
import AddChoice from "./AddChoice";
import { connect } from "react-redux";
import { addChoiceToCart, updateToCart, addToCart } from "../../state/actions";

function makeCalculation(items) {
  const tax = [
    {
      name: "SGST",
      formula: (v) => {
        return ((v * 2.5) / 100).toFixed(2) * 1;
      },
    },
    {
      name: "CGST",
      formula: (v) => {
        return ((v * 2.5) / 100).toFixed(2) * 1;
      },
    },
  ];

  let totalItemPrice = items.reduce((total, item) => {
    let choices = (item.addedChoices || []).reduce((t, v) => (t += v.price), 0);
    total = choices + item.price * item.qty;
    return total;
  }, 0);

  let totalPayment = [
    { name: "items", total: totalItemPrice },
    ...tax.map((t) => {
      return { name: t.name, total: t.formula(totalItemPrice) };
    }),
  ];

  totalPayment = [
    ...totalPayment,
    {
      name: "total",
      total: totalPayment.reduce((t, v) => (t += v.total), 0).toFixed(2) * 1,
    },
  ];

  return totalPayment;
}

export const Cart = (props) => {
  const { cart, addChoiceToCart, updateToCart, addToCart } = props;
  const [openedForm, setOpenedForm] = useState(false);
  const [bill, updateBill] = useState([]);

  const [currentChoices, setCurrentChoice] = useState({});

  const IconText = ({ icon, text, onClick }) => (
    <Space onClick={onClick}>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const makeBill = (req) => {
    let billInfo = makeCalculation(cart);
    updateBill(billInfo);
  };

  useEffect(() => {
    makeBill();
  }, [cart]);

  const selectedChoices = (req) => {
    setOpenedForm(!openedForm);
    addChoiceToCart({ item: currentChoices, selectedChoice: req });
  };

  return (
    <div className="cart">
      {openedForm ? (
        <Modal
          onCancel={() => setOpenedForm(!openedForm)}
          title={"Add Choices"}
          visible={openedForm}
          footer={null}
        >
          <AddChoice
            callback={selectedChoices}
            choices={currentChoices.choices}
          ></AddChoice>
        </Modal>
      ) : null}

      <PageHeader
        title="Cart"
        onBack={() => {
          props.history.goBack();
        }}
      ></PageHeader>
      <div className="cartItems">
        <List
          itemLayout="vertical"
          size="small"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item
              key={item.name}
              actions={[
                <IconText
                  onClick={() => {
                    updateToCart(item);
                  }}
                  icon={MinusCircleOutlined}
                  text=""
                />,
                <IconText icon={ShoppingOutlined} text={item.qty}></IconText>,

                <IconText
                  onClick={() => {
                    addToCart(item);
                  }}
                  icon={PlusCircleOutlined}
                  text=""
                />,
                <IconText
                  icon={MenuOutlined}
                  text=""
                  onClick={() => {
                    setCurrentChoice(item);
                    setOpenedForm(!openedForm);
                  }}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.name}
                description={item.description}
              />
              {console.log(item.choices)}
              {item.addedChoices
                ? item.addedChoices.map((ch) => <Tag>{ch.name}</Tag>)
                : "No Choice Added"}
            </List.Item>
          )}
        ></List>
      </div>
      <div className="cartFooter">
        {bill.map((r) => (
          <Row>
            <Col span={16}>{r.name}</Col>
            <Col align="right" span={8}>
              {r.total}
            </Col>
          </Row>
        ))}
      </div>
      <div>
        <Button block color="green" onClick={makeBill}>
          Checkout {bill.length ?? bill[bill.length - 1]["total"]}
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addChoiceToCart,
  updateToCart,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
