{% extends 'base.swig' %}

{% block continut %}
<h1>Salut {{nume}}!</h1>
{% endblock %}

{% block javascripts %}
<script>
	$(document).foundation();
</script>
{% endblock %}