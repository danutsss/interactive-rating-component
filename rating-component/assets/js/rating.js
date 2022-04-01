$('.rating-level').on('click', (function() {
    $(this).addClass('selected');
    $(this).prevAll().addClass('selected');
    $(this).nextAll().removeClass('selected');
    var count = $(this).data('rating');
    for(var i = 0; i < count - 1; i ++) {
        $('.rating-level').eq(i).removeClass('selected');
    }
}));

if($('.submit').click(function() {
    var check_rating = $('.rating-levels').find('.selected').length;
    if(!check_rating) {
        $('.alert-text').text('Please rate us!');
    } else {
        document.getElementById("thank-you").removeAttribute("hidden");
        document.getElementById("rating").setAttribute("hidden", "hidden");

        var selectedRating = $('.rating-level.selected').data('rating');
        $('.selected-rating-text').text('You selected ' + selectedRating + ' out of 5.');
    }
}));