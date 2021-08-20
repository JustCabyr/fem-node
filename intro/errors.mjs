import { readFile } from 'fs/promises'

// process.on('uncaughtException', (e) => {
//     console.log(e)
// })

// try {
//     const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (error) {
//     console.log(error)
//     console.log('Hello')
// }


const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
.catch(e => {
    console.log(e)
    console.log('Hello')
})

// readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err)
//         // throw err
//     } else {
//         //
//     }
// });

