interface User {
  username: string;
  email: string;
  picture: any;
}

export default async function fetchUserList() {
  const response = fetch("/api", { method: "get" });
  return (await response).json() as Promise<User[]>;
}
