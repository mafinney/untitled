import figmaData from './figmaData.json'

function parseDocument({ document }) {
  const pages: any[] = []
  if (Array.isArray(document.children)) {
    console.log("children contains elements...")
    for (const page of document.children) {
      pages.push(parsePage(page))
    }
  }
  return pages[0]
}

function parsePage(page) {
  const children: any[] = []
  if (Array.isArray(page.children)) {
    for (const child of page.children) {
      children.push(parseChild(child))
    }
  }
  return children
}

function parseChild(child) {
  // Handles text
  if (child.type == "TEXT") {
    return parseText(child);
  }

  // Handles shapes
  const shapeColor = {
    r: 255 * (child.fills[0].color.r.toFixed(3)),
    g: 255 * (child.fills[0].color.g.toFixed(3)),
    b: 255 * (child.fills[0].color.b.toFixed(3)),
    a: child.opacity
  }

  return ({
    shapeType: child.type,
    shapePosition: { x: child.x, y: child.y },
    shapeSize: { width: child.width, height: child.height },
    shapeColor: shapeColor
  })
}

function parseText(child) {
  // How to decide between H1, H2, so on... (id field???)

  // This returns the info for the div that has the text inside it and the info for the text
  const textColor = {
    r: 255 * (child.fills[0].color.r.toFixed(3)),
    g: 255 * (child.fills[0].color.g.toFixed(3)),
    b: 255 * (child.fills[0].color.b.toFixed(3))
  }

  console.log(textColor)

  return ({
    shapeType: "TEXT",
    divPosition: { x: child.x, y: child.y },
    divSize: { width: child.width, height: child.height },
    text: child.name,
    textFont: { size: child.fontSize, name: child.fontName },
    textColor: textColor
  })
}

function displayShape(e) {
  switch (e.shapeType) {
    case "RECTANGLE":
      return (
        <div
          key={`${e.shapeType}-${e.shapePosition.x}-${e.shapePosition.y}`}
          style={{
            display: "flex",
            position: "absolute",
            top: e.shapePosition.y,
            left: e.shapePosition.x,
            backgroundColor: (`rgba(${e.shapeColor.r}, ${e.shapeColor.g}, ${e.shapeColor.b}, ${e.shapeColor.a})`),
            width: e.shapeSize.width,
            height: e.shapeSize.height,
          }}
        />
      )
      break
    case "ELLIPSE":
      return (
        <div
          key={`${e.shapeType}-${e.shapePosition.x}-${e.shapePosition.y}`}
          style={{
            display: "flex",
            position: "absolute",
            top: e.shapePosition.y,
            left: e.shapePosition.x,
            backgroundColor: (`rgba(${e.shapeColor.r}, ${e.shapeColor.g}, ${e.shapeColor.b}, ${e.shapeColor.a})`),
            width: e.shapeSize.width,
            height: e.shapeSize.height,
            borderRadius: "100%"
          }}
        />
      )
      break
    case "TEXT":
      console.log(e)
      return (
        <div
          key={`${e.shapeType}-${e.divPosition.x}-${e.divPosition.y}`}
          style={{
            display: "flex",
            position: "absolute",
            top: e.divPosition.y,
            left: e.divPosition.x,
            backgroundColor: (`rgba(0, 0, 0, 0)`),
            width: e.divSize.width,
            height: e.divSize.height
          }}
        >
          <h1
            style={{
              color: (`rgb(${e.textColor.r}, ${e.textColor.g}, ${e.textColor.b})`),
              fontSize: e.textFont.size,
              fontFamily: e.textFont.name
            }}
          >
            {e.text}
          </h1>
        </div>)
      break
    case "H1":
      return (
        <h2></h2>
      )
      break
    case "H2":
      return (
        <h2></h2>
      )
      break
    case "H3":
      return (
        <h3></h3>
      )
      break
    case "P":
      return (
        <p
          style={{

          }}></p>
      )
      break
    default:
      console.log("bad");
      break
  }
}

const layerMapper = {
  RECTANGLE: "div",
};

const App = () => {
  const result = parseDocument(figmaData)?.map((e) => (
    displayShape(e)
  ))
  return result
};

export default App;