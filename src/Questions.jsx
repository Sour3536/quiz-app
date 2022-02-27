import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setAnswer, changeNumber, setColour, getNum } from "./actions/index";
import { Radio, Space, Input } from "antd";
import { questions } from "./questData";

const Questions = () => {
  const myState = useSelector((state) => state.changeTheQuestion);
  const nextQues = useSelector((state) => state.setAns);
  const dispatch = useDispatch();
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
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const handleOk1 = () => {
    setIsModalVisible1(false);
  };
  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  const QuesType = () => {
    if (questions[myState].type === "obj") {
      return (
        <Radio.Group onChange={changeHandler}>
          <Space direction="vertical">
            {questions[myState].answerOptions.map((answerOption, index) => (
              <Radio key={index} value={answerOption.answerText}>
                {answerOption.answerText}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      );
    } else {
      return (
        <Input.TextArea
          className="subjective"
          onChange={changeHandler}
          id="subjective"
          rows="5"
        />
      );
    }
  };

  let answers = [null, null, null, null];

  const changeHandler = (e) => {
    answers[myState] = e.target.value;
  };
  return (
    <>
      <div
        className="quest-div"
        style={{
          paddingTop: "10px",
          width: "80%",
          height: "fit-content",
          alignContent: "center",
          color: "#0f1921",
          backgroundColor: "white",
          zIndex: "100",
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.4)",
        }}
      >
        <h2
          style={{
            marginLeft: "25px",
            width: "90%",
            borderLeft: "2px solid #1c2e4a",
            paddingLeft: "10px",
            lineHeight: "40px",
            boxShadow: "inset 6px 1px 6px -6px #1c2e4a",
          }}
        >
          Questions
        </h2>
      </div>
      <div
        className="numq"
        style={{
          marginTop: "10px",
          padding: "5px",
          width: "80%",
          height: "fit-content",
          paddingBottom: "30px",
          paddingLeft: "25px",
          color: "#0f1921",
          backgroundColor: "white",
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="question-section">
          <div className="question-count">
            <span>Question {myState + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[myState].questionText}</div>
        </div>
        <QuesType />
      </div>
      <div>
        <Button
          type="primary"
          className="save-btn"
          onClick={() => {
            if (questions[myState].type === "obj") {
              if (
                document.querySelector('input[type="radio"]:checked') === null
              ) {
                showModal1();
              } else {
                dispatch(setAnswer(answers[myState], myState));
                dispatch(setColour(myState));
                dispatch(getNum());
                for (let i = myState + 1; i < questions.length; i++) {
                  if (nextQues[i] === null) {
                    dispatch(changeNumber(i));
                    break;
                  }
                }
              }
            } else {
              if (document.querySelector("textarea").value === "") {
                showModal();
              } else {
                dispatch(setAnswer(answers[myState], myState));
                dispatch(setColour(myState));
                dispatch(getNum());
                for (let i = myState + 1; i < questions.length; i++) {
                  if (nextQues[i] === null) {
                    dispatch(changeNumber(i));
                    break;
                  }
                }
              }
            }
          }}
        >
          Save and Next
        </Button>
        <Modal
          title="Save Error !"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="Confirm" type="primary" onClick={handleOk}>
              OK
            </Button>,
          ]}
        >
          <p>Please enter your answer...</p>
        </Modal>
        <Modal
          title="Save Error !"
          visible={isModalVisible1}
          onOk={handleOk1}
          onCancel={handleCancel1}
          footer={[
            <Button key="Confirm" type="primary" onClick={handleOk1}>
              OK
            </Button>,
          ]}
        >
          <p>Please choose your option...</p>
        </Modal>
      </div>
    </>
  );
};

export default Questions;
