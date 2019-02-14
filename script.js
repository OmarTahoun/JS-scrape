//importing packages
const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const got = require('got');
const fs = require('fs');

async function scrapsite() {
    const url = 'https://github.com/trending'
    const html = await got(url) // Loading URL
    const $ = cheerio.load(html.body) //Getting html data
    jsonframe($) // initializing the plugin

    var frame = {
    	Repositories: {
    		_s: ".col-12.d-block.width-full.py-4.border-bottom",
    		_d: [{
    			name: "a",
    			description: ".py-1 p",
    			programming_Language: ".f6.text-gray.mt-2 .d-inline-block.mr-3 [itemprop=programmingLanguage]" ,
          stars: ".f6.text-gray.mt-2 a"
    		}]
    	}

    };


    console.log($('.explore-content .repo-list').scrape(frame, {
        string: true
    }))
}

scrapsite()
