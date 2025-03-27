let currentLang = 'en';
let votes = {
    'Team A': 0,
    'Team B': 0,
    'Team C': 0,
    'Team D': 0,
    'Team E': 0
};

// Set the language
function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'hi') {
        document.getElementById('title').innerText = 'अपनी पसंदीदा टीम के लिए वोट करें';
        document.querySelectorAll('.team h3').forEach((team, index) => {
            team.innerText = 'टीम ' + String.fromCharCode(65 + index);
        });
        document.querySelectorAll('.team button').forEach((btn, index) => {
            btn.innerText = 'टीम ' + String.fromCharCode(65 + index) + ' के लिए वोट करें';
        });
    } else {
        document.getElementById('title').innerText = 'Vote for Your Favorite Team';
        document.querySelectorAll('.team h3').forEach((team, index) => {
            team.innerText = 'Team ' + String.fromCharCode(65 + index);
        });
        document.querySelectorAll('.team button').forEach((btn, index) => {
            btn.innerText = 'Vote for Team ' + String.fromCharCode(65 + index);
        });
    }
}

// Handle voting
function vote(teamName) {
    votes[teamName] += 1;  // Increment the vote count for the selected team
    let message = currentLang === 'en' ? 
        `${teamName} has been voted for!` : 
        `${teamName} के लिए वोट किया गया है!`;
    
    document.getElementById('voteMessage').innerText = message;
    console.log(votes);  // You can view the updated vote counts in the console
}

// Integrate Gemini AI for chat assistance (This is a placeholder for the Gemini API integration)
function startChat() {
    document.getElementById('chatbox').style.display = 'block';
    document.getElementById('chatbox').innerHTML = `
        <div>
            <h2>Chat Assistance</h2>
            <p>How can I help you with your vote?</p>
        </div>
    `;
}
