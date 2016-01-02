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
        it('should be defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // Test to loop through feeds and confirm that feed url and name
         // are defined and not empty
         function feedsDefined(feed) {

            describe(feed.name, function() {

                //Check that url is defined and not empty
                it('should have a non-empty URL', function(){
                    expect(feed.url).toBeTruthy();
                });

                //Check that name is defined and not empty
                it('should have a non-empty name', function(){
                    expect(feed.name).toBeTruthy();
                });

            });
        }

        // Call test to confirm that each feed is defined
        allFeeds.forEach(function (feed) {
            feedsDefined(feed);
        });
    });

    // Confirm that the menu works as expected
    describe('The Menu', function() {

        // Confirm that menu is hidden by default
        it('should be hidden by default', function() {
            expect( $('body').hasClass('menu-hidden')).toBe(true);
        });

        // Confirm that menu state changes on click
        it('should change visibility when the menu icon is clicked', function() {

            // Fundction to check if menu is hidden
            function checkHidden() {
               return $('body').hasClass('menu-hidden');
            }

            // Check if menu is hidden before click
            var menuHiddenBefore = checkHidden();

            // Trigger a menu click and rechick menu hidden status
            $('.menu-icon-link').trigger( "click" );
            menuHiddenAfter = checkHidden();

            expect(menuHiddenBefore).not.toEqual(menuHiddenAfter);

        });

    });

    // Confirm that at least one entry is loaded in the .feed container
    describe('Initial Entries', function() {

        // Use 'done' to ensure that the feed is loaded before the test is run
        beforeEach(function(done) {

            // Empty feed before loading
            $('.feed');

            // Use 'done" as callback parameter to let Jasmine know we're async
            loadFeed(0, done);
        });

        it('should include at least one entry element', function(done) {

            // Get the kength of the HTML in the div
            var feedLength  = $('.feed').html().length;

            // Confirm that the div is not emptry
            expect(feedLength).toBeGreaterThan(0);

            // Call 'done()' to let Jasmine know were going async
            done();
        });

    });

    // Confirm that content changes when a new feed loads
    describe('New Feed Selection', function() {

        // Declare needed variables
        var titleBefore,
            titleAfter,
            entryBefore,
            entryAfter;

        // Functions to get title and entry text from current feed
        function getFeedTitle() {
            return  $('.header-title').text();
        }

        function getFeedEntry() {
            return  $('.entry h2').first().text();
        }

        // Use 'done' to ensure that the feed is loaded before the test is run
        beforeEach(function(done) {

            // Empty feed before loading
            $('.feed').empty();

            // Load feed and get title and entry text
            loadFeed(0, function() {
                titleBefore = getFeedTitle();
                entryBefore = getFeedEntry();
                done();
            });
        });

        // Check for title change
        it('should change first entry title', function(done) {
            loadFeed(1, function() {
                titleAfter = getFeedTitle();
                expect(titleAfter).not.toEqual(titleBefore);
                done();
            });
        });

        // Check for entry text change
        it('should change first entry text', function(done) {
            loadFeed(1, function() {
                entryAfter = getFeedEntry();
                expect(entryAfter).not.toEqual(entryBefore);
                done();
            });
        });

    });




/*TODO:  Add other tests.
    * Entry has content snippet and url - get info from DOM
    * Click count (future feature) - similar to menu button click
    * Refresh button (future feature) - similar to check content when new feed
*/

}());


