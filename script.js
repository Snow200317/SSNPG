
// Handling the question submission (for demo purposes)
document.getElementById('questionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var questionText = document.getElementById('question').value;

  // Append the new question to the list (this would usually be done server-side)
  var questionList = document.getElementById('questionList');

  var newQuestion = document.createElement('div');
  newQuestion.classList.add('question');
  newQuestion.innerHTML = `
    <p><strong>Q:</strong> ${questionText}</p>
    <div class="answers"></div>
    <form class="answer-form">
      <div class="form-group">
        <textarea rows="3" placeholder="Your answer..." required></textarea>
      </div>
      <button type="submit" class="btn">Submit Answer</button>
    </form>
  `;
  
  questionList.appendChild(newQuestion);

  // Clear the question input
  document.getElementById('question').value = '';
});

// Handle the answer submission (for demo purposes)
document.getElementById('questionList').addEventListener('submit', function(event) {
  if (event.target.classList.contains('answer-form')) {
    event.preventDefault();
    var answerText = event.target.querySelector('textarea').value;

    // Find the answers container for the corresponding question
    var answersContainer = event.target.parentElement.querySelector('.answers');
    var newAnswer = document.createElement('p');
    newAnswer.innerHTML = `<strong>A:</strong> ${answerText}`;
    answersContainer.appendChild(newAnswer);

    // Clear the answer input
    event.target.querySelector('textarea').value = '';
  }
});
//  REview section js
const reviews = [
  {
    text: "L'Hive PG provides an exceptional living experience with clean rooms and great amenities.",
    author: "Reshma",
  },
  {
    text: "The staff is very friendly, and the rooms are always clean and comfortable.",
    author: "Divya",
  },
  {
    text: "I love the gym and the food options they provide. Highly recommended!",
    author: "Shine",
  },
];

let currentReviewIndex = 0;

function updateReview() {
  const reviewText = document.getElementById("review-text");
  const reviewAuthor = document.getElementById("review-author");

  const currentReview = reviews[currentReviewIndex];
  reviewText.textContent = `"${currentReview.text}"`;
  reviewAuthor.textContent = `- ${currentReview.author}`;

  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
}

setInterval(updateReview, 5000); // Change review every 5 seconds


// Room section
  document.addEventListener("DOMContentLoaded", () => {
    const rooms = document.querySelectorAll(".room-list .room");
    const totalRooms = rooms.length;
    const visibleCount = 3; // Number of rooms to show at once
    let currentIndex = 0;

    function updateRooms() {
      // Hide all rooms initially
      rooms.forEach((room) => room.classList.add("hidden"));

      // Show the next set of rooms
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % totalRooms;
        rooms[index].classList.remove("hidden");
      }

      // Update the starting index
      currentIndex = (currentIndex + visibleCount) % totalRooms;
    }

    // Initial call to show the first set of rooms
    updateRooms();

    // Cycle through rooms every 5 seconds
    setInterval(updateRooms, 5000);
  });
// Hero section
document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const backgroundImages = [
    "https://www.shutterstock.com/image-photo/beautiful-girls-sitting-bar-hostel-260nw-532651405.jpg", // First image URL
    "https://media.istockphoto.com/id/1414767683/photo/happy-girls-friends-siblings-using-laptop-computer-watching-online-tv-show-video-sitting-on.jpg?s=612x612&w=0&k=20&c=xdmfp0_ZVCqTYZHy0WOeeIOqwPZ5qUDGvOVDH3bRis4=", // Second image URL
    "https://media.istockphoto.com/id/1133785106/photo/close-up-portrait-amazing-beautiful-she-her-diversity-ladies-family-sisters-roommates.jpg?s=612x612&w=0&k=20&c=4rvfq3b8rYUtfOGHkt8zcu6xOqhc7myzczwJdqcuYLU=" // Third image URL
  ];
  let currentImageIndex = 0;

  function changeBackground() {
    // Update the background image
    heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;

    // Move to the next image, looping back to the first
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  }

  // Initialize with the first image
  changeBackground();

  // Change the background every 5 seconds
  setInterval(changeBackground, 5000);
});
