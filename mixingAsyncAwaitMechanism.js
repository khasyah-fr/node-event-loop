const fs = require('fs')

console.log('Start of the script')

fs.readFile(__filename, () => {
    console.log('File read complete')

    try {
        setTimeout(() => {
            console.log('setTimeout in I/O');
        }, 0);
    } catch (err) {
        console.error('Error with setTimeout:', err);
    }

    (async () => {
        await Promise.resolve()
        console.log('Async/await in I/O phase')
    })()

    console.log('End of file read callback')
})

console.log('End of the script')

/*

Output:
Start of the script
End of the script
File read complete
End of file read callback
Async/await in I/O phase
setTimeout in I/O

*/