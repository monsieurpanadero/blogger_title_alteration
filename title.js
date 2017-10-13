$(document).ready(function () {
	titleLink = $('.post-title.entry-title').children('a')
	titleHasLink = titleLink.length;
	if (titleHasLink > 0) {
		titles = $('.post-title.entry-title a');
		for (t = 0; t < titles.length; t++) {
			thisTitle = titles.eq(t);
			title = $(thisTitle).html().replace('- ', '<br/><em>');
			newTitle = title + '</em>';
			$(thisTitle).html(newTitle);
		}
	} else {
		titles = $('.post-title.entry-title');
		for (t = 0; t < titles.length; t++) {
			thisTitle = titles.eq(t);
			title = $(thisTitle).html().replace('- ', '<br/><em>');
			newTitle = title + '</em>';
			$(thisTitle).html(newTitle);
		}
	}
	
	popular = $('.popular-posts li a');
	for (p = 0; p < popular.length; p++) {
		thisTitle = popular.eq(p);
		title = $(thisTitle).html().replace('- ', '<br/><em>');
		newTitle = title + '</em>';
		$(thisTitle).html(newTitle);
	}
	
	dateHeader = $('.date-header span');
	newDate = $(dateHeader).html().replace(' ', '<br/>');
	$(dateHeader).html(newDate);
});
