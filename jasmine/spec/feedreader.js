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

    /****************   TEST FOR CURRENT FEATURES   *******************/

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
            expect( $('body').hasClass('menu-hidden')).toBeTruthy();
        });


        // Declare needed variables
        var menuHiddenBefore,
            menuHiddenAfter;

        // Confirm that menu state changes on click
        it('toggles visibility when menu icon is clicked', function() {

            // Check if menu is hidden before click
            menuHiddenBefore = $('body').hasClass('menu-hidden');

            // Trigger a menu click and re-check menu hidden status
            $('.menu-icon-link').trigger( "click" );
            menuHiddenAfter = $('body').hasClass('menu-hidden');

            // Check expectation
            expect(menuHiddenBefore).not.toEqual(menuHiddenAfter);

            // Reset 'menuHiddenBefore' before click
            menuHiddenBefore = $('body').hasClass('menu-hidden');

            // Trigger a menu click and re-check menu hidden status
            $('.menu-icon-link').trigger( "click" );
            menuHiddenAfter = $('body').hasClass('menu-hidden');

            // Check expectation
            expect(menuHiddenBefore).not.toEqual(menuHiddenAfter);

        });


    });

    // Confirm that at least one entry is loaded in the .feed container
    describe('Initial Entries', function() {

        // Use 'done' to ensure that the feed is loaded before the test is run
        beforeEach(function(done) {

            // Empty feed before loading
            $('.feed').empty();

            // Use 'done" as callback parameter to let Jasmine know we're async
            loadFeed(0, done);
        });

        it('should include at least one entry element', function() {

            // Get the length of the feed HTML to conirm that it is not empty
            expect($('.feed').html().length).toBeGreaterThan(0);

        });

        // Confirm that the first entry element is not empty
        describe('First Entry Element', function() {

            it('should have a defined non-empty entry heading and url', function() {

                // Get the heading of first entry and confirm it is not empty
                expect($('.entry h2').first().text()).toBeTruthy();

                // Get the url of first entry and confirm it is not empty
                expect($('.entry-link').first().attr('href')).toBeTruthy();

            });
        });
    });

    // Confirm that content changes when a new feed loads
    describe('New Feed Selection', function() {

        // Declare needed variables
        var titleBefore,
            titleAfter,
            htmlBefore,
            htmlAfter;

        // Use 'done' to ensure that the feed is loaded before the test is run
        beforeEach(function(done) {

            // Empty feed before loading
            $('.feed').empty();

            // Load feed and get title and feed html
            loadFeed( 0, function() {
                titleBefore = $('.header-title').text();
                htmlBefore = $('.feed').html();
                done();
            });
        });

        // Check for feed title and content change
        it('should change feed title and content', function(done) {
            loadFeed(1, function() {

                // Check title and feed html after load
                titleAfter = $('.header-title').text();
                htmlAfter = $('.feed').html();

                // Confirm taht both have changed
                expect(titleAfter).not.toEqual(titleBefore);
                expect(htmlAfter).not.toEqual(htmlBefore);
                done();
            });
        });

         // Re-load the default content
        afterAll(function(done) {
            loadFeed(0, done);
        });

    });

    /****************   TEST FOR FUTURE FEATURES   *******************/

    // Confirm that clicks are incremented when a feed entry is cl
    describe('Click Counts', function() {

        // Use 'done' to ensure that the feed is loaded before the test is run
        beforeEach(function(done) {

            // Use 'done" as callback parameter to let Jasmine know we're async
            loadFeed(0, done);
        });

        it('should updated when a feed item is clicked', function(done) {

            // Check the click count of the feed before the click
            var clickCountBefore = allFeeds[0].clickCount;


            // Trigger a click and recheck click count
             $('.entry-link').trigger( "click" );
            var clickCountAfter = allFeeds[0].clickCount;

            // Confirm that the clickCount increments
            expect(clickCountAfter).toBe(clickCountBefore + 1);

            // Call 'done()' to let Jasmine know were going async
            done();
        });


    });

}());