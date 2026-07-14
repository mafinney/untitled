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

export default function parseDocument({document}) {
    if (Array.isArray(document.children)) {
        console.log("children contains elements...")
        for (const page of document.children) {
            parsePage(page)
        }
    }
}

function parsePage(page) {
    if (Array.isArray(page.children)) {
        for (const child of page.children) {
            console.log(parseChild(child))
        }
    }
}

function parseChild(child) {
    if (child.fills.length > 1) {
        console.error("More than one color")
    }

    return ({
        shapeType: child.type,
        shapePosition: {x: child.absoluteBoundingBox.x, y: child.absoluteBoundingBox.y},
        shapeSize: {width: child.absoluteBoundingBox.width, height: child.absoluteBoundingBox.height},
        shapeColor: child.fills[0].color
    })
}

parseDocument(figmaData)