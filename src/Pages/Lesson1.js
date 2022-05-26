import Table from "../Component/Table";
import { headerData, bodyData } from "../Common/util";
import { useState, useEffect } from "react";

const Lesson1 = () => {
  const columns = headerData;
  const [data, setData] = useState(bodyData);
  const [originalData] = useState(data);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  const resetData = () => setData(originalData);

  return (
    <>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </>
  );
};

export default Lesson1;
