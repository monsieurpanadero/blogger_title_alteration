$(document).ready(function () {
	titles = $('.post-title.entry-title a');
	for (t = 0; t < titles.length; t++) {
		thisTitle = titles.eq(t);
		title = $(thisTitle).html().replace('- ', '<br/><em>');
		newTitle = title + '</em>';
		$(thisTitle).html(newTitle);
	}
	
	popular = $('.popular-posts li a');
	for (p = 0; p < popular.length; p++) {
		console.log('Looking for popular posts');
		thisTitle = popular.eq(p);
		title = $(thisTitle).html().replace('- ', '<br/><em>');
		newTitle = title + '</em>';
		$(thisTitle).html(newTitle);
	}

});
