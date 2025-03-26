console.log('Start of the script')

setTimeout(() => {
    console.log('setTimeout 1')
}, 0)

setTimeout(() => {
    console.log('setTimeout 2')
}, 0)

setImmediate(() => {
    console.log('setImmediate 1')
})

setImmediate(() => {
    console.log('setImmediate 2')
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
setTimeout 1
setTimeout 2
setImmediate 1
setImmediate 2

*/