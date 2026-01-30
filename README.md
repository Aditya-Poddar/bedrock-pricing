# Amazon Bedrock Cost Calculator

A modern, professional web application for calculating costs associated with Amazon Bedrock services including text-based LLM models, embedding models, guardrails, and token calculations.

![Amazon Bedrock Cost Calculator](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🧮 Four Powerful Calculators

1. **Text Model Calculator**
   - Calculate costs for text-based LLM models
   - Support for multiple regions and providers
   - Input/output token pricing
   - Monthly request volume calculations

2. **Embedding Model Calculator**
   - Amazon Titan Text Embedding v1 & v2
   - Cohere Embed (English & Multilingual)
   - Flexible input types (GB, million tokens, or tokens)

3. **Guardrails Calculator**
   - Calculate Amazon Bedrock Guardrails costs
   - Input and output token pricing
   - Monthly request volume support

4. **Token Calculator**
   - Real-time text tokenization
   - Token count and breakdown
   - Visual token analysis

### 🎨 Modern UI Design

- **Gradient Backgrounds**: Beautiful gradient effects throughout the interface
- **Multi-Layered Shadows**: Enhanced depth perception with 5 shadow levels
- **Smooth Animations**: Fluid transitions and micro-interactions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Themes**: Seamless theme switching with animated transitions
- **Professional Typography**: Carefully crafted font hierarchy and spacing

### 🚀 Performance Optimized

- **GPU-Accelerated Animations**: Using CSS transforms and opacity
- **Reduced Motion Support**: Respects user accessibility preferences
- **Lightweight**: Pure vanilla JavaScript - no framework dependencies
- **Fast Loading**: Optimized CSS and minimal external dependencies

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, gradients, and animations
- **Vanilla JavaScript**: No frameworks or libraries required
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
amazon-bedrock-calculator/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties and theme definitions
│   ├── animations.css      # Keyframe animations and utility classes
│   ├── base.css           # Base styles and typography
│   ├── components.css     # Component-specific styles
│   └── responsive.css     # Responsive design breakpoints
├── js/
│   ├── app.js             # Main application logic
│   ├── config/
│   │   ├── api-config.js      # API configuration
│   │   └── pricing-data.js    # Pricing data
│   ├── modules/
│   │   ├── embedding.js       # Embedding calculator logic
│   │   ├── guardrails.js      # Guardrails calculator logic
│   │   ├── text-model.js      # Text model calculator logic
│   │   └── token-tester.js    # Token calculator logic
│   └── utils/
│       ├── clipboard.js       # Clipboard utilities
│       ├── helpers.js         # Helper functions
│       ├── theme.js           # Theme management
│       └── validation.js      # Input validation
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server or build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/amazon-bedrock-calculator.git
   cd amazon-bedrock-calculator
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Start calculating!**
   - Navigate to http://localhost:8000 (if using a server)
   - Or directly open the `index.html` file

## 💡 Usage

### Text Model Calculator

1. Select your AWS region
2. Choose a provider (Amazon, Anthropic, Cohere, etc.)
3. Select the specific model
4. Enter input tokens, output tokens, and requests per month
5. Click "Calculate Cost" to see detailed pricing breakdown

### Embedding Model Calculator

1. Select the embedding model
2. Choose input type (GB, million tokens, or tokens)
3. Enter the value
4. Click "Calculate Embedding Model Cost"

### Guardrails Calculator

1. Enter input tokens per request
2. Enter output tokens per request
3. Enter total requests per month
4. Click "Calculate Cost"

### Token Calculator

1. Enter or paste text in the text area
2. Click "Tokenize Text"
3. View token count and detailed breakdown

## 🎨 Customization

### Changing Colors

Edit `css/variables.css` to customize the color scheme:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... more variables */
}
```

### Modifying Animations

Adjust animation timings in `css/variables.css`:

```css
:root {
    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --duration-slow: 400ms;
}
```

### Adding New Calculators

1. Create a new tab in `index.html`
2. Add calculator logic in `js/modules/`
3. Import and initialize in `js/app.js`

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Laptop**: 992px - 1200px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## ♿ Accessibility

- Semantic HTML structure
- WCAG AA contrast ratios
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity
- Screen reader friendly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Aditya Kumar**
- Website: [CloudThat](https://www.cloudthat.com/resources/author/aditya-kumar/)

## 🙏 Acknowledgments

- Amazon Web Services for Bedrock pricing information
- Font Awesome for icons
- Google Fonts for the Inter font family
- The open-source community for inspiration

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the author through the website

## 🔄 Version History

### v2.0.0 (Current)
- ✨ Complete UI redesign with modern gradients and animations
- 🎨 Enhanced visual design system
- 🚀 Performance optimizations
- 📱 Improved responsive design
- 🌓 Enhanced dark/light theme support

### v1.0.0
- 🎉 Initial release
- Basic calculator functionality
- Simple UI design

## 🗺️ Roadmap

- [ ] Add more AWS regions
- [ ] Include additional model providers
- [ ] Export results to PDF/CSV
- [ ] Cost comparison features
- [ ] Historical pricing data
- [ ] API integration for real-time pricing

## ⚠️ Disclaimer

**Important**: This calculator provides cost estimates based on publicly available AWS pricing information. Please verify all cost estimates with official AWS pricing documentation before making implementation decisions. Prices are subject to change without notice.

---

Made with ❤️ by [Aditya Kumar](https://www.cloudthat.com/resources/author/aditya-kumar/)
