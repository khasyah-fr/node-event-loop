console.log('Start of the script')

const start = Date.now()

while (Date.now() - start < 3000) {
    // Block the event loop for 3 seconds
}

console.log('End of heavy task')

setTimeout(() => {
    console.log('setTimeout after blocking task')
}, 0)

console.log('End of the script')

/*

Output:
Start of the script
End of heavy task
End of the script
setTimeout after blocking task

*/