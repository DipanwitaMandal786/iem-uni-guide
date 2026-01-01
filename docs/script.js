// Modal setup
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Content for each modal
const featureModals = {
    map: '<h3>Interactive Campus Map</h3><p>Explore IEM campus. (Demo map placeholder)</p><button onclick="alert(\'Map opened!\')">View Map</button>',
    canteen: '<h3>Canteen Fast Pass</h3><p>Subscribe to skip lines.</p><input type="text" placeholder="Student ID"><button onclick="alert(\'Subscribed!\')">Subscribe (₹500/mo)</button>',
    doubts: '<h3>Doubt Sessions</h3><p>Book with a teacher.</p><select><option>Prof. Smith - 2 PM</option><option>Prof. Jones - 4 PM</option></select><button onclick="alert(\'Booked!\')">Book</button>',
    events: '<h3>Events & Hackathons</h3><p>Upcoming: Hackathon 2026.</p><button onclick="alert(\'Registered!\')">Register (₹200)</button>',
    forums: '<h3>Community Forums</h3><p>Join discussions.</p><button onclick="alert(\'Joined!\')">Enter Forum</button>',
    ai: '<h3>AI Assistant</h3><p>Ask away!</p><input type="text" placeholder="e.g., Library location?"><button onclick="alert(\'AI: Library in Block A.\')">Ask</button>'
};

// Click handlers
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.dataset.modal;
        modalBody.innerHTML = featureModals[type];
        modalOverlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => modalOverlay.style.display = 'none');
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.style.display = 'none'; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modalOverlay.style.display = 'none'; });
// Make cards keyboard-friendly
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();  // Triggers the modal
        }
    });
});