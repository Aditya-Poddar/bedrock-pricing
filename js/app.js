// Main Application Entry Point
import { TextModelCalculator } from './modules/text-model.js';
import { EmbeddingCalculator } from './modules/embedding.js';
import { GuardrailsCalculator } from './modules/guardrails.js';
import { TokenTester } from './modules/token-tester.js';
import { initializeTheme, toggleTheme } from './utils/theme.js';
import { switchTab, clearResults } from './utils/helpers.js';
import { validateIntegerInput, validateInput } from './utils/validation.js';
import { copyResults } from './utils/clipboard.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initializeTheme();
    
    // Initialize all calculators
    TextModelCalculator.init();
    EmbeddingCalculator.init();
    GuardrailsCalculator.init();
    TokenTester.init();
    
    // Clear results only on initial page load
    clearResults();
});

// Export ALL functions for global access (for onclick handlers)
window.switchTab = switchTab;
window.toggleTheme = toggleTheme;
window.validateIntegerInput = validateIntegerInput;
window.validateInput = validateInput;
window.copyResults = copyResults;

// Export calculator functions (already exported in their modules, but ensure they're available)
window.updateProviders = () => TextModelCalculator.updateProviders();
window.updateModels = () => TextModelCalculator.updateModels();
window.updatePricing = () => TextModelCalculator.updatePricing();
window.calculateTextModelCost = () => TextModelCalculator.calculate();
window.resetTextModelCalculator = () => TextModelCalculator.reset();

window.calculateEmbeddingCost = () => EmbeddingCalculator.calculate();
window.resetEmbeddingCalculator = () => EmbeddingCalculator.reset();

window.calculateGuardrailsCost = () => GuardrailsCalculator.calculate();
window.resetGuardrailsCalculator = () => GuardrailsCalculator.reset();

window.callTokenAPI = () => TokenTester.callAPI();
window.resetTokenTester = () => TokenTester.reset();
