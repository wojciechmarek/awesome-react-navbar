import { KBarResults, useMatches } from "kbar";
import { ResultItem } from "./result-item";

export const RenderResults = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="py-2 px-4 text-xs uppercase opacity-50">{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId as string}
          />
        )
      }
    />
  );
};
