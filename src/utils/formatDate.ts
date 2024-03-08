export const formatDate = (date: Date): string => {
  const convertedDate = new Date(date);
  const year = convertedDate.getFullYear();
  const month = convertedDate.getMonth() + 1; // Note: Months are zero-based, so January is 0
  const day = convertedDate.getDate();
  const hour = convertedDate.getHours();
  const minute = convertedDate.getMinutes();
  const second = convertedDate.getSeconds();

  return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
};
