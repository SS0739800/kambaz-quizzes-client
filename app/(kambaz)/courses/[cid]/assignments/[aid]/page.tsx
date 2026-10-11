import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const assignmentsList = `/courses/${cid}/assignments`;
  const input = "w-full rounded border border-neutral-300 px-3 py-2";

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block font-medium">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${input} mb-4`} />

      <textarea
        id="wd-description"
        rows={6}
        className={`${input} mb-4`}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      />

      <div className="grid grid-cols-1 items-start gap-x-4 gap-y-4 md:grid-cols-[160px_1fr]">
        <label htmlFor="wd-points" className="pt-2 md:text-right">
          Points
        </label>
        <input id="wd-points" type="number" defaultValue={100} className={input} />

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
            defaultValue="2024-05-13"
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
                defaultValue="2024-05-06"
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
                defaultValue="2024-05-20"
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
        <Link
          href={assignmentsList}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={assignmentsList}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-1.5 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
