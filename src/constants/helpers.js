export const makeDateMachineFormat = date => {
  const dateArr = date.split("/", 3)
  console.log(dateArr)
  const newDate = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`
  return newDate
}
