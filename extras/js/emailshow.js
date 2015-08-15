$(document).ready(function(){
        $('.buttontest').click(function () {
        $(this).parent().find('img.logotest').toggle('slow');
    	});
});
