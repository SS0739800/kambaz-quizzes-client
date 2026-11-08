"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === assignmentId),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const isNew = assignmentId === "new";
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: courseId },
  );
  const assignmentsList = `/courses/${courseId}/assignments`;
  const input = "w-full rounded border border-neutral-300 px-3 py-2";
  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    router.push(assignmentsList);
  };

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className={`${input} mb-2`}
      />
      <p className="mb-4 text-sm text-neutral-600">Assignment id: {aid}</p>

      <textarea
        id="wd-description"
        rows={6}
        className={`${input} mb-4`}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />

      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-4 md:grid-cols-[160px_1fr]">
        <label htmlFor="wd-points" className="pt-2 md:text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
          className={input}
        />

        <label htmlFor="wd-group" className="pt-2 md:text-right">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="pt-2 md:text-right">
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>

        <label htmlFor="wd-submission-type" className="pt-2 md:text-right">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-4`}>
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>

        <div className="pt-2 md:text-right">Assign</div>
        <div className="rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-4`} />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            id="wd-due-date"
            type="date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className={`${input} mb-4`}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className={input}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input
                id="wd-available-until"
                type="date"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className={input}
              />
            </div>
          </div>
        </div>

        <label htmlFor="wd-ai-editor-notes" className="pt-2 md:text-right">
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={input} />
      </div>

      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-neutral-900"
          onClick={() => router.push(assignmentsList)}
        >
          Cancel
        </button>
        <button
          type="button"
          id="wd-save"
          className="rounded bg-red-600 px-3 py-1.5 text-white"
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  );
}
