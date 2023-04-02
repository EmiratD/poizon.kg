export default () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Add 1 because getMonth() returns 0-based month index
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}