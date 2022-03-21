const numberchecker = (num1: number): number => {
  if (isNaN(num1) === false && num1 > 0) {
    return num1
  } else {
    return 0
  }
}
const stringchecker = (string1: string): unknown => {
  if (typeof string1 == 'string') {
    return string1
  } else {
    return null
  }
}
export default { numberchecker, stringchecker }
