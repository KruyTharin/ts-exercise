const getValue = <TObj, Tkey extends keyof TObj>(obj: TObj, key: Tkey) => {
  if (key === "bad") {
    throw new Error("Dont access the bad key ");
  }
  return obj[key];
};

getValue(
  {
    a: 1,
    b: "Hello",
    c: true,
  },
  "c"
);

const getValue1 = <TObj>(obj: TObj, key: keyof TObj) => {
  if (key === "bad") {
    throw new Error("You dont need to add bad key!");
  }
  return obj[key];
  //    ^?
};

const x = getValue1(
  {
    a: 1,
    b: "Hello",
    c: true,
  },
  "b"
);

console.log(x);
