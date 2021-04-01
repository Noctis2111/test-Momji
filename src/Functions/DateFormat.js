/**
 * formate la date donner en parametre au format jj/mm/aaaa
 *
 * ajouter un deuxieme parametre true pour ajouter l'heure jj/mm/aa HH:MM
 */

const dateFormat = (date, hours) => {
  const newDate = new Date(date);
  let format;

  if (hours) {
    format =
      newDate.getDate() +
      "/" +
      (newDate.getMonth() +
        1 +
        "/" +
        newDate.getFullYear() +
        " " +
        newDate.getHours() +
        ":" +
        newDate.getMinutes());
  } else {
    let day;
    let month;

    if (newDate.getDate().toString().length === 1) {
      day = "0" + newDate.getDate().toString();
    } else {
      day = newDate.getDate();
    }
    if ((newDate.getMonth() + 1).toString().length === 1) {
      month = "0" + (newDate.getMonth() + 1).toString();
    } else {
      month = newDate.getMonth() + 1;
    }

    format = day + "/" + month + "/" + newDate.getFullYear();
    console.log(
      "🚀 ~ file: DateFormat.js ~ line 39 ~ dateFormat ~ format",
      format
    );
  }
  return format;
};

module.exports = dateFormat;
