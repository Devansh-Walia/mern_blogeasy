const generateImage = (
    name,
    foregroundColor = "white",
    backgroundColor = "#009578"
  ) => {
    name = name
      .match(/(\b\S)?/g)
      .join("")
      .match(/(^\S|\S$)?/g)
      .join("")
      .toUpperCase();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = 200;
    canvas.height = 200;
  
    // Draw background
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Draw text
    context.font = "bold 100px Assistant";
    context.fillStyle = foregroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(name, canvas.width / 2, canvas.height / 2);
  
    return canvas.toDataURL("image/png");
  };

  export default generateImage;