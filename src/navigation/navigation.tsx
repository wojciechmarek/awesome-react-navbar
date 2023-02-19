import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "../components/layout";
import {
  Changelog,
  Contact,
  External1,
  External2,
  NotFound,
  Home,
} from "../components/views";

export const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="external1" element={<External1 />} />
        <Route path="external2" element={<External2 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
