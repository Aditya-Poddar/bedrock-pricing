// Embedding Calculator Module
import { updateResults } from '../utils/helpers.js';
import { validateInput } from '../utils/validation.js';
import { copyResults } from '../utils/clipboard.js';

export const EmbeddingCalculator = {
    init() {
        this.attachEventListeners();
    },
    
    calculate() {
        const embedType = document.getElementById('embedType').value;
        const modelType = document.getElementById('modelType').value;
        const embedInputValue = parseFloat(document.getElementById('embedInputValue').value);

        let embedTokenPrice;
        let modelName;

        // Set embedTokenPrice and modelName based on modelType
        if (modelType === "amzonEv1") {
            embedTokenPrice = 0.0001;
            modelName = "Amazon Titan Text Embedding v1";
        } else if (modelType === "amzonEv2") {
            embedTokenPrice = 0.000024;
            modelName = "Amazon Titan Text Embedding v2";
        } else if (modelType === "CoherePlain") {
            embedTokenPrice = 0.0001;
            modelName = "Cohere Embed English";
        } else if (modelType === "CohereMultiLingual") {
            embedTokenPrice = 0.0001;
            modelName = "Cohere Embed Multilingual";
        }

        let totalEmbedCost;
        let totalTokens;

        if (embedType === 'gb') {
            totalTokens = embedInputValue * 161000000;
            totalEmbedCost = (embedTokenPrice / 1000) * totalTokens;
        } else if (embedType === 'millionTokens') {
            totalTokens = embedInputValue * 1000000;
            totalEmbedCost = (embedTokenPrice / 1000) * totalTokens;
        } else if (embedType === 'tokens') {
            totalTokens = embedInputValue;
            totalEmbedCost = (embedTokenPrice / 1000) * totalTokens;
        }

        document.getElementById('embedding-result').innerHTML = `
            <button class="copy-button" onclick="window.copyResults('embedding-result')" title="Copy results">
                <i class="fas fa-copy"></i>
            </button>
            <div class="copy-success">Copied!</div>
            <div class="result-item">
                <span>Selected Model : </span>
                <span>${modelName}</span>
            </div>
            <div class="result-item">
                <span>Total Monthly Embedding Cost : </span>
                <span>${totalEmbedCost.toFixed(4)} USD</span>
            </div>
        `;

        document.getElementById('embedding-result-details').innerHTML = `
            <button class="copy-button" onclick="window.copyResults('embedding-result-details')" title="Copy details">
                <i class="fas fa-copy"></i>
            </button>
            <div class="copy-success">Copied!</div>
            <div class="detailed-step">
                <h3>Model Details</h3>
                <p>Model: ${modelName}</p>
                <p>Price: ${embedTokenPrice}/1000 tokens</p>
            </div>
            <div class="detailed-step">
                <h3>Input Details</h3>
                <p>Type: ${embedType === 'gb' ? 'Data Size' : embedType === 'millionTokens' ? 'Million Tokens' : 'Tokens'}</p>
                <p>Value: ${embedInputValue} ${embedType === 'gb' ? 'GB' : embedType === 'millionTokens' ? 'Million' : ''}</p>
            </div>
            <div class="detailed-step">
                <h3>Token Calculation</h3>
                <p>${embedType === 'gb' ? `Converting GB to Tokens: ${embedInputValue} GB × 161,000,000 tokens/GB = ${totalTokens.toLocaleString()} tokens` :
                  embedType === 'millionTokens' ? `Converting Million Tokens to Tokens: ${embedInputValue} million × 1,000,000 = ${totalTokens.toLocaleString()} tokens` :
                  `Total Tokens: ${totalTokens.toLocaleString()}`}</p>
            </div>
            <div class="detailed-step">
                <h3>Cost Calculation</h3>
                <p>Token Price: ${embedTokenPrice} per 1000 tokens</p>
                <p>Total Cost: (${embedTokenPrice} / 1000) × ${totalTokens.toLocaleString()} tokens = ${totalEmbedCost.toFixed(4)} USD</p>
            </div>
        `;
    },
    
    reset() {
        document.getElementById('modelType').selectedIndex = 0;
        document.getElementById('embedType').selectedIndex = 0;
        document.getElementById('embedInputValue').value = '';
        document.getElementById('embedding-result').innerHTML = '';
        document.getElementById('embedding-result-details').innerHTML = '';
    },
    
    attachEventListeners() {
        const embedInputValue = document.getElementById('embedInputValue');
        embedInputValue.addEventListener('input', () => validateInput(embedInputValue));
    }
};
