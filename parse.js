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
        shapeLocation: {width: child.absoluteBoundingBox.width, height: child.absoluteBoundingBox.height},
        shapeColor: child.fills[0].color
    })
}

parseDocument(figmaData)

// {
//     "document": {
//         "id": "0:0",
//         "name": "Document",
//         "type": "DOCUMENT",
//         "scrollBehavior": "SCROLLS",
//         "children": [ // these are the pages of the figma document
//             {
//                 "id": "0:1",
//                 "name": "Page 1",
//                 "type": "CANVAS",
//                 "scrollBehavior": "SCROLLS",
//                 "children": [ // these are anything displayed on the page
//                     {
//                         "id": "1:2",
//                         "name": "Rectangle 1",
//                         "type": "RECTANGLE",
//                         "locked": true,
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.92211544513702393,
//                                     "g": 0.92211544513702393,
//                                     "b": 0.92211544513702393,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "INSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 0.0,
//                             "y": -1.0,
//                             "width": 1920.0,
//                             "height": 1080.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 0.0,
//                             "y": -1.0,
//                             "width": 1920.0,
//                             "height": 1080.0
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "exportSettings": [
//                             {
//                                 "suffix": "",
//                                 "format": "PNG",
//                                 "constraint": {
//                                     "type": "SCALE",
//                                     "value": 1.0
//                                 }
//                             }
//                         ],
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:90",
//                         "name": "Rectangle 2",
//                         "type": "RECTANGLE",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.64385825395584106,
//                                     "g": 0.71057701110839844,
//                                     "b": 0.56231230497360229,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.0,
//                                     "g": 0.0,
//                                     "b": 0.0,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokeWeight": 0.0,
//                         "strokeAlign": "INSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 0.0,
//                             "y": -6.0,
//                             "width": 1920.0,
//                             "height": 118.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": -4.0,
//                             "y": -6.0,
//                             "width": 1928.0,
//                             "height": 126.0
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "exportSettings": [
//                             {
//                                 "suffix": "",
//                                 "format": "PNG",
//                                 "constraint": {
//                                     "type": "SCALE",
//                                     "value": 1.0
//                                 }
//                             }
//                         ],
//                         "effects": [
//                             {
//                                 "type": "DROP_SHADOW",
//                                 "visible": true,
//                                 "color": {
//                                     "r": 0.0,
//                                     "g": 0.0,
//                                     "b": 0.0,
//                                     "a": 0.250
//                                 },
//                                 "blendMode": "NORMAL",
//                                 "offset": {
//                                     "x": 0.0,
//                                     "y": 4.0
//                                 },
//                                 "radius": 4.0,
//                                 "showShadowBehindNode": false
//                             }
//                         ],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:88",
//                         "name": "George",
//                         "type": "TEXT",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 1.0,
//                                     "g": 1.0,
//                                     "b": 1.0,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "OUTSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 82.0,
//                             "y": -24.0,
//                             "width": 216.0,
//                             "height": 112.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 86.096000671386719,
//                             "y": 4.7279949188232422,
//                             "width": 189.30499267578125,
//                             "height": 83.392005920410156
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "characters": "George",
//                         "characterStyleOverrides": [],
//                         "styleOverrideTable": {},
//                         "lineTypes": [
//                             "NONE"
//                         ],
//                         "lineIndentations": [
//                             0
//                         ],
//                         "style": {
//                             "fontFamily": "Pacifico",
//                             "fontPostScriptName": "Pacifico-Regular",
//                             "fontStyle": "Regular",
//                             "fontWeight": 400,
//                             "textAutoResize": "HEIGHT",
//                             "fontSize": 64.0,
//                             "textAlignHorizontal": "LEFT",
//                             "textAlignVertical": "TOP",
//                             "letterSpacing": 0.0,
//                             "lineHeightPx": 112.38400268554688,
//                             "lineHeightPercent": 100.0,
//                             "lineHeightUnit": "INTRINSIC_%"
//                         },
//                         "layoutVersion": 5,
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:89",
//                         "name": "coffee & pastries",
//                         "type": "TEXT",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.33365380764007568,
//                                     "g": 0.28071835637092590,
//                                     "b": 0.28071835637092590,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "OUTSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 326.0,
//                             "y": 27.0,
//                             "width": 634.0,
//                             "height": 36.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 328.16000366210938,
//                             "y": 30.775999069213867,
//                             "width": 308.36758422851562,
//                             "height": 36.648002624511719
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "characters": "coffee & pastries",
//                         "characterStyleOverrides": [],
//                         "styleOverrideTable": {},
//                         "lineTypes": [
//                             "NONE"
//                         ],
//                         "lineIndentations": [
//                             0
//                         ],
//                         "style": {
//                             "fontFamily": "Comfortaa",
//                             "fontPostScriptName": "Comfortaa-Light",
//                             "fontStyle": "Light",
//                             "fontWeight": 300,
//                             "fontSize": 36.0,
//                             "textAlignHorizontal": "LEFT",
//                             "textAlignVertical": "TOP",
//                             "letterSpacing": 0.0,
//                             "lineHeightPx": 40.139999389648438,
//                             "lineHeightPercent": 100.0,
//                             "lineHeightUnit": "INTRINSIC_%"
//                         },
//                         "layoutVersion": 5,
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:94",
//                         "name": "Rectangle 3",
//                         "type": "RECTANGLE",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.88365393877029419,
//                                     "g": 0.88365393877029419,
//                                     "b": 0.88365393877029419,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "INSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 0.0,
//                             "y": 101.0,
//                             "width": 1920.0,
//                             "height": 33.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 0.0,
//                             "y": 101.0,
//                             "width": 1920.0,
//                             "height": 33.0
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:100",
//                         "name": "Menu",
//                         "type": "TEXT",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.30288475751876831,
//                                     "g": 0.30288475751876831,
//                                     "b": 0.30288475751876831,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "OUTSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 906.0,
//                             "y": 101.0,
//                             "width": 106.0,
//                             "height": 29.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 907.15197753906250,
//                             "y": 107.19999694824219,
//                             "width": 54.842834472656250,
//                             "height": 17.040000915527344
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "characters": "Menu",
//                         "characterStyleOverrides": [],
//                         "styleOverrideTable": {},
//                         "lineTypes": [
//                             "NONE"
//                         ],
//                         "lineIndentations": [
//                             0
//                         ],
//                         "style": {
//                             "fontFamily": "Cabin",
//                             "fontPostScriptName": "Cabin-Regular",
//                             "fontStyle": "Regular",
//                             "fontWeight": 400,
//                             "textAutoResize": "HEIGHT",
//                             "fontSize": 24.0,
//                             "textAlignHorizontal": "LEFT",
//                             "textAlignVertical": "TOP",
//                             "letterSpacing": 0.0,
//                             "lineHeightPx": 29.159999847412109,
//                             "lineHeightPercent": 100.0,
//                             "lineHeightUnit": "INTRINSIC_%"
//                         },
//                         "layoutVersion": 5,
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:103",
//                         "name": "Order Online",
//                         "type": "TEXT",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.30288475751876831,
//                                     "g": 0.30288475751876831,
//                                     "b": 0.30288475751876831,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "OUTSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 1443.0,
//                             "y": 101.0,
//                             "width": 243.0,
//                             "height": 29.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 1443.95996093750,
//                             "y": 106.0,
//                             "width": 130.65490722656250,
//                             "height": 18.335998535156250
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "characters": "Order Online",
//                         "characterStyleOverrides": [],
//                         "styleOverrideTable": {},
//                         "lineTypes": [
//                             "NONE"
//                         ],
//                         "lineIndentations": [
//                             0
//                         ],
//                         "style": {
//                             "fontFamily": "Cabin",
//                             "fontPostScriptName": "Cabin-Regular",
//                             "fontStyle": "Regular",
//                             "fontWeight": 400,
//                             "textAutoResize": "HEIGHT",
//                             "fontSize": 24.0,
//                             "textAlignHorizontal": "LEFT",
//                             "textAlignVertical": "TOP",
//                             "letterSpacing": 0.0,
//                             "lineHeightPx": 29.159999847412109,
//                             "lineHeightPercent": 100.0,
//                             "lineHeightUnit": "INTRINSIC_%"
//                         },
//                         "layoutVersion": 5,
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:101",
//                         "name": "About",
//                         "type": "TEXT",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.30288475751876831,
//                                     "g": 0.30288475751876831,
//                                     "b": 0.30288475751876831,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "OUTSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 185.0,
//                             "y": 101.0,
//                             "width": 113.0,
//                             "height": 29.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 210.68362426757812,
//                             "y": 106.0,
//                             "width": 61.41882324218750,
//                             "height": 18.239997863769531
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "characters": "About",
//                         "characterStyleOverrides": [],
//                         "styleOverrideTable": {},
//                         "lineTypes": [
//                             "NONE"
//                         ],
//                         "lineIndentations": [
//                             0
//                         ],
//                         "style": {
//                             "fontFamily": "Cabin",
//                             "fontPostScriptName": "Cabin-Regular",
//                             "fontStyle": "Regular",
//                             "fontWeight": 400,
//                             "textAutoResize": "HEIGHT",
//                             "fontSize": 24.0,
//                             "textAlignHorizontal": "CENTER",
//                             "textAlignVertical": "TOP",
//                             "letterSpacing": 0.0,
//                             "lineHeightPx": 29.159999847412109,
//                             "lineHeightPercent": 100.0,
//                             "lineHeightUnit": "INTRINSIC_%"
//                         },
//                         "layoutVersion": 5,
//                         "effects": [],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     },
//                     {
//                         "id": "1:107",
//                         "name": "1317 NE 47th St, Seattle, WA. 98105",
//                         "type": "TEXT",
//                         "scrollBehavior": "SCROLLS",
//                         "blendMode": "PASS_THROUGH",
//                         "fills": [
//                             {
//                                 "blendMode": "NORMAL",
//                                 "type": "SOLID",
//                                 "color": {
//                                     "r": 0.0,
//                                     "g": 0.0,
//                                     "b": 0.0,
//                                     "a": 1.0
//                                 }
//                             }
//                         ],
//                         "strokes": [],
//                         "strokeWeight": 1.0,
//                         "strokeAlign": "OUTSIDE",
//                         "absoluteBoundingBox": {
//                             "x": 1363.0,
//                             "y": 1.0,
//                             "width": 557.0,
//                             "height": 36.0
//                         },
//                         "absoluteRenderBounds": {
//                             "x": 1360.439941406250,
//                             "y": 3.6879999637603760,
//                             "width": 549.207031250,
//                             "height": 38.271999359130859
//                         },
//                         "constraints": {
//                             "vertical": "TOP",
//                             "horizontal": "LEFT"
//                         },
//                         "characters": "1317 NE 47th St, Seattle, WA. 98105",
//                         "characterStyleOverrides": [],
//                         "styleOverrideTable": {},
//                         "lineTypes": [
//                             "NONE"
//                         ],
//                         "lineIndentations": [
//                             0
//                         ],
//                         "style": {
//                             "fontFamily": "Comfortaa",
//                             "fontPostScriptName": "Comfortaa-Light",
//                             "fontStyle": "Light",
//                             "fontWeight": 300,
//                             "textAutoResize": "HEIGHT",
//                             "fontSize": 32.0,
//                             "textAlignHorizontal": "LEFT",
//                             "textAlignVertical": "TOP",
//                             "letterSpacing": 0.0,
//                             "lineHeightPx": 35.680000305175781,
//                             "lineHeightPercent": 100.0,
//                             "lineHeightUnit": "INTRINSIC_%"
//                         },
//                         "layoutVersion": 5,
//                         "exportSettings": [
//                             {
//                                 "suffix": "",
//                                 "format": "PDF",
//                                 "constraint": {
//                                     "type": "SCALE",
//                                     "value": 1.0
//                                 }
//                             }
//                         ],
//                         "effects": [
//                             {
//                                 "type": "DROP_SHADOW",
//                                 "visible": true,
//                                 "color": {
//                                     "r": 0.0,
//                                     "g": 0.0,
//                                     "b": 0.0,
//                                     "a": 0.250
//                                 },
//                                 "blendMode": "NORMAL",
//                                 "offset": {
//                                     "x": 0.0,
//                                     "y": 4.0
//                                 },
//                                 "radius": 4.0,
//                                 "showShadowBehindNode": false
//                             }
//                         ],
//                         "interactions": [],
//                         "complexStrokeProperties": {
//                             "strokeType": "BASIC"
//                         }
//                     }
//                 ],
//                 "backgroundColor": {
//                     "r": 0.11764705926179886,
//                     "g": 0.11764705926179886,
//                     "b": 0.11764705926179886,
//                     "a": 1.0
//                 },
//                 "prototypeStartNodeID": null,
//                 "flowStartingPoints": [],
//                 "prototypeDevice": {
//                     "type": "NONE",
//                     "rotation": "NONE"
//                 },
//                 "exportSettings": [
//                     {
//                         "suffix": "",
//                         "format": "PNG",
//                         "constraint": {
//                             "type": "SCALE",
//                             "value": 1.0
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     "components": {},
//     "componentSets": {},
//     "schemaVersion": 0,
//     "styles": {},
//     "name": "Untitled",
//     "lastModified": "2026-07-13T03:14:19Z",
//     "thumbnailUrl": "https://s3-alpha.figma.com/thumbnails/f0a052a8-2dfd-4a70-b4b1-cd83c18fc44c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWCZHCZBGZX%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e77b075ab900ee87fa1926a95c202a64bba883b0498bb62d0f4be4428ec6db00",
//     "version": "2375521785178278187",
//     "role": "owner",
//     "editorType": "figma",
//     "linkAccess": "view"
// }