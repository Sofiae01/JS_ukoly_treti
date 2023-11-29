function parseDate(dateString) {
    const dateParts = dateString.split('.')
    const [day, month, year] = dateParts
    return {day,month,year}
  }
  const inputDate = '12.03.2015'
  const parsedDate = parseDate(inputDate)
  document.body.innerHTML += `<p>Day: ${parsedDate.day}, Month: ${parsedDate.month}, Year: ${parsedDate.year}</p>`

