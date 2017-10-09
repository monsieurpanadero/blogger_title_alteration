$(document).ready(function () {
	console.log('Hey!');
	title = $('.post-title.entry-title a').html().replace('- ', '<br/><em>');
	newTitle = title + '</em>';
	$('.post-title.entry-title a').html(newTitle);
});
