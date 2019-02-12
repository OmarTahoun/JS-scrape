# JS-scrape
Scraping example with JavaScript

### Learning how to scrape HTML using JS i am following [this](https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31)


## Data format needed
- company
  - name
  - description
  - url
  - contact
    - telephone
    - employee
        - name
        - jobTitle
        - email

## Selectors wanted for the scraper
- company: .List.items .item
  - name:  .header [itemprop = name]
  - description: .header [rel="description"]
  - url: .header [itemprop = name] a
  - contact: .contact
    - telephone: [itemprop=telephone]
    - employee
        - name: [itemprop=employeeName]
        - jobTitle: [itemprop = employeeJobTitle]
        - email: [itemprop=email]
