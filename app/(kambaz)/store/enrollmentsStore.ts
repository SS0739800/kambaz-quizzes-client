"use client";
import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = { _id: string; user: string; course: string };

type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (userId: string, courseId: string) => void;
  unenroll: (userId: string, courseId: string) => void;
  isEnrolled: (userId: string, courseId: string) => boolean;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set, get) => ({
  enrollments: enrollmentsJson,
  enroll: (userId, courseId) =>
    set((state) => ({
      enrollments: [
        ...state.enrollments,
        { _id: crypto.randomUUID(), user: userId, course: courseId },
      ],
    })),
  unenroll: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
  isEnrolled: (userId, courseId) =>
    get().enrollments.some((e) => e.user === userId && e.course === courseId),
}));
