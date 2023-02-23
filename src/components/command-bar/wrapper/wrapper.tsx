import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar";
import { initialActions } from "../actions";

import { RenderResults } from "../results";
import { KBarWrapperProps } from "./wrapper.interface";

export const KBarWrapper = (props: KBarWrapperProps) => {
  const { children } = props;
  return (
    <KBarProvider actions={initialActions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="max-w-[600px] w-full rounded overflow-hidden">
            <KBarSearch className="py-3 px-4 text-base w-full box-border outline-none border-none bg-slate-100 text-gray-800" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};
