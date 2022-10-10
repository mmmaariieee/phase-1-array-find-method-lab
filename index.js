// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

// function superbowlWin(element) {
//     return element.result === "W"
// }


function superbowlWin(record) {
    const findWinner = record.find((element) => element.result === "W")
    if (typeof findWinner === "object") {
        return findWinner.year
    } else {
        return undefined
    }
}