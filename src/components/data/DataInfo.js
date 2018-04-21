import React from "react";

const DataInfo = props => {
  const entries = JSON.parse(props.entries);
  const first = entries[0].Date;
  const last = entries[entries.length-1].Date;
  const fastTotalHours = entries.reduce(
      (total, currentValue) => total + Number.parseInt(currentValue.Hours, 10), 0
  );

  return (
    <div>
      <p>First: {first}</p>
      <p>Last:{last}</p>
      <p>Total: {entries.length}</p>
      <p>Total Hours: {fastTotalHours}</p>
      <p>Average Hours: {fastTotalHours/entries.length}</p>
    </div>
  );
};

export default DataInfo;
