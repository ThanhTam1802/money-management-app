import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <p>THIS IS EDIT PAGE {props.match.params.id}</p>
    </div>
  );
};
export default EditExpensePage;