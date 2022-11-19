const arr = [2,3,12,4,3,54,12,12,98,54,30,42,23,11,87,65,34]
const search = 12

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr, search))