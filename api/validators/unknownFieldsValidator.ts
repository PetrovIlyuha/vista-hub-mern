export async function validateUnknownFields<T>(
  dtoInterface: T,
  dto: Record<string, unknown>
) {
  const validKeys = Object.keys(dtoInterface as object);
  const inputKeys = Object.keys(dto);

  const unknownFields = inputKeys.filter((key) => !validKeys.includes(key));
  if (unknownFields.length > 0) {
    throw `Unknown fields: ${unknownFields.join(", ")}`;
  }
}
