<?php

class WP_Test_Footnotes extends WP_UnitTestCase {

	/**
	 * Make sure plugin is activated
	 */
	function test_activated() {
		$this->assertTrue( class_exists( 'swas_wp_footnotes' ), 'swas_wp_footnotes class not defined' );
	}
	
	function test_post_filter_added() {
		$this->assertEquals( 11, has_filter('the_content', array($swas_wp_footnotes, 'process')) );
	}
	
}