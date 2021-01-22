const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(arr) {
  let year
  arr.find(obj => {
    if (obj['result'] === 'W') {
      return year = obj['year']
    }
  })
  return year
}
