function dataFormat(data){
    if (!data || !data.timeData) {
        return '';
      }
    const isoDateString = data.timeData;
    const dateParts = isoDateString.split('T')[0].split('-');
    const year = dateParts[0];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    
    const monthNames = [
      "enero", "Febrero", "marzo",
      "abril", "mayo", "junio", "julio",
      "agosto", "septiembre", "octubre",
      "noviembre", "diciembre"
    ];
    
    const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
    return formattedDate
}
export default dataFormat