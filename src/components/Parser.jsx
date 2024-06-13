import { useState } from "react";
import handleText from "../handlers/textHandler";
//import { showFile } from "../handlers/uploadHandler";

function Parser() {
  const [output, setOutput] = useState();

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      let text = e.target.result;
      let newText = `${text}`;

      console.log(newText);
      newText = await handleText(newText);
      setOutput(newText);
    };
    reader.readAsText(e.target.files[0]);
    return reader.result;
  };

  return (
    <div className="flex flex-col  w-screen m-20 ">
      <div className="text-8 text-primary"> Upload Escaped JSON string to pretty print as JSON</div>
      <div>E.G.: "&#123;\"data\"...</div>
      <div className="divider"></div>
      <div className="container">
        <div>
          <input className="btn-sm" type="file" onChange={(e) => showFile(e)} />
        </div>
      </div>
      <div className="w-full h-500">
        {output && (
          <div>
            <pre>{JSON.stringify(output, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Parser;
