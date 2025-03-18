console.log('Start of the script')

setTimeout(() => {
    console.log('setTimeout with 0ms')
}, 0)

setImmediate(() => {
    console.log('setImmediate')
})

process.nextTick(() => {
    console.log('process.nextTick')
})

console.log('End of the script')

/*

Output:
Start of the script
End of the script
process.nextTick
setTimeout with 0ms
setImmediate

*/