import { useQuery } from "react-query";
import { trpc } from "../../utils/trpc";

const EmployeeList = () => {
  const { data: employees, isLoading } = trpc.useQuery(["employee.getAll"]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl">Employees List</h1>
      <ul>
        {employees?.map((employee) => (
          <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

