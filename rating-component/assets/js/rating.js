const rating_level = document.querySelectorAll('.rating-level');

rating_level.forEach(function(item, index) {
    (function(i) {
        rating_level[i].addEventListener("click", function() {
            if(this.classList.contains("selected")) {
                this.classList.remove("selected");
            } else {
                this.classList.add("selected");
            }
        
            var count = this.getAttribute('data-rating');
        
            for(var i = 0; i < count - 1; i ++) {
                document.querySelectorAll('.rating-level')[i].classList.remove('selected');
            }
        });
    }(index))
});

const submit_rating = document.getElementById('submit');

submit_rating.onclick = function sendRating() {
    const rating_levels = document.getElementById('rating-levels');
    const check_rating = rating_levels.querySelectorAll('.selected');

    if(!check_rating.length) {
        var alert_text = document.querySelector('.alert-text');
        alert_text.textContent = "Please rate us.";
    } else {
        document.getElementById("thank-you").removeAttribute("hidden");
        document.getElementById("rating").setAttribute("hidden", "hidden");

        var selectedRating = document.querySelector('.rating-level.selected').getAttribute('data-rating');
        var selectedRatingText = document.querySelector('.selected-rating-text');

        selectedRatingText.textContent = 'You selected ' + selectedRating + ' out of 5.';
    }
}