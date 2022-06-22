<?php

/**
 * presentation module
 * output incrementing numbers
 *
 * Part of »Zugzwang Project«
 * https://www.zugzwang.org/modules/presentation
 *
 * @author Gustaf Mossakowski <gustaf@koenige.org>
 * @copyright Copyright © 2020-2022 Gustaf Mossakowski
 * @license http://opensource.org/licenses/lgpl-3.0.html LGPL-3.0
 */


/**
 * display numbers incrementing
 *
 * @param array $params title + no
 * @return array
 */
function mod_presentation_numbers($params) {
	if (!$params) {
		$page['text'] = ' ';
		return $page;
	}
	
	while ($params) {
		$title = array_shift($params);
		$value = array_shift($params);
		if (!$value) break;
		$data[] = [
			'title' => $title,
			'value' => $value
		];
	}
	$data['count'] = count($data);
	$page['text'] = wrap_template('numbers', $data);
	return $page;
}
