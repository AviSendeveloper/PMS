/**
 * Generate initials for a name
 * @param name
 * @returns
 */
export const generateInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
