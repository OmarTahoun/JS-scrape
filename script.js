const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio')
const got = require('got');


async function scrapsite() {
    const url = 'http://localhost:8000/'
    const html = await got(url)
    const $ = cheerio.load(html.body)

    jsonframe($) // initializing the plugin

    let frame = {
    	companies: {           // setting the parent item as "companies"
    		_s: ".item",    // defines the elements to search for
    		_d: [{              // "data": [{}] defines a list of items
    			name: ".header [itemprop=name]",          // inline selector defining "name" so "company"."name"
    			description: ".header [rel=description]", // inline selector defining "description" as "company"."description"
    			url: {                                    // defining "url" by an attribute with "attr" and "selector" in an object
    				_s: ".header [itemprop=name]",      // is actually the same as the inline selector
    				attr: "href"                              // the attribute name to retrieve
    			},
    			contact: {                                // set up a parent "contact" element as "company"."contact"
    				_s: ".contact",                 // defines the element to search for
    				_d: {                               // defines the data which "contact" will contain
    					telephone: {                          // using "type" to use "telephone" parser to extract only the telephone
    						_s: "[itemprop=telephone]",     // simple selector for "telephone"
    						type: "telephone"                     // using "telephone" plugin parser
    					},
    					employee: {                           // setting a parent node "employee" as "company"."contact"."employee"
    						name: "[itemprop=employeeName]",          // inline selector defining "name"
    						jobTitle: "[itemprop=employeeJobTitle]",  // inline selector defining "jobtitle"
    						email: {                          // using "type" to use "email" parser to extract only the email
    							_s: "[itemprop=email]",     // simple selector for "email"
    							type: "email"                     // using "email" plugin parser
    						}
    					}
    				}
    			}
    		}]
    	}

    };


    console.log($('.list.items').scrape(frame, {
        string: true
    }))
}

scrapsite()
