type AsyncData<T> = Promise<T>;

type GetPromiseReturnType<T extends (...args: any) => AsyncData<any>> = Awaited<
  ReturnType<T>
>;

type Result = GetPromiseReturnType<
  () => AsyncData<{ firstName: string; lastName: string }>
>;
