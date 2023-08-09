export const parseDate = (date: string) => {
  var fechaOriginal = new Date(date);

  var day = fechaOriginal.getDate();
  var month = fechaOriginal.toLocaleString("default", { month: "short" });
  var year = fechaOriginal.getFullYear();

  var nuevaFecha = day + " " + month + " " + year;

  return nuevaFecha;
};
