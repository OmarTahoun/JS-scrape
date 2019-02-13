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
    {
      "title": "Integrating angular app in spring application, JSP page",
      "description": "I am trying to integrate Angular app in existing spring application. Below is the code used for integration <div id=\"lanetable\" style=\"display: block;\"> <link ..."
    },
    {
      "title": "Max screen width",
      "description": "I'm trying to limit the end of the screen so that the sprite (base) when it reaches the end of the screen does not exceed. @Override public void create () { rectangleBase = new Rectangle(); ..."
    },
    {
      "title": "Add search to Accordion list for SharePoint",
      "description": "While being new to JavaScript, i was able to get a Query lo a list and convert it into accordions. However how can I have a search like this one work with the accordions? this is the code i'm using ..."
    },
    {
      "title": "How to install PySide2 in a Python3 virtual environment on Raspberry Pi3",
      "description": "I am having a hard tima installing PySide2 in a Python3 virtual enviroment on a Raspberry Pi3. I use Python-3.5.3 and the updated version of pip. (cv3) pi@raspberrypi:~ $ which cmake /usr/bin/cmake (..."
    },
    {
      "title": "Receiving a list of related models from the list of objects (bound by a foreign key). Django",
      "description": "I have two very simple classes for products and photos. I would like to present products on the main page of my store along with photos related to a foreign key. But I do not know how to do this, I ..."
    },
    {
      "title": "Java caching SSL failures - can I flush these somehow",
      "description": "I'm trying to test my SSL implementation in unit tests and have one scenario I can't quite understand. When I connect to a host once and fail, every following connection will fail also, even if it ..."
    },
    {
      "title": "Does In-Memory realm have the copy of disk persisted realm data in swift?",
      "description": "Just trying to understand, when we try to access an object using an in-memory realm instance does it replicate the disk persisted realm data at that moment or will it be a clean realm instance with no ..."
    },
    {
      "title": "choropleth map of malayasia with range slider JS",
      "description": "I tried with highcharts. But there is no option to have a range slider to change map color. I need to have a map of malaysia with states color changing according to slider. D3 js have only US states ..."
    },
    {
      "title": "How to fix “Fail to Read from Rest Source” error in REST connection to AzureDevops from Azure Data Factory V2?",
      "description": "I'm trying to connect to Azure Devops with a REST \"resource\" in Azure Data Factory V2. I've tried many different request URL provided by the documentation https://docs.microsoft.com/en-us/rest/api/..."
    },
    {
      "title": "How to append span to select control?",
      "description": "In my jQuery v3.3.1 / Bootstrap v4.1.2 application I need after select input and \"entries\" text create/update (if it exists ) some label with text. I have select blocK: <div class=\"..."
    },
    {
      "title": "Convert categorical data into dummy set",
      "description": "I'm having data like this:- |--------|---------| | Col1 | Col2 | |--------|---------| | X | a,b,c | |--------|---------| | Y | a,b | |--------|---------| | X | b,d | |---..."
    },
    {
      "title": "i'm creating port scanner with thread and semaphore but, does not work",
      "description": "import argparse import socket import threading screenLock = threading.Semaphore(1) def connScan(ip): for port in range(1, 65535): try: s = socket() s.connect((ip, ..."
    },
    {
      "title": "Cache shows old updated pictures in my VUE JS Application",
      "description": "I have a problem that had me really ansious. I have a vue application where I have users profile, users timeline etc... To make the short history, the problem is that: In my user profile I have 4 ..."
    },
    {
      "title": "Detection of Screen Recording and Screenshot : React Native",
      "description": "I have an application which plays videos, and I don't want users to use the screen recording, mirror screen recording and capture screenshot on both iOS and Android. Can anybody please guide me to ..."
    },
    {
      "title": "ActiveMQ SSL - Reload truststore with out restart broker",
      "description": "Im using activeMQ as my messages server. In order to keep it secure between the server and the clients (producer/consumer), I added to the activemq.xml a ssl context section that tells the activemq ..."
    },
    {
      "title": "Why not read all lines from text file?",
      "description": "In my Kotlin project in folder src/resources/ I has file pairs_ids.txt. This is a property file: key=value The count of all lines are 1389. Here code that read content of this file line by line. ..."
    },
    {
      "title": "How to show real time result while using terminal command in a swift script",
      "description": "I am using Xcode Project Renamer to rename my Xcode project, after that I used the code below to install pod file. It's working good but the terminal showing result after pod installed. I want to ..."
    },
    {
      "title": "Windows application anchored in the taskbar",
      "description": "How do I create an windows application (preferably in C#) that gets anchored in the taskbar next to the system tray (similar to the Lenovo notebook battery application)? I'm trying to display my ..."
    },
    {
      "title": "Set multiple email ids while creating ActionGroup in Azure Alerts",
      "description": "I want to set multiple email ids in \"Email Azure Resource Manager Role\" while setting Monitoring Alerts through Azure Portal. I am not sure how to configure multiple user using above action. Could you ..."
    },
    {
      "title": "Delete array element and shift the rest of it to the left",
      "description": "What I'm trying to achieve is delete array element by its index and shift the rest of it to the left. So, deleteshifting, say, 2-nd element of array ['a','b','c','d'] returns array ['a','c','d']. I'..."
    },
    {
      "title": "my edit form is not submitted with using value attribute value from database is bind properly",
      "description": "<code> <div class=\"emplEdit\" id=\"edit\"> <div class=\"emplEdCont\"> <div class=\"edtHeeading\"> <h3>Edit Employee Details </h3> </div&..."
    },
    {
      "title": "How to store a dictionary in settings",
      "description": "I'm trying to write a general purpose object that can be stored in an app.config or web.config file. Following the example in this answer, I've written a dictionary, with some changes: I used the ..."
    },
    {
      "title": "Python code: Arrays: Left Rotation | Cracking the coding interview Hacker Rank - (Terminated due to time out)",
      "description": "EXPLANATION: A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the ..."
    },
    {
      "title": "Add-on Revenue Chrome Web Store",
      "description": "In the Chrome Developer dashboard, there is an option to activate in-app purchases for add-ons (Google sheet add-ons, for example). Does this feature work? What happens if one activates it and it is ..."
    },
    {
      "title": "I am trying to push values from an object inside an array",
      "description": "I am trying to push data coming from an array of objects (key/value), then pushing it inside an array, to display them later. I have already tried doing the push inside the array but till now it is ..."
    },
    {
      "title": "What does this syntax mean (…)",
      "description": "I'm putting my hands into reason-react. In the following code : let component = ReasonReact.statelessComponent(\"Component3\"); let make = (~name, _children) => { ...component, render: self =&..."
    },
    {
      "title": "Should 2 different tables share the same like/vote table",
      "description": "I'm in a situation where I'm in a bit of doubt of whenever I should give a shared 'like' table or split it up into two different tables. The application will show both videos/images in a 'wall' like ..."
    },
    {
      "title": "Derive a new column based on the first two column values [duplicate]",
      "description": "I have a pandas data frame as shown below, I would like to derive transform my data frame as shown here. Logic: For the same id, if a country gets repeated then I would like flag it with the count. ..."
    },
    {
      "title": "2D char array (Storing text with the spacebar in an one char array element?)",
      "description": "Acc. to this post, the most used method to store text in a 2D array is by using %s approach. But, this approach has a downfall, i.e. whenever you press spacebar, the text which is typed after goes ..."
    },
    {
      "title": "R: Change all date format in dataframe",
      "description": "I am very new to R programming and kind of stuck in this: I have a dataframe and I want check if there any value in any of the rows/columns which is in date format, should be stripped off to only time ..."
    },
    {
      "title": "How may I send an image into a e-mail body using SwiftMailer?",
      "description": "I'm trying to send an image in an email body using SwiftMailer. I use SwiftMailer in order to send email for changing password, etc. I tried to use cid method or also embed method using the ..."
    },
    {
      "title": "Table is geting distorted when freezing columns in datatables",
      "description": "I am using a Jquery datatable. The data for teh table is dynamically shown. I want to freeze the first 2 columns in the datatable. But the table is getting distorted when I add the code to freeze ..."
    },
    {
      "title": "why im not able to redirect the given url from my Webapi",
      "description": "public HttpResponseMessage Get() { var response = Request.CreateResponse(HttpStatusCode.Moved); response.Headers.Location = new Uri(\"www.google.com\"); ..."
    },
    {
      "title": "Notifications when Sharepoint data updated for android app",
      "description": "Im having a Sharepoint 2013 already developed and published on server. also developed an android application synchronized with this Sharepoint using Sharepoint API, What still the problem that i need ..."
    },
    {
      "title": "Match/group html elements by their data attributes values",
      "description": "In the html I have multiple elements that are grouped by data attributes, but this attributes don't have necessary the same parent: Example: <span data-toggle-trigger=\"1\">Resources</span>..."
    },
    {
      "title": "How do I get All the mesages from the SQS queue",
      "description": "I am using SQS to read the data. But I am not sure how to read all the data from the queue. public List<Customer> getMessage() { int numberOfMessages= getMessageCount(); System.out.println(..."
    },
    {
      "title": "How to make 2 deletes in sequence",
      "description": "Im using Spring boot and I have 2 deletes in with JPARepository and one of then depend of the second. I need execute the second request logBairroRepository.deleteByLocalidade(ids); after the first ..."
    },
    {
      "title": "Pepper: People ID",
      "description": "I want to learn face, track it and delete from the database. So I send a string, lets say 'temp' to the Learn Face block and after success I send the same 'temp' string to the peopleID of the People ..."
    },
    {
      "title": "Highcharts draw grid lines into yAxis area",
      "description": "In Highcharts, there is a possibility to shift the y-Axis labels into the chart area with yAxis: { labels: { align: 'left', x: 0, y: -2 } } With this setting, the ..."
    },
    {
      "title": "How to improve performance on multiple identical video tags that play simultaneously",
      "description": "I'm working on a little project where i'm using webms with alpha as textures for flip-cards (using backface-visibility: hidden and css animations) This is the code i'm using once i need the ..."
    },
    {
      "title": "How can I call a method from the controller into thymeleaf without changing the URL",
      "description": "I have a html page with Thymeleaf and i have a button in that page. That button it is calling a method from the controller that i have mapped with /addService but it return the /index page(Because I'm ..."
    },
    {
      "title": "Making use of the users table, causing an error",
      "description": "In Django (2.x) I have an entry form, the model is here: from django.db import models from django.contrib.auth.models import User from django.conf import settings class Sample(models.Model): ..."
    },
    {
      "title": "Evaluation order of lists in foldl",
      "description": "I tried to write an implementation in Haskell of (!!!) using foldl: (!!!) :: [a] -> Int -> a (!!!) l i | i < length l = fst (foldl (\\ x y -> if (snd y == i) then y else x) ..."
    },
    {
      "title": "Split a string with empty data",
      "description": "I'm working on an App for my company on Java (Android platform) and encountered an issue that I can't resolve. Here's the thing: by reading a text file I fill the content string with the following: ..."
    },
    {
      "title": "Tutorial for arrays in c#?",
      "description": "So I am jumping in for a teacher next week and my job is to teach them about arrays in c#. They know variables, int, string, double and how to output data. I tried to build this so it would be ..."
    }
  ]
}

```
