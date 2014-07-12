<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" >
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{titlu}}</title>

	<link rel="stylesheet" href="/css/app.css">
	{% block stylesheets %}{% endblock %}

	<script src="/js/modernizr.js"></script>
</head>
<body>

{% block continut %}{% endblock %}

<script src="/js/jquery.js"></script>
<script src="/js/foundation.min.js"></script>
{% block javascripts %}{% endblock %}
</body>
</html>