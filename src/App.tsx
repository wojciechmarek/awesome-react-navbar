import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blogs } from "./assets/components/Blogs";
import { Contact } from "./assets/components/Contact";
import { External1 } from "./assets/components/External1";
import { External2 } from "./assets/components/External2";
import { Home } from "./assets/components/Home";
import { Layout } from "./assets/components/Layout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="external1" element={<External1 />} />
            <Route path="external2" element={<External2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
