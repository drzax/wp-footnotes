<?php

class FootnotesTest extends WP_UnitTestCase {

	function testSample() {
		// replace this with some actual testing code
		$this->assertTrue( true );
	}
	
	function testAdminStylesRegistered() {
		$this->assertTrue( wp_style_is( 'wp-footnotes-admin-styles', 'registered' ) );
	}
	
	function testAdminScriptsRegistered() {
		$this->assertTrue( wp_script_is( 'wp-footnotes-admin', 'registered' ) );
	}
}