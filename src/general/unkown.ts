const groupBy = (arr: Record<string, unknown>[], key: string) => {
  const result: Record<string, unknown[]> = {};

  arr.forEach((item) => {
    const resultKey = item[key] as string;
    //     ^?
    if (result[resultKey]) {
    }
  });
};
