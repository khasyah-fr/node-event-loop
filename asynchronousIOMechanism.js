const fs = require('fs')

console.log('Start of the script')

fs.readFile(__filename, () => {
    console.log('File read complete')
})

setTimeout(() => {
    console.log('setTimeout')
}, 0)

setImmediate(() => {
    console.log('setImmediate')
})

console.log('End of the script')

/*

Output:
Start of the script
End of the script
setTimeout
setImmediate
File read complete

*/