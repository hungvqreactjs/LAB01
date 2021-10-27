import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Departments =({props}) => {
  const departments =  props.map((department) => {
    return (
      <div className="col-lg-4 col-sm-6 col-12" key={department.id}>
        <Card onClick={department.id}>
          <CardTitle>{department.name}</CardTitle>
          <CardText>Số nhân viên: {department.numberOfStaff}</CardText>
        </Card>
      </div>
    );
  });
  return(
         <div className="container">
         <div className="row">
           <Breadcrumb>
             <BreadcrumbItem>
               <Link to="/home">Home</Link>
             </BreadcrumbItem>
             <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
           </Breadcrumb>
           <hr />
         </div>
         <div className="row">{departments}</div>
       </div>
  )
}


export default Departments;
