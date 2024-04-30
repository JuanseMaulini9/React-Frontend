import { Highlight, themes } from "prism-react-renderer";

interface EditorProps {
  lenguage: string;
  children: string;
}

export const Editor = ({ lenguage, children }: EditorProps) => {
  return (
    <Highlight
      code={children}
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
