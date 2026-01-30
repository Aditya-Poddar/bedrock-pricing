// Clipboard Copy Functionality

export function copyResults(elementId) {
    const element = document.getElementById(elementId);
    let formattedContent = '';
    
    // Remove copy button and success message from the content
    const contentToCopy = element.cloneNode(true);
    const copyButton = contentToCopy.querySelector('.copy-button');
    const successMessage = contentToCopy.querySelector('.copy-success');
    if (copyButton) copyButton.remove();
    if (successMessage) successMessage.remove();
    
    if (elementId.includes('result')) {
        // Format for results
        const items = contentToCopy.querySelectorAll('.result-item');
        items.forEach(item => {
            const spans = item.querySelectorAll('span');
            if (spans.length === 2) {
                formattedContent += `${spans[0].textContent.trim()}: ${spans[1].textContent.trim()}\n`;
            }
        });
    } else if (elementId.includes('detailed-breakdown') || elementId.includes('result-details')) {
        // Format for detailed breakdown
        const steps = contentToCopy.querySelectorAll('.detailed-step');
        steps.forEach(step => {
            const title = step.querySelector('h3');
            if (title) {
                formattedContent += `${title.textContent.trim()}\n`;
            }
            const paragraphs = step.querySelectorAll('p');
            paragraphs.forEach(p => {
                formattedContent += `${p.textContent.trim()}\n`;
            });
            formattedContent += '\n';
        });
    }
    
    // Copy the formatted content
    navigator.clipboard.writeText(formattedContent).then(() => {
        const successMessage = element.querySelector('.copy-success');
        successMessage.classList.add('show');
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
