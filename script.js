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
function handleYesClick(button) {
    const questionText = document.getElementById('question1Text');
    const sequences = [
        "Oh..just like?",
        "Oh, so we're just friends then?",
        "Dang...",
        "Ouch :/",
        "This hurts...",
        "At this point make me your bhaiya"
    ];
    
    if (yesClickCount < sequences.length) {
        questionText.textContent = sequences[yesClickCount];
        yesClickCount++;
        
        // If we've shown all messages, move to next question
        if (yesClickCount === sequences.length) {
            setTimeout(() => {
                showNextQuestion(2);
            }, 2000);
        }
    }
}

// Modify the window.addEventListener('DOMContentLoaded') section
// Add or update these lines inside your existing DOMContentLoaded event listener
window.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing initialization code)

    // Update button click handlers
    document.getElementById('yesBtn1').onclick = function() {
    handleYesClick(this);
    };
    
    document.getElementById('noBtn1').onclick = function() {
        moveButton(this);
    };
});
