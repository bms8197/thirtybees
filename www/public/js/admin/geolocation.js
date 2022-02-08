/**
 * Copyright (C) 2019 thirty bees
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@thirtybees.com so we can send you a copy immediately.
 *
 * @author    thirty bees <modules@thirtybees.com>
 * @copyright 2019 thirty bees
 * @license   Academic Free License (AFL 3.0)
 */

function updateForm() {
  var service = $('#PS_GEOLOCATION_SERVICE').val();
  if (service) {
    $('#configuration_fieldset_geolocationCountries').show();
    $('#configuration_fieldset_geolocationWhitelist').show();
    $('#configuration_fieldset_geolocationConfiguration .alert').hide();
  } else {
    $('#configuration_fieldset_geolocationCountries').hide();
    $('#configuration_fieldset_geolocationWhitelist').hide();
    $('#configuration_fieldset_geolocationConfiguration .alert').show();
  }
}


$(function() {
  $('#PS_GEOLOCATION_SERVICE').on('change', updateForm);
  updateForm();
});
