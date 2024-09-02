//import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { pgTable, text, timestamp, date, time } from "drizzle-orm/pg-core";

//import db from ".";
export const userTable = pgTable("user", {
    id: text("id").primaryKey(),
    username: text("username").notNull().unique(),
    hashedPassword: text("hashed_password").notNull(),
    fullName: text("full_name").notNull(),
    homebase: text("homebase"),
    office: text("office"),
    keterangan: text("keterangan")
});

export const sessionTable = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});

export const attendanceTable = pgTable("attendance", {
    id: text("id").primaryKey(),
    employeId: text("employed_id")
        .notNull()
        .references(() => userTable.id),
    jenisKehadiran: text("jenis_hadir"),
    tanggal: text("tanggal").notNull(),
    startTime: text("start_time"),
    endTime: text("end_time"),
    lokasi: text("lokasi")
});