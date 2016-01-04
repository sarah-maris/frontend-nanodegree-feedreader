# Project Overview

The purpose of this project is to finish the Jasmine testing suite for a web-based application that reads RSS feeds.

## How to Run the App
1. Load index.html in your favorite browser.
2. Tests will take about 5 seconds to complete.  You will experience several page refreshes as the code runs.
3. When the test completes, scroll down to the bottom of the page to see the results.

## Required Tests (All tests pass)
1. Confirm that the allFeeds variable is defined and not empty
2. Loop through feeds and confirm that each feed url and name are defined and not empty
3. Confirm that menu is hidden by default
4. Confirm that the menu changes visibility when clicked (appears on first click, hides on second click)
5. Confirm that initial entries are loaded
6. Confirm that the content changes when a new feed is loaded

## Additional Test of Existing Features (Test passes)
Confirm that the first entry element contains entry text and a non-empty url

## Tests for Future Feature (Test fails)
Feed click counts:
* Assumptions:
  * New property "clickCount" will be added to allFeeds objects
  * Click function will be added to entries to increment clicks on that feed

* Test function: confirms that "clickCount" property is incremented as expected


## Resources Used:
[Jasmine JavaScript Testing Framework](http://jasmine.github.io/)