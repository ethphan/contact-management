import React, { Fragment, useState } from "react";
import "./App.less";
import { Button, Layout, Table } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

  const handleOnFinish = (data) => {
    setValues([...values, data]);
    setShowDrawer(false);
  };
  const handleAddFormOnFinishFail = (error) => {
    setErrorInfo(error);
  };
  console.log(values)

  const columns = [
    {
      title: 'Frist Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
  ];
  

  return (
    <Fragment>
      <Button
        type="primary"
        icon={<PlusCircleFilled />}
        data-testid="add-contact-button"
        onClick={() => setShowDrawer(true)}
      >
        Add
      </Button>
      <Layout.Content>
        <Table dataSource={values} columns={columns}></Table>
      </Layout.Content>
      <AddDrawer
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
        onFinish={handleOnFinish}
        onFinishFailed={handleAddFormOnFinishFail}
      />
    </Fragment>
  );
}

export default App;
