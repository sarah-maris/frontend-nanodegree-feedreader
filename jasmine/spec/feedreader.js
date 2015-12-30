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

            // Check if menu is hidden
            function checkHidden() {
               return $('body').hasClass('menu-hidden');
            }

            var menuIcon = $('.menu-icon-link');
            var menuHiddenBefore = checkHidden();

            // Watch for menuIcon clicks
            var spyEvent = spyOn(menuIcon, 'click');

            // Trigger a menu click and rechick menu hidden status
            menuIcon.trigger( "click" );
            menuHiddenAfter = checkHidden();

            expect(menuHiddenBefore).not.toEqual(menuHiddenAfter);

        });

    });

    // Confirm that at least one entry is loaded in the .feed container
    describe('Initial Entries', function() {

        // Use 'done' to ensure that the feed is loaded before the test is run
        beforeEach(function(done) {

            // Use 'done" as callback parameter to let Jasmine know we're
            // going  async
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

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('should and change', function() {

         });
    });

}());


