"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { emptyUser, type User } from "../../../../account/AccountContext";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [users, setUsers] = useState<User[]>(db.users);
  const [newUser, setNewUser] = useState<User>(emptyUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );
  const addPerson = () => {
    if (!newUser.firstName || !newUser.lastName) return;
    const user = { ...newUser, _id: crypto.randomUUID() };
    setUsers([...users, user]);
    enroll(user._id, courseId);
    setNewUser(emptyUser);
  };
  const input = "rounded border border-neutral-300 px-2 py-1 text-sm";
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div id="wd-add-person" className="mb-3 flex flex-wrap items-center gap-2">
        <input
          className={input}
          placeholder="First name"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          id="wd-new-person-first-name"
        />
        <input
          className={input}
          placeholder="Last name"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          id="wd-new-person-last-name"
        />
        <select
          className={input}
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          id="wd-new-person-role"
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          type="button"
          className="rounded bg-red-600 px-3 py-1 text-sm font-medium text-white"
          id="wd-add-person-click"
          onClick={addPerson}
        >
          + People
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
