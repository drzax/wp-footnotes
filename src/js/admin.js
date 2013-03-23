/*!
 * This file is part of WP-Footnotes a plugin for WordPress
 * Copyright (C) 2007-2013 Simon Elvery
 */

/* 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
;(function($, undefined){
	
	var exampleContainer;

	/**
	 * Update the example text
	 */
	function updateIdentifierExample() {
		var example = '<strong>Example:</strong> A sentence with a footnote',
			listStyle = $('#list_style_type').val(),
			symbol;

		if (listStyle === 'decimal') symbol = '4';
		if (listStyle === 'decimal-leading-zero') symbol = '04';
		if (listStyle === 'lower-alpha') symbol = 'd';
		if (listStyle === 'upper-alpha') symbol = 'D';
		if (listStyle === 'lower-roman') symbol = 'iv';
		if (listStyle === 'upper-roman') symbol = 'IV';
		if (listStyle === 'symbol') symbol = $('#list_style_symbol').val();

		exampleContainer = exampleContainer || $('<div id="wp-footnotes-identifier-example">').appendTo('#wp-footnotes-identifier-options');
		if ($('#superscript').is(':checked')) example += '<sup>';
		example += $('#pre_identifier').val() + '<a href="javascript:;">';
		example += $('#inner_pre_identifier').val();
		example += symbol;
		example += $('#inner_post_identifier').val() + '</a>';
		example += $('#post_identifier').val();
		if ($('#superscript').is(':checked')) example += '</sup>';
		exampleContainer.html(example + '.');
	}
	
	// Wait for the DOM
	$(function() {

		// Show extra options for style 'symbol'
		$('#list_style_type').change(function() {
			if ($(this).val() === 'symbol') {
				$('#list_style_symbol_container').slideDown();
			} else {
				$('#list_style_symbol_container').slideUp();
			}
		}).change();

		// Listen for updates which should change the example
		$('#pre_identifier,#inner_pre_identifier,#inner_post_identifier,#post_identifier,#list_style_symbol')
			.on('keyup', updateIdentifierExample);
		$('#list_style_type').on('change', updateIdentifierExample);
		$('#superscript').on('click change', updateIdentifierExample);
		updateIdentifierExample(); // Create the example.

		$('.toggle-section').click(function(){
			var $this = $(this);
			$($this.attr('href')).slideToggle();
			$this.text(($this.text()==='show')?'hide':'show');
			return false;
		});
	});
}(jQuery));
