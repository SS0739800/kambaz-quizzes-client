import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";

export default function Module({
  module,
  children,
}: {
  module: CourseModule;
  children?: ReactNode;
}) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
            defaultValue={module.name}
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateModule({ ...module, editing: false });
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
