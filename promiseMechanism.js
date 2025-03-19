console.log('Start of the script')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
    console.log('Promise resolved')
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
Promise resolved
setTimeout

*/