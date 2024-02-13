export const getChileanFormatDate = (customDate?: Date) => {
  const date = customDate || new Date();
  const result = date.toLocaleDateString('', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return result;
};