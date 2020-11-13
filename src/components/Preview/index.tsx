import * as React from "react";
import marked from "marked";
//____________________________________________
//
const Component: React.FC<{ content: string }> = ({ content }) => {
  const [html, setHtml] = React.useState(marked(content));

  React.useEffect(() => {
    setHtml(marked(content));
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};
//____________________________________________
//
export default Component;
