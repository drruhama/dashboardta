import { z } from "zod"

export const SignUpSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8, { message: "Password must be at least 8 characters long"}),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long"}),
    fullname: z.string().min(2).max(50),
    homebase: z.enum(["Cabang (AIRA)","Cabang (API)"]),
    office: z.enum(["Accounting","Admin RM"])
  }).refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"]
  })

  export const SignInSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8, { message: "Password must be at least 8 characters long"}),
    //confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long"}),
  })

  export const AttendSchema = z.object({
    employeID: z.string().min(1).max(50),
    jenisKehadiran: z.enum(["Dinas luar","Normal","Visit","Izin","Cuti","Sakit"]),
    tanggal: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    lokasi: z.string()
  })