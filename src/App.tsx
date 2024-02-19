import { Navigation } from "./navigation";
import { inject } from '@vercel/analytics';

export const App = () => {
  inject();
  return <Navigation />;
};
