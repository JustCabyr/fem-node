#! /usr/bin/env node
// import packages 
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

// parse env vars
const { argv } = yargs(process.argv)

// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
const children = data.data.children

// get radom post from reddit api response of all posts on front page
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://www.reddit.com${randomPost.data.permalink}`

// log if --print flag is passed
if (argv.print || argv.p) {
    console.log(`
        title: ${randomPost.data.title},
        link: ${link}
    `)
} else {
    // open in browser if not
    open(link)
}
