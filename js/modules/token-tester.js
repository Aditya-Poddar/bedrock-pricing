// Token API Tester Module
import { API_CONFIG } from '../config/api-config.js';

export const TokenTester = {
    init() {
        // No special initialization needed
    },
    
    async callAPI() {
        const input = document.getElementById("tokenTextInput").value.trim();
        const summaryBox = document.getElementById("token-summary");
        const breakdownBox = document.getElementById("token-breakdown");
        const errorElement = document.getElementById("tokenTextInputError");

        if (!input) {
            errorElement.textContent = "Please enter some text";
            document.getElementById("tokenTextInput").classList.add('error');
            summaryBox.innerHTML = '<p style="color: var(--error-color); padding: 1rem;">❌ Please enter some text</p>';
            breakdownBox.innerHTML = '';
            return;
        }

        errorElement.textContent = "";
        document.getElementById("tokenTextInput").classList.remove('error');
        summaryBox.innerHTML = '<p style="padding: 1rem;">⏳ Loading...</p>';
        breakdownBox.innerHTML = '<p style="padding: 1rem;">⏳ Loading...</p>';

        try {
            const res = await fetch(API_CONFIG.TOKEN_API_BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: input
                })
            });

            const data = await res.json();
            
            // Display summary
            summaryBox.innerHTML = `
                <div class="result-item">
                    <span><i class="fas fa-hashtag"></i> Total Tokens:</span>
                    <span style="font-weight: 600; color: var(--primary-color);">${data.token_count || 0}</span>
                </div>
                <div class="result-item">
                    <span><i class="fas fa-font"></i> Characters:</span>
                    <span style="font-weight: 600;">${input.length}</span>
                </div>
                <div class="result-item">
                    <span><i class="fas fa-divide"></i> Avg Chars/Token:</span>
                    <span style="font-weight: 600;">${(input.length / (data.token_count || 1)).toFixed(2)}</span>
                </div>
            `;

            // Display token breakdown
            if (data.tokens && data.tokens.length > 0) {
                let tokenHTML = '<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.5rem;">';
                data.tokens.forEach((token, index) => {
                    const isSubword = token.startsWith('##');
                    const displayToken = token.replace('##', '');
                    tokenHTML += `
                        <div style="
                            background: ${isSubword ? 'var(--secondary-color)' : 'var(--primary-color)'};
                            color: white;
                            padding: 0.375rem 0.75rem;
                            border-radius: 0.375rem;
                            font-size: var(--font-size-sm);
                            font-family: 'Courier New', monospace;
                            display: inline-flex;
                            align-items: center;
                            gap: 0.25rem;
                        ">
                            <span style="opacity: 0.7; font-size: 0.7rem;">${index + 1}</span>
                            <span style="font-weight: 600;">${displayToken}</span>
                            ${isSubword ? '<i class="fas fa-link" style="font-size: 0.6rem; opacity: 0.7;" title="Subword token"></i>' : ''}
                        </div>
                    `;
                });
                tokenHTML += '</div>';
                
                tokenHTML += `
                    <div style="margin-top: 1rem; padding: 0.75rem; background: var(--background-color); border-radius: 0.375rem; border: 1px solid var(--border-color);">
                        <p style="font-size: var(--font-size-sm); margin: 0; color: var(--text-color); opacity: 0.8;">
                            <i class="fas fa-info-circle"></i> 
                            <strong>Note:</strong> Tokens with <span style="color: var(--secondary-color);">green background</span> are subword tokens (marked with ##).
                        </p>
                    </div>
                `;
                
                breakdownBox.innerHTML = tokenHTML;
            } else {
                breakdownBox.innerHTML = '<p style="padding: 1rem; color: var(--error-color);">No tokens found</p>';
            }

        } catch (err) {
            summaryBox.innerHTML = `<p style="color: var(--error-color); padding: 1rem;">❌ Error: ${err.message}</p>`;
            breakdownBox.innerHTML = `<p style="color: var(--error-color); padding: 1rem;">Failed to fetch token data</p>`;
        }
    },
    
    reset() {
        document.getElementById("tokenTextInput").value = "";
        document.getElementById("tokenTextInputError").textContent = "";
        document.getElementById("tokenTextInput").classList.remove('error');
        document.getElementById("token-summary").innerHTML = '';
        document.getElementById("token-breakdown").innerHTML = '';
    }
};
