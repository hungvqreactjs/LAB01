import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Col,
  Button,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => /^[0-9]+$/i.test(val);
const validName = (val) => /^[a-zA-Z]+$/i.test(val);

const AddStaff = ({ onAdd }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const onSubmit = (values) => {
    //values.preventDefault();
    onAdd(values);
    console.log("add ", onAdd);
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle} className="add-staff">
        <i class="fa fa-user-plus fa-sm"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <LocalForm onSubmit={(values) => onSubmit(values)}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <div className="row modal-add">
              <div className="col-12 col-md-9">
                <FormGroup row>
                  <Label htmlFor="firstname" md={4}>
                    Họ và tên
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                      placeholder="VD: Nguyễn Văn A"
                      className="form-control"
                      validators={{
                        required,
                        validName,
                        minLength: minLength(4),
                        maxLength: maxLength(20),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        minLength: "Tên phải trên 4 ký tự",
                        maxLength: "Tên phải dưới 20 ký tự",
                        validName: "Tên không hợp lệ ",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={4}>
                    Ngày sinh
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".doB"
                      type="date"
                      id="doB"
                      name="doB"
                      placeholder="ngày sinh"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".doB"
                      show="touched"
                      messages={{
                        required: "Hãy nhập năm sinh",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={4}>
                    Ngày vào công ty
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".startDate"
                      type="date"
                      id="startDate"
                      name="startDate"
                      placeholder="Ngày vào công ty"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".startDate"
                      show="touched"
                      messages={{
                        required: "Hãy nhập ngày vào công tý",
                      }}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="department" md={4}>
                    Phòng ban
                  </Label>
                  <Col md={8}>
                    <Control.select
                      model=".department"
                      name="department"
                      className="form-control"
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                      Finance
                    </Control.select>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="salaryScale" md={4}>
                    Hệ số lương
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".salaryScale"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="0"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                        minLength: minLength(1),
                        maxLength: maxLength(3),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".salaryScale"
                      show="touched"
                      messages={{
                        isNumber: "Hệ số lương không hợp lệ ",
                        minLength: "Hệ số lương phải trên 1 ",
                        maxLength: "Hệ số lương phải dưới 3",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={4}>
                    Sô ngày làm thêm
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".overTime"
                      id="overTime"
                      name="overTime"
                      placeholder="0"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                        minLength: minLength(1),
                        maxLength: maxLength(3),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".overTime"
                      show="touched"
                      messages={{
                        isNumber: "Số ngày tăng ca không hợp lệ ",
                        maxLength: "Số ngày tăng ca phải dưới 30",
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={4}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".annualLeave"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="0"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                        minLength: minLength(1),
                        maxLength: maxLength(3),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".annualLeave"
                      show="touched"
                      messages={{
                        isNumber: "Số ngày nghỉ không hợp lệ",
                        maxLength: " Số ngày nghỉ phải dưới 30",
                      }}
                    />
                  </Col>
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Thêm
            </Button>{" "}
            <Button onClick={toggle}>Hủy</Button>
          </ModalFooter>
        </LocalForm>
      </Modal>
    </div>
  );
};

export default AddStaff;
