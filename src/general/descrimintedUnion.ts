type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; heigh: number }
  | { kind: "square"; size: number };

function getShape(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;

    case "rectangle":
      return shape.width * shape.width;
    case "square":
      return shape.size ** 2;

    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
