const searchForm = document.getElementById("doctorSearchForm");
const specialityInput = document.getElementById("speciality");
const doctorCards = document.querySelectorAll(".doctor-card");
const doctorCount = document.getElementById("doctorCount");
const noResults = document.getElementById("noResults");
const bookingMessage = document.getElementById("bookingMessage");

function searchDoctors() {
    const searchTerm = specialityInput.value.trim().toLowerCase();
    let visibleDoctors = 0;

    doctorCards.forEach(function (card) {
        const speciality = card.dataset.speciality.toLowerCase();
        const doctorName = card.querySelector("h3").textContent.toLowerCase();

        const matches =
            speciality.includes(searchTerm) ||
            doctorName.includes(searchTerm);

        card.hidden = !matches;

        if (matches) {
            visibleDoctors++;
        }
    });

    doctorCount.textContent =
        `${visibleDoctors} ${visibleDoctors === 1 ? "doctor" : "doctors"} available`;

    noResults.hidden = visibleDoctors !== 0;
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchDoctors();
    bookingMessage.textContent = "";
});

specialityInput.addEventListener("input", function () {
    searchDoctors();
    bookingMessage.textContent = "";
});

// Demo booking interaction
document.querySelectorAll(".book-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const doctorName = button.dataset.doctor;

        bookingMessage.textContent =
            `Demo only: ${doctorName} is a fictional profile. No appointment was booked or saved.`;
    });
});