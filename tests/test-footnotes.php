<?php

class WP_Test_Footnotes extends WP_UnitTestCase {

	/**
	 * Make sure plugin is activated
	 */
	function test_activated() {
		$this->assertTrue( class_exists( 'swas_wp_footnotes' ), 'swas_wp_footnotes class not defined' );
	}
	
}