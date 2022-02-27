import React, { useState } from "react";
import Change from "./Change";
import { Button, Modal } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./index1.css";
import { useSelector } from "react-redux";

const Right = () => {
  const nextQues = useSelector((state) => state.setNum);
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
  console.log(nextQues);
  return (
    <>
      <div className="numoq">
        <h2 style={{ color: "white" }}>Name of sections</h2>
        <p
          style={{
            marginTop: "-10px",
            color: "white",
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          {nextQues} out of 30 questions answered
        </p>
      </div>
      <Button className="inst" onClick={showModal}>
        <UnorderedListOutlined style={{ fontWeight: "bold !important" }} />
        Instructions
      </Button>
      <Modal
        title="Instructions"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="Confirm" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p>Congratulations ! your test has been submitted</p>
      </Modal>
      <div className="right1">
        <span className="span1" style={{ float: "left", marginLeft: "20px" }}>
          <span className="dot1"></span> Answered
        </span>
        <span className="span2" style={{ float: "right", marginRight: "22px" }}>
          <span className="dot2"></span> Unanswered
        </span>
      </div>
      <div className="right-div">
        <Change />
      </div>
    </>
  );
};

export default Right;
