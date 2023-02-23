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
        <KBarPositioner className="backdrop-blur-sm">
          <KBarAnimator className="max-w-[600px] w-full rounded overflow-hidden bg-slate-900">
            <KBarSearch className="py-3 px-4 text-base w-full box-border outline-none border-none bg-slate-900 text-grey-100" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};
