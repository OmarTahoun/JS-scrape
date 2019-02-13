const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const got = require('got');


async function scrapsite() {
    const url = 'http://localhost:8000/'
    const html = await got(url)
    const $ = cheerio.load(html.body)

    jsonframe($) // initializing the plugin

    let frame = {
    	companies: {
    		_s: ".question-summary",
    		_d: [{
    			title: ".summary h3",
    			description: ".summary .excerpt",
    		}]
    	}
    };


    console.log($('#mainbar #questions').scrape(frame, {
        string: true
    }))
}

scrapsite()
