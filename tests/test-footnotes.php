<?php

class WP_Test_Footnotes extends WP_UnitTestCase {

	/**
	 * Make sure plugin is activated
	 */
	function test_activated() {
		$this->assertTrue( class_exists( 'swas_wp_footnotes' ), 'swas_wp_footnotes class not defined' );
	}
	
	function test_post_filter_added() {
		global $swas_wp_footnotes;
		$this->assertEquals( 11, has_filter('the_content', array($swas_wp_footnotes, 'process')) );
	}
	
	function test_admin_menu_added() {
		global $swas_wp_footnotes;
		$this->assertEquals( 10, has_action('admin_menu', array($swas_wp_footnotes, 'add_options_page')) );
	}
	
}