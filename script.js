//importing packages
const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const got = require('got');


async function scrapsite() {
    const url = 'https://stackoverflow.com/questions?pagesize=50&sort=newest/'
    const html = await got(url) // Loading URL
    const $ = cheerio.load(html.body) //Getting html data

    jsonframe($) // initializing the plugin

    let frame = {
    	Questions: {
    		_s: ".question-summary",  //selects the question
    		_d: [{
    			title: ".summary h3",  //get the question title
    			description: ".summary .excerpt", // get question description
    		}]
    	}
    };


    console.log($('#mainbar #questions').scrape(frame, {
        string: true
    }))
}

scrapsite()
