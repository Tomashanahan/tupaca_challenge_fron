export const parceDate = (date: string) => {
  const fechaOriginal = new Date(date);

  const day = fechaOriginal.getDate();
  const month = fechaOriginal.toLocaleString("default", { month: "short" });
  const year = fechaOriginal.getFullYear();

  const nuevaFecha = day + " " + month + " " + year;

  return nuevaFecha;
};
