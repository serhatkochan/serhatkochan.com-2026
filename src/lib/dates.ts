export function formatDate(date: Date | string) {
  const value = typeof date === 'string' ? new Date(date) : date;
  return value.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
