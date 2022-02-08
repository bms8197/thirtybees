{**
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
 *}

{if isset($products) && $products}
  {include file="$tpl_dir./product-list.tpl" class='homefeatured tab-pane' id='homefeatured'}
{else}
  <ul id="homefeatured" class="homefeatured tab-pane">
    <li class="alert alert-info">{l s='No featured products at this time.' mod='homefeatured'}</li>
  </ul>
{/if}
