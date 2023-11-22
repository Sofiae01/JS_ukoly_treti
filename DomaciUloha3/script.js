function parseDate(dateString) {
    const dateParts = dateString.split('.')
    const [day, month, year] = dateParts
    return {
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year)
    }
  }
  const inputDate = '12.03.2015'
  const parsedDate = parseDate(inputDate)
  document.body.innerHTML =+ parsedDate

