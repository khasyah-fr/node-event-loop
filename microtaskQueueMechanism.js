const fs = require('fs')

console.log('Start of the script')

fs.readFile(__filename, () => {
    console.log('File read complete')

    setTimeout(() => {
        console.log('setTimeout')
    }, 0)

    setImmediate(() => {
        console.log('setImmediate')
    })

    Promise.resolve().then(() => {
        console.log('Promise resolved in I/O phase')
    })

    process.nextTick(() => {
        console.log('process.nextTick in I/O phase')
    })
})

console.log('End of the script')

/*

Output:
Start of the script
End of the script
File read complete
process.nextTick in I/O phase
Promise resolved in I/O phase
setImmediate
setTimeout

*/