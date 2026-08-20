export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDateShort(dateString: string): string {
  const [day, month, year] = dateString.split(".");
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
}
