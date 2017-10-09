$(document).on('load', function () {
	title = $('.post-title.entry-title a').html().replace('- ', '<br/><em>');
	newTitle = title + '</em>';
	console.log(newTitle);
	$('.post-title.entry-title a').html(newTitle);
});
