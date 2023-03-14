import { ActionId, ActionImpl } from "kbar";
import React from "react";

export const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`py-3 px-4 flex items-center justify-between cursor-pointer border-l-2 border-solid ${
          active
            ? "bg-slate-200 dark:bg-slate-800 border-slate-800 dark:border-slate-200"
            : "bg-gray-50 dark:bg-gray-900 border-gray-50 dark:border-gray-900"
        }`}
      >
        <div className="flex gap-2 items-center text-base">
          {action.icon}
          <div className="flex flex-col">
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span className="opacity-50 mr-2 text-gray-700 dark:text-gray-200">
                      {ancestor.name}
                    </span>
                    <span className="mr-2">&rsaquo;</span>
                  </React.Fragment>
                ))}
              <span className="text-gray-700 dark:text-gray-200 font-semibold">
                {action.name}
              </span>
            </div>
            {action.subtitle && (
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {action.subtitle}
              </span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden className="grid grid-flow-col gap-4">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className={`py-1 px-1.5 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-sm ${
                  active
                    ? "bg-gray-100 dark:bg-gray-900"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);
