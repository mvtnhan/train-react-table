import Table from "../Component/Table";
import { headerData, bodyData } from "../Common/util";

const Lesson1 = () => {
  const columns = headerData;

  const data = bodyData;

  return <Table columns={columns} data={data} />;
};

export default Lesson1;
