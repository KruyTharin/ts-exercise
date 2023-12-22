// type of
function toNumber(val: string | number): number {
  if (typeof val === "string") {
    return +val;
  }
  return val;
}

// in
declare function getStandardSessionToken(name: string, ttl: number): string;
declare function getAdminSessionToken(
  name: string,
  accessLevel: string
): string;

type StandardUser = {
  name: string;
  sessionTTL: number;
};

type AdminUser = StandardUser & {
  isAdmin: true;
  access: "read" | "write";
};

function Login(user: StandardUser | AdminUser) {
  if ("isAdmin" in user) {
    // AdminUser
    return getAdminSessionToken(user.name, user.access);
  }

  // StandardUser
  return getStandardSessionToken(user.name, user.sessionTTL);
}

// type predicate

type User = AdminUser | StandardUser;

const users: User[] = [
  {
    name: "jane",
    sessionTTL: 3,
  },
  {
    name: "bob",
    sessionTTL: Infinity,
    isAdmin: true,
    access: "read",
  },
];

const standardUser = users.filter((user): user is StandardUser => {
  return !("isAdmin" in user);
});

// discriminated unions

type StandardUser1 = {
  type: "standard";
  name: string;
  sessionTTL: number;
};

type AdminUser1 = {
  type: "admin";
  name: string;
  access: "read" | "write";
};

type User1 = AdminUser1 | StandardUser1;

function login(user: User1) {
  switch (user.type) {
    case "admin":
      getAdminSessionToken(user.name, user.access);
      break;

    case "standard":
      getStandardSessionToken(user.name, user.sessionTTL);
      break;

    default:
      const imposable: never = user;
      return;
  }
}
