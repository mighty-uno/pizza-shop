import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select } from "antd";
import { addItem } from "../../../state/actions";
export const AddItem = (props) => {
  const { addItem } = props;
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);

    await addItem(values);

    setIsLoading(false);
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item
          name="category"
          rules={[
            {
              required: true,
              message: "select categorty",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="select category"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {props.categories.map((category) => (
              <Select.Option value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="choices"
          rules={[
            {
              required: true,
              message: "select choices",
            },
          ]}
        >
          <Select
            showSearch
            mode="multiple"
            placeholder="select choices"
            filterOption={(input, option) => {
              debugger;
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            }}
          >
            {props.choices.map((category) => (
              <Select.Option value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
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
        <Form.Item name="image">
          <Input placeholder="image path"></Input>
        </Form.Item>
        <Form.Item>
          <Button
            loading={isLoading}
            disabled={isLoading}
            htmlType="submit"
            block
            type="primary"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  choices: state.choices,
});

const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
