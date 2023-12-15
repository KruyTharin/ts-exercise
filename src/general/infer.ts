const colors = ["text-teal-500", "text-blue-500", "text-rose-500"] as const;

type ExtractColor<S extends string> = S extends `text-${infer R}-500` ? R : S;

type C = (typeof colors)[number];

const c: C = "text-blue-500";

const findColor = (color: ExtractColor<(typeof colors)[number]>) => {
  return colors.find((c) => c.includes(color));
};

findColor("blue");
