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
	$(dateHeader).addClass('date_container');
	dateHeader = $('.date_container');
	dateShort = dateHeader.html().replace(' ', '');
	console.log(dateShort);
	dateShorter = dateShort.replace(' ', '');
	console.log(dateShorter);
	dateLength = dateShorter.length;
	console.log(dateLength);
	year = dateShorter.slice((dateLength - 5), dateLength);
	console.log(year);
  	month = dateShorter.slice((dateLength - 8), (dateLength - 5));
	console.log(month);
 	date = dateShorter.slice(0, (dateLength - 8));
  	newDate = ('0' + date).slice(-2);
	console.log(newDate);
  	$(dateHeader).html('');
  	$(dateHeader).append('<span class="date"></span>');
 	$(dateHeader).append('<span class="month"></span>');
  	$(dateHeader).append('<span class="year"></span>');
  	$('.date').append(newDate);
 	$('.month').append(month);
  	$('.year').append(year);
});
