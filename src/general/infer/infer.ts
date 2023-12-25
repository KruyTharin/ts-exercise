import fetchUserList from "./fetchers";

type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T;

const userListPromise = fetchUserList();

type ReturnType = PromiseReturnType<typeof userListPromise>;

// @ts-ignore
const users: ReturnType = await fetchUserList();

users.map((x) => console.log(x.username));
