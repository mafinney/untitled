const fakeData = [
  {
    shapeType: "RECTANGLE",
    shapePosition: { x: 0, y: -1 },
    shapeLocation: { width: 1920, height: 1080 },
    shapeColor: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
  },
  {
    shapeType: "RECTANGLE",
    shapePosition: { x: 0, y: -6 },
    shapeLocation: { width: 1920, height: 118 },
    shapeColor: {
      r: 164,
      g: 181,
      b: 143,
      a: 1,
    },
  },
];

const layerMapper = {
  RECTANGLE: "div",
};

const App = () => {
  const result = fakeData.map((e) => (
    <div
      key={${e.shapeType}-${e.shapePosition.x}-${e.shapePosition.y}}
      style={{
        display: "flex",
        position: "absolute",
        top: e.shapePosition.y,
        left: e.shapePosition.x,
        backgroundColor: rgba(${e.shapeColor.r}, ${e.shapeColor.g}, ${e.shapeColor.b}, ${e.shapeColor.a}),
        width: e.shapeLocation.width,
        height: e.shapeLocation.height,
      }}
    />
  ));
  console.log(result);

  return result
};

export default App;