import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const Changelog = () => {
  const [content, setContent] = useState("");

  fetch(
    "https://raw.githubusercontent.com/wojciechmarek/AwesomeReactNavbar/master/CHANGELOG.md"
  )
    .then((res) => res.text())
    .then((text) => setContent(text));

  return (
    <main className="bg-white dark:bg-slate-800 h-[calc(100vh-4.5em)] flex justify-center items-center">
      <div className="w-5/6 md:w-3/6">
        <ReactMarkdown className="prose prose-headings:text-neutral-300 prose-li:text-neutral-400">
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
};
