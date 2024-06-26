import fs from "fs";

const createFile = () => {
  let date = new Date().toString();
  let textDate = date.toString();
  let txt = textDate.split(":").join("-");

  try {
    if (!fs.existsSync("files")) {
      fs.mkdirSync("");
    }
    fs.writeFileSync(`./files/${txt}.txt`, `TimeStamp : ${Date.now()}`);
  } catch (e) {
    console.log(`Error creating file: ${e.message}`);
  }
};


const readFolder = (foldername) => {
  try {
    const files = fs.readdirSync(foldername);
    return files;
  } catch (e) {
    console.log(`Error reading file: ${e.message}`);
  }
};

export { createFile, readFolder };