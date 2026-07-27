const figmaData = {
  document: {
    id: "0:0",
    name: "Document",
    type: "DOCUMENT",
    scrollBehavior: "SCROLLS",
    children: [
      {
        id: "0:1",
        name: "Page 1",
        type: "CANVAS",
        scrollBehavior: "SCROLLS",
        children: [
          {
            "id": "1:2",
            "name": "Rectangle 1",
            "type": "RECTANGLE",
            "locked": true,
            "scrollBehavior": "SCROLLS",
            "blendMode": "PASS_THROUGH",
            "fills": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 0.92211544513702393,
                  "g": 0.92211544513702393,
                  "b": 0.92211544513702393,
                  "a": 1.0
                }
              }
            ],
            "strokes": [],
            "strokeWeight": 1.0,
            "strokeAlign": "INSIDE",
            "absoluteBoundingBox": {
              "x": 0.0,
              "y": -1.0,
              "width": 1920.0,
              "height": 1080.0
            },
            "absoluteRenderBounds": {
              "x": 0.0,
              "y": -1.0,
              "width": 1920.0,
              "height": 1080.0
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "exportSettings": [
              {
                "suffix": "",
                "format": "PNG",
                "constraint": {
                  "type": "SCALE",
                  "value": 1.0
                }
              }
            ],
            "effects": [],
            "interactions": [],
            "complexStrokeProperties": {
              "strokeType": "BASIC"
            }
          },
          {
            "id": "1:90",
            "name": "Rectangle 2",
            "type": "RECTANGLE",
            "scrollBehavior": "SCROLLS",
            "blendMode": "PASS_THROUGH",
            "fills": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 0.64385825395584106,
                  "g": 0.71057701110839844,
                  "b": 0.56231230497360229,
                  "a": 1.0
                }
              }
            ],
            "strokes": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 1.0
                }
              }
            ],
            "strokeWeight": 0.0,
            "strokeAlign": "INSIDE",
            "absoluteBoundingBox": {
              "x": 0.0,
              "y": -6.0,
              "width": 1920.0,
              "height": 118.0
            },
            "absoluteRenderBounds": {
              "x": -4.0,
              "y": -6.0,
              "width": 1928.0,
              "height": 126.0
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "exportSettings": [
              {
                "suffix": "",
                "format": "PNG",
                "constraint": {
                  "type": "SCALE",
                  "value": 1.0
                }
              }
            ],
            "effects": [
              {
                "type": "DROP_SHADOW",
                "visible": true,
                "color": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 0.250
                },
                "blendMode": "NORMAL",
                "offset": {
                  "x": 0.0,
                  "y": 4.0
                },
                "radius": 4.0,
                "showShadowBehindNode": false
              }
            ],
            "interactions": [],
            "complexStrokeProperties": {
              "strokeType": "BASIC"
            }
          },
        ]
      }
    ]
  },
  components: {},
  componentSets: {},
  schemaVersion: 0,
  styles: {},
  name: "Untitled",
  lastModified: "2026-07-13T03:14:19Z",
  thumbnailUrl: "...",
  version: "2375521785178278187",
  role: "owner",
  editorType: "figma",
  linkAccess: "view"
};


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
    a: child.fills[0].color.a
  }

  return ({
    shapeType: child.type,
    shapePosition: { x: child.absoluteBoundingBox.x, y: child.absoluteBoundingBox.y },
    shapeSize: { width: child.absoluteBoundingBox.width, height: child.absoluteBoundingBox.height },
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