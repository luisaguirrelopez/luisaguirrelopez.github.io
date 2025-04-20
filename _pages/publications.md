---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

<div class="publications">

<!-- <h1>preprints</h1>

{% bibliography -f preprints %} -->

<h1>journal articles</h1>

{% bibliography -f {{ site.scholar.bibliography }} %}

<h1>books</h1>

{% bibliography -f books %}

<h1>scientific dissemination</h1>

{% bibliography -f  dissemination %}

<h1>conferences</h1>

{% bibliography -f conferences %}


<h1>collabs</h1>

{% bibliography -f collabs %}

</div>

