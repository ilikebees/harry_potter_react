import React, { Fragment } from 'react';

const StudentDetail = (props) => {
  if (!props.student) return null;
  return (
    <Fragment>
      <img className="image-flag" src={props.student.image} />
    </Fragment>
  );
}
export default StudentDetail;
