// General Helper Functions

export function updateResults(containerId, content) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = content;
        // Ensure smooth scrolling to the results
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export function clearResults() {
    const resultElements = [
        'text-model-result',
        'text-model-result-details',
        'embedding-result',
        'embedding-result-details',
        'guardrails-results',
        'guardrails-detailed-breakdown'
    ];
    
    resultElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = '';
        }
    });
}

export function switchTab(tabName) {
    // Remove active class from all tabs and tab buttons
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to selected tab and tab button
    document.getElementById(tabName + '-tab').classList.add('active');
    document.querySelector(`.tab-button[onclick="switchTab('${tabName}')"]`).classList.add('active');
}
