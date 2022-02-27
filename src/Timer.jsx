import React, { useState } from "react";
import CountDown from "ant-design-pro/lib/CountDown";
import "./index1.css";
import { Modal, Button } from "antd";

const Timer = () => {
  const targetTime = new Date().getTime() + 360000;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div
      className="timersection"
      style={{
        float: "right",
        color: "white",
        height: "100%",
        marginTop: "30px",
        marginRight: "15px",
      }}
    >
      Time left :{" "}
      <CountDown
        style={{ fontSize: 16 }}
        target={targetTime}
        onEnd={showModal}
      />{" "}
      |{" "}
      <Button type="primary" onClick={showModal}>
        Finish
      </Button>
      <Modal
        title="Test Completed"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="Confirm" type="primary" onClick={handleOk}>
            Confirm
          </Button>,
        ]}
      >
        <p>Congratulations ! your test has been submitted</p>
      </Modal>
    </div>
  );
};

export default Timer;
