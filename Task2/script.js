const form = document.getElementById('workshopForm');
const list = document.getElementById('workshopList');
const searchInput = document.getElementById('searchInput');

// Load workshops from localStorage
let workshops = JSON.parse(localStorage.getItem('workshops')) || [];
renderWorkshops();

// Add or Update Workshop
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newWorkshop = {
        id: Date.now(),
        name: document.getElementById('name').value,
        trainer: document.getElementById('trainer').value,
        date: document.getElementById('date').value,
        location: document.getElementById('location').value,
        seats: document.getElementById('seats').value
    };

    workshops.push(newWorkshop);
    localStorage.setItem('workshops', JSON.stringify(workshops));
    renderWorkshops();
    form.reset();
});

// Render all workshops
function renderWorkshops(filter = '') {
    list.innerHTML = '';

    // Filter workshops if search is used
    const filtered = workshops.filter(w =>
        w.name.toLowerCase().includes(filter) ||
        w.trainer.toLowerCase().includes(filter)
    );

    filtered.forEach(w => {
        const li = document.createElement('li');

        const status = new Date(w.date) >= new Date() ? 'Upcoming' : 'Completed';
        const statusClass = status === 'Upcoming' ? 'status-upcoming' : 'status-past';

        li.innerHTML = `
            <div class="workshop-info">
                <strong>${w.name}</strong> by ${w.trainer} on ${w.date} at ${w.location} | Seats: ${w.seats} 
                <span class="${statusClass}">[${status}]</span>
            </div>
            <div class="workshop-actions">
                <button class="edit-btn" onclick="editWorkshop(${w.id})"><i class="fa fa-edit"></i> Edit</button>
                <button class="delete-btn" onclick="deleteWorkshop(${w.id})"><i class="fa fa-trash"></i> Delete</button>
            </div>
        `;
        list.appendChild(li);
    });
}

// Delete workshop
function deleteWorkshop(id) {
    workshops = workshops.filter(w => w.id !== id);
    localStorage.setItem('workshops', JSON.stringify(workshops));
    renderWorkshops(searchInput.value.toLowerCase());
}

// Edit workshop
function editWorkshop(id) {
    const w = workshops.find(work => work.id === id);
    document.getElementById('name').value = w.name;
    document.getElementById('trainer').value = w.trainer;
    document.getElementById('date').value = w.date;
    document.getElementById('location').value = w.location;
    document.getElementById('seats').value = w.seats;

    deleteWorkshop(id);
}

// Search functionality
searchInput.addEventListener('input', () => {
    renderWorkshops(searchInput.value.toLowerCase());
});


