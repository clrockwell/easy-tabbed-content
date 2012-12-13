/**
 * Easy Tabs
 * Very simple and easily added-to tabs
 *
 * @requires jQuery
 *  You can use Google CDN for this:
 *  https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
 */
$(document).ready(function() {
  // start on the first tab
  var starting_tab = 1;
  // For ease of use, starting_tab
  // takes a more easily understood value than 0
  // and just handles it
  hide_content(starting_tab - 1);
  // listen for mouse/keyboard
  // on the tabs
  $('.tab').each(function(index, el) {
    $(this).click(function(event) {
      hide_content(index);
      // stop link action
      return false;
    });
  });
})

  /**
	 * Hide all content except with_exception_of
	 * @param int with_exception_of
	 *   indicates which content block should be visible
	 * 	 Remember: lists, arrays, whatever start at 0, not 1
	 */
  function hide_content(with_exception_of)
	{
    // we have content blocks and the
    // corresponding tabs
    $content_blocks = $('.content-dynamic');
    $content_tabs = $('.tab');
    // first remove active-content from any
    $($content_blocks)
      .removeClass('active-content')
      .addClass('inactive-content');
    // secondly, use with_exception_of to show the correct one
    $($content_blocks[with_exception_of])
      .removeClass('inactive-content')
      .addClass('active-content');
    // remove the active state from all tabs
    $($content_tabs)
      .removeClass('active-tab');
    // add the active state to the active tab
    $($content_tabs[with_exception_of])
      .addClass('active-tab');
  }