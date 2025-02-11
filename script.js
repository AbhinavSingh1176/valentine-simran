// Add these variables at the top of your script.js file
let yesClickCount = 0;
const maxYesClicks = CONFIG.questions.first.yesSequence.length;

// Replace or modify the existing moveButton function
function moveButton(button) {
    // Only move the "No" button
    if (button.id.includes('no')) {
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = 'fixed';
        button.style.left = x + 'px';
        button.style.top = y + 'px';
    } else if (button.id.includes('yes')) {
        handleYesClick();
    }
}

// Add this new function to handle the "Yes" button clicks
function handleYesClick() {
    const questionText = document.getElementById('question1Text');
    
    if (yesClickCount < maxYesClicks) {
        // Update the question text to the next message in the sequence
        questionText.textContent = CONFIG.questions.first.yesSequence[yesClickCount];
        yesClickCount++;
        
        // If we've shown all messages, prepare to move to next question
        if (yesClickCount === maxYesClicks) {
            setTimeout(() => {
                showNextQuestion(2);
            }, 2000); // Wait 2 seconds before moving to next question
        }
    }
}

// Modify the window.addEventListener('DOMContentLoaded') section
// Add or update these lines inside your existing DOMContentLoaded event listener
window.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing initialization code)

    // Update button click handlers
    document.getElementById('yesBtn1').onclick = function() {
        handleYesClick();
    };
    
    document.getElementById('noBtn1').onclick = function() {
        moveButton(this);
    };
});
