import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Drawer, Form, Input, Button, Space } from "antd";

const AddDrawer = ({ show, handleOnClose, onFinish, onFinishFailed }) => {
  const initialValues = { firstName: "", lastName: "", phoneNumber: null };
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Drawer
      data-testid="add-contact-drawer"
      title="Add content"
      width={400}
      visible={show}
      onClose={handleOnClose}
      maskClosable={true}
    >
      <Form
        form={form}
        name="basic"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <Fragment>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length
                  }
                >
                  Add
                </Button>
                <Button htmlType="button" onClick={() => form.resetFields()}>
                  Reset
                </Button>
              </Space>
            </Fragment>
          )}
        </Form.Item>
      </Form>
    </Drawer>
  );
};

AddDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
};

export default AddDrawer;
