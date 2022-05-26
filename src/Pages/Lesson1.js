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
    {
        Header: "Status",
        accessor: "status",
      },
  ];

  const data = [
    {
      name: "Name 1",
      age: "Age 1",
    status: 'Status 1'
    },
    {
      name: "Name 2",
      age: "Age 2",
    status: 'Status 2'
    },
    {
      name: "Name 3",
      age: "Age 3",
    status: 'Status 3'
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default Lesson1;
