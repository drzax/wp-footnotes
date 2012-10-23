=== WP-Footnotes ===
Contributors: drzax
Tags: footnotes, post, posts, notes, reference, formatting, referencing, bibliography
Requires at least: 2.0
Tested up to: 3.4.2
Stable tag: 4.2.2

Allows post authors to easily add and manage footnotes in posts.

== Description ==

Easily add footnotes to any post using a simple mark-up which degrades (kind of) gracefully in the event that for 
some horrifying reason this plugin no longer works.

== Installation ==

WordPress should take care of this for you if you install it via the admin area, but if you want to do it manually, go ahead with the instructions below.

1. Upload the `wp-footnotes` folder and all it's contents to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. You're good to go!

== Frequently Asked Questions ==

= How do I use this plugin? =

That's totally simple. Go and check out [the manual](http://elvery.net/drzax/wordpress-footnotes-plugin).

= Can I make a suggestion for a new feature? =

Sure can! Feature requests (and bug reports) are best made via <a href="http://plugins.trac.wordpress.org/newticket?component=wp-footnotes&owner=drzax">the WordPress Plugins bug tracker</a>.

If you fancy being even more helpful, you can write some code and submit a pull request.

= Why aren't there more FAQs? =

Because answers to pretty much all the questions that get asked frequently are in [the manual](http://elvery.net/drzax/wordpress-footnotes-plugin).

= Licence? =

This plugin is licensed under [the same license as WordPress](http://wordpress.org/about/license/) itself, the GPLv2 (or later).

== Change Log ==

= 4.2.1 =

- Update readme.txt and admin screen notes regarding [contribution](https://github.com/drzax/WP-Footnotes).
- Update licensing info.

= 4.2 = 

- Bug fix for compatibilty with PHP < 5.2 (Note, that WP will soon require this anyway).

= 4.1 = 

- Minor bug fixe. See ticket #1174
- Improvement on roman numerals processing. See ticket #1177 Thanks to Indi.in.the.Wired

= 4.0 =

- A well overdue update do cater for changes in WP3.0.
- Minor bug fixes and re-organisation.

= 3.3 =

- Bug fix: Not setting default options on install.

= 3.2 =

- Bug fix[49]: Made PHP 4.x compatible. Seems I've been living in the world of PHP 5 for so long I forgot there was an older *far* less OO world out there.
- Bug fix[#880]: Footnote before and after blocks will not display anylonger if there are no footnotes (i.e. back to how it was before). 

= 3.1 =

- Urgent bug fix release for 3.0.

= 3.0 =

- Major reorganisation to encapsulate the plugin in a class.
- Removal of 'smooth scroll feature'. I decided this was better put into a theme if you want it. Instructions here: http://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12
- Pretty up the options screen to look more WP2.5ish.
- Bug fix [37]: The notorious 'a' bug hopefully squashed forever. 
- Bug fix [47]: Removed all html tags from footnote before adding to title element.
- Bug fix [46]: Replaced all double quotes (") with it's entity reference to ensure title attribute isn't closed early.
- Feature [45]: Added ability to use symbols for footnotes and ability to change footnote style for individual posts.
- Feature [1]: Added decimal-leading-zero as a style option. 

= 2.2 =

- Bug fix: smooth scroll fixed (hopefully)

= 2.1 =

- Bug fix (already): updated variable name in admin page.

= 2.0 =

- Major updates to the way footnotes are extracted from text and generated.
- Added option for whether or not identical footnotes are combined.
- Added option to control the plugin's execution priority.
- Changed a bunch of variable names to make conflects less likely.
- Missing options now set at runtime when version is changed.
- Added ability to reset options to default with one click.
- Identifiers aren't links and backlinks don't exist when footnotes are displayed in feeds because most feed readers distroy intra-page links.
- Multiple line footnotes are now possible.

= 1.4 =

- Enhancement: Added ability to turn off display of footnotes on certain kinds of pages.

= 1.3.1 =

- Bug fix: Removed errant testing echo.

= 1.3 =

- Bug fix: Links within footnotes now possible.

= 1.2 =

- Bug fix: Stopped creation of footnote on posts without any. Bug was introduced in v1.1.

= 1.1 =

- Bug fix: Link title text now correctly displayed.
- Bug fix: Numbering issues when ref: style references used fixed.
- Major change to the way ref: style references are processed.

= 1.0.1 =

- Minor updates to imbeded documentation.

= 1.0 =

- Changed method of extracting footnotes to use regex (should be more robust).
- Support for different footnote numbering styles (decimal, lower-alpha, upper-alpha, lower-roman and upper-roman).
- Reconfiguration of options page.
- Added smooth-scroll feature.
- Added default (and configurable) CSS for footnotes list.
- Added options for adding text (or other markup) before and after the footnotes list.
- Added classes to all markup generated by the plugin for easy styling.
- Automatic legacy support.


= 0.9.1 =

- Fixed problems with display of back link text.
- Fixed problems with display of pre and post link text.

= 0.9 =

- Compatability with WordPress 2.0.x (includes legacy support).
- Change of mark up style.
- Additional options, including before and after link text.
- Basic support for paginated posts.

= 0.1 =

- The original seriously old-school release!