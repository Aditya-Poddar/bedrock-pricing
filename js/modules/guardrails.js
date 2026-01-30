// Guardrails Calculator Module
import { copyResults } from '../utils/clipboard.js';

export const GuardrailsCalculator = {
    init() {
        // No special initialization needed
    },
    
    calculate() {
        let inputTokens = parseInt(document.getElementById("inputTokens").value);
        let outputTokens = parseInt(document.getElementById("outputTokens").value);
        let requests = parseInt(document.getElementById("requests").value);
        
        // Validation
        let hasError = false;
        const inputTokensEl = document.getElementById("inputTokens");
        const outputTokensEl = document.getElementById("outputTokens");
        const requestsEl = document.getElementById("requests");

        if (isNaN(inputTokens) || inputTokens < 1) {
            inputTokensEl.classList.add('error');
            inputTokensEl.nextElementSibling.textContent = "Please enter a positive integer";
            hasError = true;
        } else {
            inputTokensEl.classList.remove('error');
            inputTokensEl.nextElementSibling.textContent = "";
        }

        if (isNaN(outputTokens) || outputTokens < 1) {
            outputTokensEl.classList.add('error');
            outputTokensEl.nextElementSibling.textContent = "Please enter a positive integer";
            hasError = true;
        } else {
            outputTokensEl.classList.remove('error');
            outputTokensEl.nextElementSibling.textContent = "";
        }

        if (isNaN(requests) || requests < 1) {
            requestsEl.classList.add('error');
            requestsEl.nextElementSibling.textContent = "Please enter a positive integer";
            hasError = true;
        } else {
            requestsEl.classList.remove('error');
            requestsEl.nextElementSibling.textContent = "";
        }

        if (hasError) return;

        let inputCharacters = inputTokens * 3.5;
        let outputCharacters = outputTokens * 3.5;

        let inputUnits = Math.ceil(inputCharacters / 1000);
        let outputUnits = Math.ceil(outputCharacters / 1000);
        let totalUnitsPerRequest = inputUnits + outputUnits;
        let totalUnits = totalUnitsPerRequest * requests;

        let contentFilterCost = (totalUnits * 0.15) / 1000;
        let deniedTopicsCost = (totalUnits * 0.15) / 1000;
        let contextualGroundingCost = (totalUnits * 0.1) / 1000;
        let piiFilterCost = (totalUnits * 0.1) / 1000;
        let totalCost = contentFilterCost + deniedTopicsCost + contextualGroundingCost + piiFilterCost;

        document.getElementById("guardrails-results").innerHTML = `
            <button class="copy-button" onclick="window.copyResults('guardrails-results')" title="Copy results">
                <i class="fas fa-copy"></i>
            </button>
            <div class="copy-success">Copied!</div>
            <div class="result-item">
                <span>Content Filter Cost : </span>
                <span>${contentFilterCost.toFixed(4)} USD</span>
            </div>
            <div class="result-item">
                <span>Denied Topics Cost : </span>
                <span>${deniedTopicsCost.toFixed(4)} USD</span>
            </div>
            <div class="result-item">
                <span>Contextual Grounding Cost : </span>
                <span>${contextualGroundingCost.toFixed(4)} USD</span>
            </div>
            <div class="result-item">
                <span>PII Filter Cost : </span>
                <span>${piiFilterCost.toFixed(4)} USD</span>
            </div>
            <div class="result-item">
                <span>Regex Filter Cost : </span>
                <span>Free</span>
            </div>
            <div class="result-item">
                <span>Word Filter Cost : </span>
                <span>Free</span>
            </div>
            <div class="result-item">
                <span>Total Cost : </span>
                <span>${totalCost.toFixed(4)} USD</span>
            </div>
        `;

        document.getElementById("guardrails-detailed-breakdown").innerHTML = `
            <button class="copy-button" onclick="window.copyResults('guardrails-detailed-breakdown')" title="Copy details">
                <i class="fas fa-copy"></i>
            </button>
            <div class="copy-success">Copied!</div>
            <div class="detailed-step">
                <h3>Token to Character Conversion</h3>
                <p>Input: ${inputTokens} tokens × 3.5 = ${inputCharacters.toFixed(4)} characters</p>
                <p>Output: ${outputTokens} tokens × 3.5 = ${outputCharacters.toFixed(4)} characters</p>
            </div>

            <div class="detailed-step">
                <h3>Units Calculation</h3>
                <p>Input Units: ${inputCharacters.toFixed(4)} ÷ 1000 = ${inputUnits} units</p>
                <p>Output Units: ${outputCharacters.toFixed(4)} ÷ 1000 = ${outputUnits} units</p>
                <p>Total Units per Month: ${totalUnitsPerRequest} units × ${requests} requests = ${totalUnits} units</p>
            </div>

            <div class="detailed-step">
                <h3>Cost Breakdown</h3>
                <p>Content Filter: ${totalUnits} × $0.15/1000 = ${contentFilterCost.toFixed(4)} USD</p>
                <p>Denied Topics: ${totalUnits} × $0.15/1000 = ${deniedTopicsCost.toFixed(4)} USD</p>
                <p>Contextual Grounding: ${totalUnits} × $0.10/1000 = ${contextualGroundingCost.toFixed(4)} USD</p>
                <p>PII Filter: ${totalUnits} × $0.10/1000 = ${piiFilterCost.toFixed(4)} USD</p>
            </div>
        `;

        document.getElementById("guardrails-detailed-breakdown").style.display = "block";
    },
    
    reset() {
        document.getElementById("inputTokens").value = "";
        document.getElementById("outputTokens").value = "";
        document.getElementById("requests").value = "";
        
        // Remove error classes and messages
        ["inputTokens", "outputTokens", "requests"].forEach(id => {
            const el = document.getElementById(id);
            el.classList.remove('error');
            el.nextElementSibling.textContent = "";
        });

        document.getElementById("guardrails-results").innerHTML = "";
        document.getElementById("guardrails-detailed-breakdown").innerHTML = "";
        document.getElementById("guardrails-detailed-breakdown").style.display = "none";
    }
};
