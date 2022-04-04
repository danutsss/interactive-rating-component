var ratingLevel = document.querySelectorAll('.rating-level');

ratingLevel.forEach(function(rating, index) {
    (function(i) {
        ratingLevel[i].addEventListener("click", function() {
            this.classList.contains("selected") ? this.classList.remove("selected") : this.classList.add("selected");
        
            var dataRating = this.getAttribute('data-rating');
        
            for(var i = 0; i < dataRating - 1; i ++) {
                document.querySelectorAll('.rating-level')[i].classList.remove('selected');
            }
        });
    }(index))
});

var submitRating = document.getElementById('submit');

submitRating.onclick = function sendRating() {
    var ratingLevels = document.getElementById('rating-levels');
    var checkRating = ratingLevels.querySelectorAll('.selected');

    if(!checkRating.length) {
        var alertText = document.querySelector('.alert-text');
        alertText.textContent = "Please rate us.";
    } else {
        document.getElementById("thank-you").removeAttribute("hidden");
        document.getElementById("rating").setAttribute("hidden", "hidden");

        var selectedRating = document.querySelector('.rating-level.selected').getAttribute('data-rating');
        var selectedRatingText = document.querySelector('.selected-rating-text');

        selectedRatingText.textContent = 'You selected ' + selectedRating + ' out of 5.';
    }
}