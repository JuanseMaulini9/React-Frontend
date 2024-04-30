import { Highlight, themes } from "prism-react-renderer";

interface EditorProps {
  lenguage: string;
  solution: string;
}

export const Editor = ({ lenguage, solution }: EditorProps) => {
  return (
    <Highlight
      code={solution}
      language={lenguage}
      theme={themes.shadesOfPurple}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
