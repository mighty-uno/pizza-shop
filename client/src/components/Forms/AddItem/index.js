import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
export const AddItem = (props) => {
  const onFinish = (values) => {};
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "enter item name",
            },
          ]}
        >
          <Input placeholder="enter item name"></Input>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder="enter description"></Input>
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: "enter item price",
            },
          ]}
        >
          <Input placeholder="enter item price"></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block type="primery">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(null, null)(AddItem);
