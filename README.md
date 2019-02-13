# JS-scrape
Scraping example with JavaScript

### Learning how to scrape HTML using JS i am following [this](https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31)


## Data format needed
- question
  - question title
  - description
  - status
  - user
    - user name:
## Selectors wanted for the scraper
- question: "#mainbar #questions .question-summary"
  - question-title: ".summary h3"
  - description: ".summary .excerpt"


## OUPUT
```JSON
{
  "companies": [
    {
      "name": "Tessera",
      "contact": {
        "employee": {
          "name": "Mike Layn",
          "jobTitle": "Marketing Assistant"
        }
      }
    },
    {
      "name": "Marcox",
      "contact": {
        "employee": {
          "name": "Jake Kannegan",
          "jobTitle": "Owner"
        }
      }
    }
  ]
}
```
