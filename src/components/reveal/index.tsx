import React, { useRef } from 'react';
import { useEffect } from 'react';
import 'reveal.js/dist/reveal.css';


type RevealJSProps = {
  children: any;
  raw: string
};

export default function RevealJS({ children }: RevealJSProps) {
  const root = useRef(null);
  useEffect(() => {
    const Reveal = require('reveal.js/dist/reveal');
    const Markdown = require('reveal.js/plugin/markdown/markdown');
    const Zoom = require('reveal.js/plugin/zoom/zoom');
    const Search = require('reveal.js/plugin/search/search');
    const Highlight = require('reveal.js/plugin/highlight/highlight');
    const Notes = require('reveal.js/plugin/notes/notes');

    new Reveal(root.current, {
      plugins: [
        Zoom,
        Search,
        Highlight,
        Notes,
        Markdown
      ],
      embeddeb: true,
      keyboardCondition: 'focused',
    }).initialize();
  }, []);
  console.log(children)
  return (
    <div ref={root} className="reveal --embedded"
      style={{
        width: "100%",
        height: "50vh"
      }}
    >
      <div className='slides'>
        {children}
      </div>
    </div>
  );
}
