interface Animal {
  name: string;
}
interface Human {
  firstName: string;
  lastName: string;
}
function isAnimal(p: any): p is Animal {
  return "name" in p;
}

export const getDisplayName = <TItem extends Animal | Human>(
  item: TItem
): TItem extends Human ? { humanName: string } : { animalName: string } => {
  if (isAnimal(item)) {
    return {
      animalName: item.name,
    } as TItem extends Human ? { humanName: string } : { animalName: string };
  }
  return {
    humanName: item.firstName + " " + item.lastName,
  } as TItem extends Human ? { humanName: string } : { animalName: string };
};

const result = getDisplayName({ name: "Petter" });
const result2 = getDisplayName({
  firstName: "Jame",
  lastName: "Lily",
});
