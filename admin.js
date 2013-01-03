/*
 * This file is part of WP-Footnotes a plugin for WordPress
 * Copyright (C) 2007-2013 Simon Elvery
 * 
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
jQuery(document).ready(function() {
	jQuery('#list_style_type').change(function() {
		if (jQuery(this).val() === 'symbol') {
			jQuery('#list_style_symbol_container').slideDown();
		} else {
			jQuery('#list_style_symbol_container').slideUp();
		}
	}).change();
	
	jQuery('.toggle-section').click(function(){
		var $this = jQuery(this);
		jQuery($this.attr('href')).slideToggle();
		$this.text(($this.text()==='show')?'hide':'show');
		return false;
	});
});