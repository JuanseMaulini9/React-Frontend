import { Fragment, useState } from "react";
import Editor from "react-simple-code-editor";
import { Highlight, Language, themes } from "prism-react-renderer";

const codeSnippet = `import axios from "axios";

  const getUser = () => {
    return axios.get('https://randomuser.me/api')
  }`;

const styles = {
  root: {
    boxSizing: "border-box",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...themes.nightOwl.plain,
  },
};
const languages: Language[] = [
  'tsx', 'typescript', 'javascript', 'jsx', 'python', 'go', 'json'
]  

const HighlightElement = (code: string) => (
  <Highlight theme={themes.nightOwl} code={code} language={languages[0]}>
    {({tokens, getLineProps, getTokenProps }) => (
      <Fragment>
        {tokens.map((line, i) => (
          <div key={i}  {...getLineProps({ line: line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Fragment>
    )}
  </Highlight>
);

export const NewEditor = () => {
  const [code, setCode] = useState(codeSnippet);
  const [languageSelected, setLanguageSelected] = useState(languages[0])

  const handleChange = (newCode: string) => {
    setCode(newCode);
  };

 const handleLanguageChange = (newValue) =>{
    setLanguageSelected(newValue)
 }

  return (
    <div>
      <select>
        {languages.map((language, i)=>(
          <option onChange={(value)=>handleLanguageChange(value)} value={language} key={i}>{language}</option>
        ))}
      </select>
      <Editor
      value={code}
      onValueChange={handleChange}
      highlight={HighlightElement}
      padding={10}
      style={styles.root}
    />
    </div>
    
  );
};
