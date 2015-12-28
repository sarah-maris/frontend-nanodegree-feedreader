/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    // Confirm that RSS feeds are defined in our application.
    describe('RSS Feeds', function() {

        //Confirm that the allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // Function to loop through feeds and confirm that feed url and name
         // are defined and not empty
         function feedsDefined(feed) {

            describe(feed.name, function() {

                //Check that url is defined and not empty
                it('has a non-empty URL', function(){
                    expect(feed.url).toBeTruthy();
                });

                //Check that name is defined and not empty
                it('has a non-empty name', function(){
                    expect(feed.name).toBeTruthy();
                });

            });
        }

        //Test to confirm that each feed is defined
        allFeeds.forEach(function (feed) {
            feedsDefined(feed);
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {

         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when the menu icon is clicked', function() {

          });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('includes at least one entry element', function() {

         });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('is loaded and content changes', function() {

         });
    });

}());
