import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
export const AddChoice = (props) => {
  const onFinish = (values) => {};
  return (
    <div>
      <Form onFinish>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "enter category name",
            },
          ]}
        >
          <Input placeholder="enter category name"></Input>
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
              message: "enter choices price",
            },
          ]}
        >
          <Input placeholder="enter choices price"></Input>
        </Form.Item>
        <Form.Item>
          <Button block type="primery">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(null, null)(AddChoice);
