
const reviewButtons = document.querySelectorAll(".review-btn");
const reviewFormCard = document.getElementById("reviewFormCard");
const reviewForm = document.getElementById("reviewForm");
const selectedDoctor = document.getElementById("selectedDoctor");
const reviewMessage = document.getElementById("reviewMessage");
const cancelReview = document.getElementById("cancelReview");

let currentRow = null;

// Open review form
reviewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentRow = button.closest("tr");

        const doctorName = button.dataset.doctor;

        selectedDoctor.textContent = doctorName;
        reviewFormCard.hidden = false;
        reviewMessage.textContent = "";

        reviewForm.reset();

        reviewFormCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});

// Submit review
reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!currentRow) return;

    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("reviewText").value.trim();

    if (!rating || !reviewText) {
        reviewMessage.textContent = "Please complete all review fields.";
        return;
    }

    const statusCell = currentRow.querySelector(".review-status");

    // Display rating and review in the table
    statusCell.textContent = `${"★".repeat(Number(rating))} - ${reviewText}`;

    reviewMessage.textContent = "Thank you! Your review has been submitted.";

    // Hide form after a short delay
    reviewForm.reset();
    reviewFormCard.hidden = true;
    currentRow = null;
});

// Cancel review
cancelReview.addEventListener("click", function () {
    reviewForm.reset();
    reviewFormCard.hidden = true;
    reviewMessage.textContent = "";
    currentRow = null;
});
