interface Person {
  type: "person";
  name: string;
  age: number;
}
interface Company {
  type: "company";
  name: string;
  numberOfEmployees: number;
}

type Entity = Person | Company;

function isPerson(entity: Entity): entity is Person {
  return entity.type === "person";
}

const entity = (entity: Entity) => {
  if (isPerson(entity)) {
    // if not using return should should else condition
    return console.log(entity.name, entity.name, entity.type);
  }
  return console.log(entity.name, entity.numberOfEmployees, entity.type);
};
