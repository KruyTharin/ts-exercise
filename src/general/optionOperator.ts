export const myObj: Record<string, string[]> = {};

if (!myObj.foo) {
  myObj.foo = [];
}

myObj.foo.push("d", "d");
// myObj.foo?.push("d");
