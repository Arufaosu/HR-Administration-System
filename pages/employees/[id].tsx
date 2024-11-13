import { useForm } from "react-hook-form";
import { trpc } from "../../utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string().min(10),
  email: z.string().email(),
  status: z.string(),
});

const EmployeeForm = ({ employeeId }) => {
  const { data: employee } = trpc.useQuery(["employee.get", { id: employeeId }]);

  const { mutate: createEmployee } = trpc.useMutation("employee.create");
  const { mutate: updateEmployee } = trpc.useMutation("employee.update");

  const { handleSubmit, control, setValue } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    if (employeeId) {
      await updateEmployee({ ...data, id: employeeId });
    } else {
      await createEmployee(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...control.register("firstName")} placeholder="First Name" />
      <input {...control.register("lastName")} placeholder="Last Name" />
      <input {...control.register("phoneNumber")} placeholder="Phone Number" />
      <input {...control.register("email")} placeholder="Email" />
      <input {...control.register("status")} placeholder="Status" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;

