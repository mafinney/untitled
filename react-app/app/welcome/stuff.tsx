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
  if (child.fills.length > 1) {
    console.error("More than one color")
  }

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
    case "H1":
      return (
        <h1></h1>
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