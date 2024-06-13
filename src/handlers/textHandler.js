export default function handleText(text) {
  //let newText = text.replaceAll(/(\\|"\{})/g, "").replaceAll(/":/g, ":"); //.replaceAll('"{', "").replaceAll();
  let newText = text
    .replaceAll(/(\\"|"\\)/g, '"')
    .replaceAll(/(("{|'{))/g, "{")
    .replaceAll(/(}"|}')/g, "}")
    //     .replaceAll("FGPayload", '"FGPayload"')
    .replaceAll("  },", "}")
    .replace("];", "]")
    .replace(",\\n", "");
  console.log(newText);
  //   console.log(text);
  newText = JSON.parse(newText);
  //   newText = JSON.stringify(newText, null, 2);
  console.log(newText);
  return newText;
}
