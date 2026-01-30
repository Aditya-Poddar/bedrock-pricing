// Text Model Calculator Module
import { pricingData } from '../config/pricing-data.js';
import { validateIntegerInput } from '../utils/validation.js';
import { updateResults } from '../utils/helpers.js';
import { copyResults } from '../utils/clipboard.js';

export const TextModelCalculator = {
    init() {
        this.initializeDropdowns();
        this.attachEventListeners();
    },
    
    initializeDropdowns() {
        const regionSelect = document.getElementById('regionSelect');
        regionSelect.innerHTML = '<option value="">Select Region</option>';
        Object.keys(pricingData.Regions).forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });
    },
    
    updateProviders() {
        const regionSelect = document.getElementById('regionSelect');
        const providerSelect = document.getElementById('providerSelect');
        const modelSelect = document.getElementById('modelSelect');
        
        providerSelect.innerHTML = '<option value="">Select Provider</option>';
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        
        if (regionSelect.value) {
            const providers = Object.keys(pricingData.Regions[regionSelect.value].Providers);
            providers.forEach(provider => {
                const option = document.createElement('option');
                option.value = provider;
                option.textContent = provider;
                providerSelect.appendChild(option);
            });
            providerSelect.disabled = false;
            modelSelect.disabled = true;
        } else {
            providerSelect.disabled = true;
            modelSelect.disabled = true;
        }
    },
    
    updateModels() {
        const regionSelect = document.getElementById('regionSelect');
        const providerSelect = document.getElementById('providerSelect');
        const modelSelect = document.getElementById('modelSelect');
        
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        
        if (providerSelect.value) {
            const models = Object.keys(pricingData.Regions[regionSelect.value]
                .Providers[providerSelect.value].Models);
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
            modelSelect.disabled = false;
        } else {
            modelSelect.disabled = true;
        }
    },
    
    updatePricing() {
        const regionSelect = document.getElementById('regionSelect');
        const providerSelect = document.getElementById('providerSelect');
        const modelSelect = document.getElementById('modelSelect');

        if (modelSelect.value) {
            const modelPricing = pricingData.Regions[regionSelect.value]
                .Providers[providerSelect.value]
                .Models[modelSelect.value];

            document.getElementById('inputTokenPrice').value = 
                parseFloat(modelPricing["Cost per 1000 input tokens"].replace('$', ''));
            document.getElementById('outputTokenPrice').value = 
                parseFloat(modelPricing["Cost per 1000 output tokens"].replace('$', ''));
        }
    },
    
    calculate() {
        // Validate all inputs first
        const inputs = ['textInputTokens', 'textOutputTokens', 'requestsPerMonth'];
        let hasError = false;
        
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (!validateIntegerInput(input)) {
                hasError = true;
            }
        });

        // Check if model is selected
        const modelSelect = document.getElementById('modelSelect');
        if (!modelSelect.value) {
            modelSelect.classList.add('error');
            hasError = true;
        } else {
            modelSelect.classList.remove('error');
        }
        
        if (hasError) return;
        
        // Get values
        const inputTokens = parseInt(document.getElementById('textInputTokens').value);
        const outputTokens = parseInt(document.getElementById('textOutputTokens').value);
        const requestsPerMonth = parseInt(document.getElementById('requestsPerMonth').value);
        const inputTokenPrice = parseFloat(document.getElementById('inputTokenPrice').value);
        const outputTokenPrice = parseFloat(document.getElementById('outputTokenPrice').value);
        
        // Calculate costs
        const totalInputCost = (inputTokenPrice / 1000) * inputTokens * requestsPerMonth;
        const totalOutputCost = (outputTokenPrice / 1000) * outputTokens * requestsPerMonth;
        const totalCost = totalInputCost + totalOutputCost;

        const selectedModel = document.getElementById('modelSelect').value;
        
        // Update results with copy button
        updateResults('text-model-result', `
            <button class="copy-button" onclick="window.copyResults('text-model-result')" title="Copy results">
                <i class="fas fa-copy"></i>
            </button>
            <div class="copy-success">Copied!</div>
            <div class="result-item">
                <span>Selected Model : </span>
                <span>${selectedModel}</span>
            </div>
            <div class="result-item">
                <span>Monthly Input Token Cost : </span>
                <span>${totalInputCost.toFixed(4)} USD</span>
            </div>
            <div class="result-item">
                <span>Monthly Output Token Cost : </span>
                <span>${totalOutputCost.toFixed(4)} USD</span>
            </div>
            <div class="result-item">
                <span>Total Monthly Cost : </span>
                <span>${totalCost.toFixed(4)} USD</span>
            </div>
        `);

        // Update detailed breakdown with copy button
        updateResults('text-model-result-details', `
            <button class="copy-button" onclick="window.copyResults('text-model-result-details')" title="Copy details">
                <i class="fas fa-copy"></i>
            </button>
            <div class="copy-success">Copied!</div>
            <div class="detailed-step">
                <h3>Model Details</h3>
                <p>Model: ${selectedModel}</p>
                <p>Input Price: ${inputTokenPrice}/1000 tokens</p>
                <p>Output Price: ${outputTokenPrice}/1000 tokens</p>
            </div>
            <div class="detailed-step">
                <h3>Token Calculations</h3>
                <p>Input: ${inputTokens} tokens × ${requestsPerMonth} requests = ${inputTokens * requestsPerMonth} tokens</p>
                <p>Output: ${outputTokens} tokens × ${requestsPerMonth} requests = ${outputTokens * requestsPerMonth} tokens</p>
            </div>
            <div class="detailed-step">
                <h3>Cost Breakdown</h3>
                <p>Input Cost: (${inputTokenPrice}/1000) × ${inputTokens * requestsPerMonth} = ${totalInputCost.toFixed(4)} USD</p>
                <p>Output Cost: (${outputTokenPrice}/1000) × ${outputTokens * requestsPerMonth} = ${totalOutputCost.toFixed(4)} USD</p>
                <p>Total: ${totalInputCost.toFixed(4)} + ${totalOutputCost.toFixed(4)} = ${totalCost.toFixed(4)} USD</p>
            </div>
        `);
    },
    
    reset() {
        document.getElementById('regionSelect').selectedIndex = 0;
        document.getElementById('providerSelect').innerHTML = '<option value="">Select Provider</option>';
        document.getElementById('providerSelect').disabled = true;
        document.getElementById('modelSelect').innerHTML = '<option value="">Select Model</option>';
        document.getElementById('modelSelect').disabled = true;
        
        ['textInputTokens', 'textOutputTokens', 'requestsPerMonth'].forEach(id => {
            const el = document.getElementById(id);
            el.value = '';
            el.classList.remove('error');
            document.getElementById(id + 'Error').textContent = "";
        });
        
        document.getElementById('text-model-result').innerHTML = '';
        document.getElementById('text-model-result-details').innerHTML = '';
    },
    
    attachEventListeners() {
        document.getElementById('regionSelect').addEventListener('change', () => this.updateProviders());
        document.getElementById('providerSelect').addEventListener('change', () => this.updateModels());
        document.getElementById('modelSelect').addEventListener('change', () => this.updatePricing());
        
        // Attach validation listeners
        ['textInputTokens', 'textOutputTokens', 'requestsPerMonth'].forEach(id => {
            const input = document.getElementById(id);
            input.addEventListener('input', () => validateIntegerInput(input));
            input.addEventListener('keypress', (e) => {
                return e.charCode >= 48 && e.charCode <= 57;
            });
        });
    }
};
