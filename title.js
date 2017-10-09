$(document).ready(function () {
	titles = $('.post-title.entry-title a');
	for (t = 0; t < titles.length; t++) {
		thisTitle = titles.eq(t);
		title = $(thisTitle).html().replace('- ', '<br/><em>');
		newTitle = title + '</em>';
		$(thisTitle).html(newTitle);
	}
});
