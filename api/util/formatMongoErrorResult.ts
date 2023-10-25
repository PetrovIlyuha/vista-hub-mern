function formatMongoErrorResult(inputString: string, searchObject: any) {
  const searchKeys = Object.keys(searchObject);

  // Initialize an empty result object
  const result: Record<string, string> = {};
  searchKeys.forEach((key) => {
    const regex = new RegExp(key, "gi");
    const matches = inputString.match(regex);

    if (matches && matches.length > 0) {
      result[key] = `Field ${key} violates model constraint`;
    }
  });
  return result;
}

export { formatMongoErrorResult };
