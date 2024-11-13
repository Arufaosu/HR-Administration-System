import { createRouter } from "../createRouter";
import { prisma } from "../db";
import { z } from "zod";

export const employeeRouter = createRouter()
  .query("getAll", {
    resolve: async ({ ctx }) => {
      if (ctx.session.user.role === "hradmin") {
        return prisma.employee.findMany();
      }
      if (ctx.session.user.role === "manager") {
        return prisma.employee.findMany({
          where: { managerId: ctx.session.user.id },
        });
      }
      return prisma.employee.findMany({
        where: { userId: ctx.session.user.id },
      });
    },
  })
  .mutation("create", {
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      phoneNumber: z.string(),
      email: z.string().email(),
      status: z.string(),
      managerId: z.number().optional(),
    }),
    resolve: async ({ input }) => {
      const newEmployee = await prisma.employee.create({
        data: {
          ...input,
          user: {
            create: {
              email: input.email,
              password: "Password123#",
              role: "employee",
            },
          },
        },
      });

      return newEmployee;
    },
  })
  .mutation("update", {
    input: z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
      phoneNumber: z.string(),
      status: z.string(),
    }),
    resolve: async ({ input }) => {
      const updatedEmployee = await prisma.employee.update({
        where: { id: input.id },
        data: input,
      });

      return updatedEmployee;
    },
  });

