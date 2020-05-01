import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { addCategory } from "../../../state/actions";
export const AddCategory = (props) => {
  const { addCategory } = props;
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    let result = await addCategory(values);
    setIsLoading(false);
    if (result) form.resetFields();
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish}>
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
        <Form.Item name="description">
          <Input placeholder="enter description"></Input>
        </Form.Item>

        <Form.Item name="image">
          <Input placeholder="enter image path"></Input>
        </Form.Item>
        <Form.Item>
          <Button
            loading={isLoading}
            disabled={isLoading}
            block
            htmlType="submit"
            type="primary"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {
  addCategory,
};

export default connect(null, mapDispatchToProps)(AddCategory);
