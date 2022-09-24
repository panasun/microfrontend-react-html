const serverUrl = "http://localhost:5001";
fetch(`${serverUrl}/getfiles`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const jsFiles = data.jsFiles;
    const cssFiles = data.cssFiles;
    console.log(jsFiles);
    elements = jsFiles.map((eachFileName) => {
      let script = document.createElement("script");
      script.src = `${serverUrl}/static/js/${eachFileName}`;
      document.head.appendChild(script);
    });
    elements = cssFiles.map((eachFileName) => {
      let link = document.createElement("link");
      link.href = `${serverUrl}/static/css/${eachFileName}`;
      document.head.appendChild(link);
      return link;
    });
  });
