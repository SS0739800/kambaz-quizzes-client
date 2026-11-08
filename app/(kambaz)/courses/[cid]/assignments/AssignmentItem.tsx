import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
  cid, aid, title, details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [confirming, setConfirming] = useState(false);
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <FaTrash
        className="mt-1 shrink-0 cursor-pointer text-red-600"
        title="Delete assignment"
        onClick={() => setConfirming(true)}
      />
      {confirming && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          id="wd-delete-assignment-dialog"
        >
          <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
            <p className="mb-4">
              Are you sure you want to remove <strong>{title}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                id="wd-delete-assignment-no"
                onClick={() => setConfirming(false)}
              >
                No
              </button>
              <button
                type="button"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                id="wd-delete-assignment-yes"
                onClick={() => {
                  deleteAssignment(aid);
                  setConfirming(false);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
