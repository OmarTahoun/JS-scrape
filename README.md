# JS-scrape
### Scraping with JavaScript
#### Scraping the questions on stackoverflow.



## Data format needed
- question
  - question title
  - description

## Selectors wanted for the scraper
- question: "#mainbar #questions .question-summary"
  - question-title: ".summary h3"
  - description: ".summary .excerpt"


## OUPUT
```JSON
{
  "Questions": [
    {
      "title": "Python pathlib : Convert WindowsPath to PosixPath",
      "description": "I am using pathlib to manage my path in my python project using Path class. When I am using Linux, everything work fine. But on Windows, I have a little issue. At some point in my code, I have to ..."
    },
    {
      "title": "dataset stuck in ckan which cannot be removed, cannot open (404)",
      "description": "I am removing all the datasets from CKAN and recreate them. However, there is one last dataset which I cannot delete. I am using the ckan API to do removal from python. I can search and get the ..."
    },
    {
      "title": "IPBoard Secondary Groups",
      "description": "I've been trying to discover how to assign Secondary Groups through my SSO System. Currently the only thing I currently got this: if ($ssoMember->division->code == \"ME\") { $member->..."
    },
    {
      "title": "Splitting text into sentences in android studio using java",
      "description": "How to split the speech which is converted to text into sentences in android studio using java.I already know that split() method can be used, but here when converting speech to text, there will be no ..."
    },
    {
      "title": "What ML techniques are there for discrete strategic decision problems?",
      "description": "My training in AI, machine learning, neural networks, etc, is a couple of decades out of date. The only ML techniques I know about apply to fairly simple, fixed-sized problems. I'm interested in ..."
    },
    {"More"}
  ]
}

```
