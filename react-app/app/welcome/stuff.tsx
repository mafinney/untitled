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
    for (const child of page.children.reverse()) {
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

  if (child.type == "LINE") {
    return parseLine(child);
  }

  console.log(child)

  return ({
    shapeType: child.type,
    shapePosition: { x: child.x, y: child.y },
    shapeSize: { width: child.width, height: child.height },
    shapeColor: { r: 255 * (child.fills[0].color.r.toFixed(3)),
                  g: 255 * (child.fills[0].color.g.toFixed(3)),
                  b: 255 * (child.fills[0].color.b.toFixed(3)),
                  a: child.opacity },
    rotation: child.rotation
  })
}

function parseText(child) {
  let shapeType
  if (child.fontSize >= 64) {
    shapeType = "H1"
  } else if (child.fontSize >= 48) {
    shapeType = "H2"
  } else if (child.fontSize >= 36) {
    shapeType = "H3"
  } else {
    shapeType = "P"
  }

  return ({
    shapeType: shapeType,
    divPosition: { x: child.x, y: child.y },
    divSize: { width: child.width, height: child.height },
    text: child.name,
    textFont: { size: child.fontSize, name: child.fontName },
    textColor: { r: 255 * (child.fills[0].color.r.toFixed(3)),
                 g: 255 * (child.fills[0].color.g.toFixed(3)),
                 b: 255 * (child.fills[0].color.b.toFixed(3)) }
  })
}

function parseLine(child) {

  const shape = ({
    shapeType: child.type,
    shapePosition: { x: child.x, y: child.y },
    shapeSize: { width: child.width, height: child.height },
    shapeColor: { r: 255 * (child.strokes[0].color.r.toFixed(3)),
                 g: 255 * (child.strokes[0].color.g.toFixed(3)),
                 b: 255 * (child.strokes[0].color.b.toFixed(3)) },
    rotation: child.rotation
  })
  console.log(shape);
  return shape
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
    case "H2":
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
          <h2
            style={{
              color: (`rgb(${e.textColor.r}, ${e.textColor.g}, ${e.textColor.b})`),
              fontSize: e.textFont.size,
              fontFamily: e.textFont.name
            }}
          >
            {e.text}
          </h2>
        </div>)
      break
    case "H3":
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
          <h3
            style={{
              color: (`rgb(${e.textColor.r}, ${e.textColor.g}, ${e.textColor.b})`),
              fontSize: e.textFont.size,
              fontFamily: e.textFont.name
            }}
          >
            {e.text}
          </h3>
        </div>)
      break
    case "P":
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
          <p
            style={{
              color: (`rgb(${e.textColor.r}, ${e.textColor.g}, ${e.textColor.b})`),
              fontSize: e.textFont.size,
              fontFamily: e.textFont.name
            }}
          >
            {e.text}
          </p>
        </div>)
      break
    case "POLYGON":
      return (
        <div
          key={`${e.shapeType}-${e.shapePosition.x}-${e.shapePosition.y}`}
          style={{
            display: "flex",
            position: "absolute",
            top: e.shapePosition.y,
            left: e.shapePosition.x,
            width: 0,
            height: 0,
            borderLeft: `${e.shapeSize.width / 2}px solid transparent`,
            borderRight: `${e.shapeSize.width / 2}px solid transparent`,
            borderBottom: `${(e.shapeSize.height) * 0.866}px solid rgba(${e.shapeColor.r}, ${e.shapeColor.g}, ${e.shapeColor.b}, ${e.shapeColor.a})`
          }}
        />
      )
    case "LINE":
      return (
        <div
          key={`${e.shapeType}-${e.shapePosition.x}-${e.shapePosition.y}`}
          style={{
            display: "flex",
            position: "absolute",
            top: `${e.shapePosition.y}px`,
            left: `${e.shapePosition.x + e.shapeSize.width}px`,
            width: `${e.shapeSize.width}px`,
            height: `${e.shapeSize.height + 1}px`,
            zIndex: 99,
            backgroundColor: (`rgb(${e.shapeColor.r}, ${e.shapeColor.g}, ${e.shapeColor.b})`),
            transform: `rotate(${-1 * e.rotation}deg)`
          }}
        />
      )
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