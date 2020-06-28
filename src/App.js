import React, { Fragment, useState } from "react";
import "./App.less";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setErrorInfo] = useState({});

  const handleOnFinish = (values) => {
    setValues(values);
  };
  const handleAddFormOnFinishFail = (error) => {
    setErrorInfo(error);
  };

  console.log(values);
  console.log(errorInfo);

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
