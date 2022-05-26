import Table from '../Component/Table';

const Lesson1 = () => {
  const columns= [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
  ];

  const data = [
    {
      name: "Name 1",
      age: "Age 1",
    },
    {
      name: "Name 2",
      age: "Age 2",
    },
    {
      name: "Name 3",
      age: "Age 3",
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default Lesson1;
