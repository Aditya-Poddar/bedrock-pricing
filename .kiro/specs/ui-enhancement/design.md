# Design Document: UI Enhancement

## Overview

This design document outlines the technical approach for enhancing the visual design of the Amazon Bedrock Cost Calculator. The enhancement focuses on modernizing the UI through improved visual hierarchy, sophisticated animations, gradient effects, and enhanced interactive feedback while maintaining the existing vanilla JavaScript architecture and functionality.

The design leverages modern CSS features including CSS custom properties, transforms, gradients, and animations to create a polished, professional interface. All enhancements are implemented through CSS modifications with minimal JavaScript for animation triggers, ensuring performance and maintainability.

## Architecture

### Design Principles

1. **CSS-First Approach**: All visual enhancements are implemented primarily through CSS, with JavaScript only for triggering state changes
2. **Progressive Enhancement**: Core functionality remains intact; visual enhancements layer on top
3. **Performance-Conscious**: Use GPU-accelerated properties (transform, opacity) for animations
4. **Theme-Aware**: All enhancements work seamlessly in both light and dark themes
5. **Accessibility-Maintained**: Respect user preferences (prefers-reduced-motion) and maintain WCAG contrast ratios

### File Structure

The existing CSS architecture will be enhanced:

```
css/
├── variables.css      # Enhanced with new color gradients, animation timings, shadows
├── base.css          # Enhanced with improved typography and base animations
├── components.css    # Enhanced with gradient effects, shadows, and micro-interactions
├── animations.css    # NEW: Dedicated file for keyframe animations and transitions
└── responsive.css    # Enhanced to ensure animations work across devices
```

### Technology Stack

- **CSS3**: Custom properties, gradients, transforms, animations, filters
- **Vanilla JavaScript**: Minimal additions for animation triggers and state management
- **CSS Animation Libraries**: None (custom implementations for full control)
- **Performance APIs**: requestAnimationFrame for JS-driven animations

## Components and Interfaces

### 1. Enhanced Color System

**Purpose**: Provide a sophisticated color palette with gradient support for both themes.

**Implementation**:
```css
/* New CSS Variables in variables.css */
:root {
  /* Gradient definitions */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-success: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --gradient-background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  /* Enhanced shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.1);
  
  /* Animation timings */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

[data-theme="dark"] {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  --gradient-success: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
  --gradient-background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  
  /* Darker shadows for dark theme */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.5);
}
```

**Interface**:
- CSS custom properties accessible throughout the application
- Theme-aware gradient and shadow values
- Consistent animation timing values

### 2. Animation System

**Purpose**: Provide reusable animations and transitions for consistent motion design.

**Implementation**:
```css
/* animations.css - New file */

/* Keyframe Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Utility Classes */
.animate-fade-in {
  animation: fadeIn var(--duration-normal) var(--easing-smooth);
}

.animate-slide-in {
  animation: slideIn var(--duration-normal) var(--easing-smooth);
}

.animate-scale-in {
  animation: scaleIn var(--duration-normal) var(--easing-smooth);
}

.animate-shake {
  animation: shake 0.5s var(--easing-smooth);
}

/* Staggered animations for lists */
.stagger-children > * {
  animation: fadeIn var(--duration-normal) var(--easing-smooth);
  animation-fill-mode: both;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 50ms; }
.stagger-children > *:nth-child(3) { animation-delay: 100ms; }
.stagger-children > *:nth-child(4) { animation-delay: 150ms; }
.stagger-children > *:nth-child(5) { animation-delay: 200ms; }
.stagger-children > *:nth-child(n+6) { animation-delay: 250ms; }

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Interface**:
- Reusable keyframe animations
- Utility classes for common animation patterns
- Staggered animation support for lists
- Accessibility support for reduced motion

### 3. Enhanced Button Component

**Purpose**: Create visually appealing buttons with gradient backgrounds and interactive feedback.

**Implementation**:
```css
/* Enhanced button styles in components.css */
.btn {
  position: relative;
  overflow: hidden;
  background: var(--gradient-primary);
  border: none;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all var(--duration-normal) var(--easing-smooth);
  box-shadow: var(--shadow-md);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--easing-smooth);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn:hover::before {
  opacity: 1;
}

.btn:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn-calculate {
  background: var(--gradient-primary);
}

.btn-reset {
  background: var(--gradient-secondary);
}

/* Ripple effect */
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width var(--duration-slow) var(--easing-smooth),
              height var(--duration-slow) var(--easing-smooth);
}

.btn:active::after {
  width: 300px;
  height: 300px;
}
```

**Interface**:
- Gradient background with overlay effects
- Hover elevation changes
- Active state feedback
- Ripple effect on click

### 4. Enhanced Card Component

**Purpose**: Create depth and visual interest through layered shadows and gradient accents.

**Implementation**:
```css
/* Enhanced card styles in components.css */
.calculator-container {
  background: var(--card-color);
  border-radius: 1rem;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.calculator-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
}

.results-container,
.detailed-breakdown {
  background: var(--card-color);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  position: relative;
  transition: all var(--duration-normal) var(--easing-smooth);
}

.results-container::before,
.detailed-breakdown::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: var(--gradient-background);
  opacity: 0.03;
  pointer-events: none;
}

.results-container:hover,
.detailed-breakdown:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.detailed-step {
  background: var(--background-color);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 3px solid transparent;
  background-image: var(--gradient-primary);
  background-clip: padding-box;
  border-image: var(--gradient-primary) 1;
  transition: all var(--duration-normal) var(--easing-smooth);
}

.detailed-step:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}
```

**Interface**:
- Multi-layered shadows for depth
- Gradient accent borders
- Subtle background overlays
- Hover elevation effects

### 5. Enhanced Input Controls

**Purpose**: Provide clear visual feedback for form interactions.

**Implementation**:
```css
/* Enhanced input styles in components.css */
.input-group input,
.input-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  background-color: var(--card-color);
  color: var(--text-color);
  font-size: 0.875rem;
  transition: all var(--duration-normal) var(--easing-smooth);
  position: relative;
}

.input-group input:focus,
.input-group select:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3),
              0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.input-group input:focus::placeholder {
  transform: translateX(5px);
  opacity: 0.6;
}

/* Animated label */
.input-group {
  position: relative;
}

.input-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-size: 0.875rem;
  transition: all var(--duration-fast) var(--easing-smooth);
}

.input-group input:focus + label,
.input-group select:focus + label {
  color: var(--primary-color);
  transform: translateX(2px);
}

/* Error state with shake animation */
.input-group input.error,
.input-group select.error {
  border-color: var(--error-color);
  animation: shake 0.5s var(--easing-smooth);
}

.input-group .error {
  color: var(--error-color);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  animation: slideIn var(--duration-fast) var(--easing-smooth);
}
```

**Interface**:
- Animated focus states with glow effects
- Smooth transitions on all interactions
- Error state animations
- Label color changes on focus

### 6. Enhanced Tab System

**Purpose**: Create smooth transitions between calculator tabs with visual feedback.

**Implementation**:
```css
/* Enhanced tab styles in components.css */
.tab-buttons {
  display: flex;
  background: var(--background-color);
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 0.75rem;
  position: relative;
}

.tab-button {
  position: relative;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-color);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all var(--duration-normal) var(--easing-smooth);
  z-index: 1;
}

.tab-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: translateX(-50%);
  transition: width var(--duration-normal) var(--easing-smooth);
}

.tab-button:hover {
  background: var(--card-color);
  transform: translateY(-2px);
}

.tab-button.active {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-md);
}

.tab-button.active::before {
  width: 80%;
}

/* Tab content transitions */
.tab-content {
  animation: fadeIn var(--duration-normal) var(--easing-smooth);
}

.tab-content.active {
  display: flex;
  flex-direction: column;
}
```

**Interface**:
- Gradient background for active tabs
- Animated underline indicator
- Smooth content transitions
- Hover elevation effects

### 7. Result Display Enhancements

**Purpose**: Create engaging visualizations for calculation results.

**Implementation**:
```css
/* Enhanced result display in components.css */
.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--background-color);
  margin-bottom: 0.75rem;
  transition: all var(--duration-normal) var(--easing-smooth);
  position: relative;
  overflow: hidden;
}

.result-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--gradient-primary);
}

.result-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.result-value {
  font-weight: 700;
  font-size: 1.25rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: countUp var(--duration-slow) var(--easing-smooth);
}

/* Progress bar for cost breakdown */
.cost-bar {
  height: 8px;
  background: var(--background-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.cost-bar-fill {
  height: 100%;
  background: var(--gradient-success);
  border-radius: 4px;
  transition: width var(--duration-slow) var(--easing-smooth);
  position: relative;
  overflow: hidden;
}

.cost-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}
```

**Interface**:
- Gradient text for values
- Animated progress bars
- Hover effects on result items
- Shimmer effects for visual interest

### 8. Loading State Component

**Purpose**: Provide visual feedback during asynchronous operations.

**Implementation**:
```css
/* Loading states in components.css */
.loading-spinner {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-skeleton {
  background: linear-gradient(
    90deg,
    var(--background-color) 0%,
    var(--border-color) 50%,
    var(--background-color) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.5rem;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn var(--duration-fast) var(--easing-smooth);
}

.loading-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
```

**Interface**:
- Spinner component for button loading states
- Skeleton screens for content loading
- Overlay with backdrop blur
- Pulse animation for subtle loading indicators

### 9. Theme Toggle Enhancement

**Purpose**: Create a delightful theme switching experience.

**Implementation**:
```css
/* Enhanced theme toggle in components.css */
.theme-toggle {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  transition: all var(--duration-normal) var(--easing-smooth);
  overflow: hidden;
}

.theme-toggle::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: scale(0);
  transition: transform var(--duration-normal) var(--easing-bounce);
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(15deg);
  box-shadow: var(--shadow-xl);
}

.theme-toggle:hover::before {
  transform: scale(1);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-toggle i {
  font-size: 1.25rem;
  transition: transform var(--duration-normal) var(--easing-smooth);
}

.theme-toggle:hover i {
  transform: rotate(180deg);
}
```

**JavaScript Enhancement**:
```javascript
// In app.js - Enhanced theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Add transition class
  html.classList.add('theme-transitioning');
  
  // Change theme
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon with animation
  const icon = document.querySelector('.theme-toggle i');
  icon.style.transform = 'scale(0) rotate(180deg)';
  
  setTimeout(() => {
    icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    icon.style.transform = 'scale(1) rotate(0deg)';
  }, 150);
  
  // Remove transition class
  setTimeout(() => {
    html.classList.remove('theme-transitioning');
  }, 300);
}
```

**Interface**:
- Gradient background button
- Rotation and scale animations on hover
- Icon transition animation
- Smooth theme switching

## Data Models

### Animation Configuration

```javascript
// Animation configuration object
const AnimationConfig = {
  durations: {
    fast: 150,
    normal: 250,
    slow: 400
  },
  easings: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    linear: 'linear'
  },
  delays: {
    stagger: 50,
    sequential: 100
  }
};
```

### Theme Configuration

```javascript
// Theme gradient definitions
const ThemeGradients = {
  light: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    success: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  },
  dark: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    success: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
  }
};
```

### Result Animation State

```javascript
// State management for result animations
const ResultAnimationState = {
  isAnimating: false,
  currentValue: 0,
  targetValue: 0,
  duration: 1000,
  startTime: null
};
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

After analyzing all acceptance criteria, several patterns emerged that allow us to consolidate testing:

**Consolidation Decisions:**
- Properties 1.4, 6.4, and 11.5 all test consistency across elements (border-radius, padding, font-size) - these can be combined into a single "consistency" property
- Properties 4.1, 4.2, and 4.5 all test hover/focus states on interactive elements - these can be combined into a comprehensive interaction property
- Properties 6.1, 6.2, and 6.3 all test card styling - these can be combined into a single card enhancement property
- Properties 9.1 and 9.2 both test gradient applications - these can be combined into a gradient usage property
- Properties 10.1 and 10.2 both test performance-conscious CSS - these can be combined into a performance property

### Core Properties

**Property 1: Consistent Design Tokens**
*For any* UI element in the calculator, the element's border-radius, padding, and font-size values SHALL come from the defined design token sets in CSS variables.
**Validates: Requirements 1.4, 6.4, 11.5**

**Property 2: Interactive Element Feedback**
*For any* interactive element (buttons, inputs, tabs, cards), the element SHALL have defined hover and focus states with transition properties and duration values <= 200ms.
**Validates: Requirements 3.1, 4.1, 4.2, 4.5**

**Property 3: Multi-Layered Shadows**
*For any* card element, the box-shadow property SHALL contain multiple comma-separated shadow definitions (at least 2 layers).
**Validates: Requirements 1.2, 6.1**

**Property 4: Non-Linear Animation Easing**
*For any* element with transition or animation properties, the timing function SHALL NOT be 'linear' (must use cubic-bezier or named easing).
**Validates: Requirements 3.5**

**Property 5: Gradient Enhancement**
*For any* primary button or heading element, the element SHALL have gradient backgrounds applied via linear-gradient or background-clip: text.
**Validates: Requirements 9.1, 9.2**

**Property 6: Performance-Conscious Animations**
*For any* animated element, transform or opacity properties SHALL be used for animations rather than position properties (top, left, right, bottom), and frequently animated elements SHALL have will-change property set.
**Validates: Requirements 10.1, 10.2**

**Property 7: Theme-Specific Gradients**
*For any* gradient CSS variable, the light theme and dark theme SHALL have different gradient definitions.
**Validates: Requirements 12.4**

**Property 8: Heading Visual Distinction**
*For any* tab component, section heading elements SHALL have distinct font-size, font-weight, and color values that differ from body text.
**Validates: Requirements 2.1**

**Property 9: Card Hover Effects**
*For any* interactive card element, the :hover pseudo-class SHALL have different box-shadow and transform values than the default state.
**Validates: Requirements 6.2**

**Property 10: Contrast Ratio Compliance**
*For any* text element in both light and dark themes, the contrast ratio between text color and background color SHALL meet WCAG AA standards (>= 4.5:1 for normal text, >= 3:1 for large text).
**Validates: Requirements 12.2**

### Example-Based Properties

These properties validate specific interactions or UI states that are best tested with concrete examples:

**Example 1: Shadow Depth on Cards**
The results-container and detailed-breakdown elements SHALL have box-shadow values with at least 2 comma-separated shadow definitions.
**Validates: Requirements 1.2**

**Example 2: Gradient Background on Container**
The calculator-container element SHALL have a gradient background or gradient pseudo-element applied.
**Validates: Requirements 1.3**

**Example 3: Primary Action Emphasis**
The .btn-calculate button SHALL have larger padding, gradient background, and higher z-index than secondary buttons.
**Validates: Requirements 2.3**

**Example 4: Interactive vs Non-Interactive Distinction**
Interactive elements SHALL have cursor: pointer, while non-interactive elements SHALL NOT.
**Validates: Requirements 2.5**

**Example 5: Tab Content Transition**
The .tab-content.active class SHALL have animation or transition properties for fade/slide effects.
**Validates: Requirements 3.2**

**Example 6: Result Display Stagger**
Result items within .results-container SHALL have animation-delay properties that increase sequentially (stagger effect).
**Validates: Requirements 3.3**

**Example 7: Button Click Feedback**
Button elements SHALL have :active pseudo-class with transform: scale or animation properties.
**Validates: Requirements 3.4**

**Example 8: Input Error Animation**
Input elements with .error class SHALL have animation property with shake or slide keyframes.
**Validates: Requirements 4.3**

**Example 9: Copy Success Notification**
The .copy-success element SHALL have animation properties for appearance/disappearance.
**Validates: Requirements 4.4**

**Example 10: Result Card Gradients**
The .result-item elements SHALL have gradient backgrounds or gradient border accents.
**Validates: Requirements 5.1**

**Example 11: Progress Bar Animation**
The .cost-bar-fill element SHALL have width transition with duration >= 400ms.
**Validates: Requirements 5.2**

**Example 12: Color-Coded Breakdown**
The .detailed-step elements SHALL have different border-left colors or background colors.
**Validates: Requirements 5.3**

**Example 13: Number Count-Up Animation**
The result value display SHALL use JavaScript animation with requestAnimationFrame to count up to target value.
**Validates: Requirements 5.4**

**Example 14: Focused Card Border Accent**
Card elements with :focus-within pseudo-class SHALL have border or border-image with gradient values.
**Validates: Requirements 6.5**

**Example 15: Loading Spinner Display**
When calculation is triggered, a .loading-spinner element SHALL be displayed with spin animation.
**Validates: Requirements 7.1**

**Example 16: Loading Fade Transitions**
The .loading-overlay element SHALL have opacity transition or fade animation.
**Validates: Requirements 7.2**

**Example 17: Loading Gradient Effects**
The .loading-skeleton element SHALL have gradient background with shimmer animation.
**Validates: Requirements 7.3**

**Example 18: Token Calculator Loading**
The token calculator result area SHALL display loading indicator when tokenize button is clicked.
**Validates: Requirements 7.4**

**Example 19: Theme Icon Animation**
The .theme-toggle icon SHALL change from moon to sun (or vice versa) with transform animation.
**Validates: Requirements 8.1**

**Example 20: Dropdown Highlight**
Select elements SHALL have transition properties on change events.
**Validates: Requirements 8.2**

**Example 21: Active Tab Indicator**
The .tab-button.active element SHALL have animated indicator (::before or ::after) with width or transform transition.
**Validates: Requirements 8.3**

**Example 22: Reset Animation**
When reset button is clicked, input values SHALL clear with fade animation.
**Validates: Requirements 8.4**

**Example 23: Smooth Scroll**
The html or body element SHALL have scroll-behavior: smooth property.
**Validates: Requirements 8.5**

**Example 24: Main Background Gradient**
The body or .calculator-container element SHALL have gradient background applied.
**Validates: Requirements 9.3**

**Example 25: Dark Theme Gradient Variation**
The [data-theme="dark"] CSS variables for gradients SHALL have different color values than light theme.
**Validates: Requirements 9.4**

**Example 26: Progress Bar Gradients**
The .cost-bar-fill element SHALL have gradient background.
**Validates: Requirements 9.5**

**Example 27: RequestAnimationFrame Usage**
JavaScript animation functions SHALL use requestAnimationFrame for value updates.
**Validates: Requirements 10.3**

**Example 28: Reduced Motion Support**
A @media (prefers-reduced-motion: reduce) query SHALL exist that reduces animation durations to near-zero.
**Validates: Requirements 10.4**

**Example 29: Font Weight Hierarchy**
Different element types (h1, h2, body, label) SHALL use different font-weight values from the set [300, 400, 500, 600].
**Validates: Requirements 11.1**

**Example 30: Body Text Line Height**
Body text elements SHALL have line-height values between 1.5 and 1.6.
**Validates: Requirements 11.2**

**Example 31: Heading Letter Spacing**
Heading and label elements SHALL have letter-spacing property set (non-zero value).
**Validates: Requirements 11.3**

**Example 32: Heading Text Shadow**
Heading elements SHALL have text-shadow property applied.
**Validates: Requirements 11.4**

**Example 33: Gradient Transition**
CSS variables for gradients SHALL have transition properties applied to their usage contexts.
**Validates: Requirements 12.1**

**Example 34: Theme Shadow Variation**
Shadow CSS variables SHALL have different opacity and blur values between light and dark themes.
**Validates: Requirements 12.3**

## Error Handling

### CSS Fallbacks

All gradient and advanced CSS features include fallbacks for older browsers:

```css
/* Gradient with fallback */
.btn-calculate {
  background-color: var(--primary-color); /* Fallback */
  background: var(--gradient-primary); /* Enhanced */
}

/* Transform with fallback */
.card {
  margin-top: 10px; /* Fallback */
  transform: translateY(10px); /* Enhanced */
}
```

### Animation Performance Degradation

If animations cause performance issues:

```javascript
// Detect low performance and disable animations
let frameCount = 0;
let lastTime = performance.now();

function checkPerformance() {
  frameCount++;
  const currentTime = performance.now();
  
  if (currentTime - lastTime >= 1000) {
    const fps = frameCount;
    frameCount = 0;
    lastTime = currentTime;
    
    if (fps < 30) {
      document.documentElement.classList.add('reduce-animations');
    }
  }
  
  requestAnimationFrame(checkPerformance);
}
```

### Theme Switching Errors

Handle theme switching failures gracefully:

```javascript
function toggleTheme() {
  try {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  } catch (error) {
    console.error('Theme switching failed:', error);
    // Fallback to default theme
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
```

### Missing CSS Variable Fallbacks

Ensure all CSS variables have fallback values:

```css
.element {
  /* Always provide fallback before CSS variable */
  color: #2563eb;
  color: var(--primary-color, #2563eb);
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
}
```

### Animation Accessibility

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests**: Focus on specific examples, edge cases, and concrete UI states
- Verify specific elements have expected CSS properties
- Test theme switching functionality
- Verify animation triggers on user interactions
- Test loading state displays
- Verify gradient applications on specific elements

**Property-Based Tests**: Verify universal properties across all inputs
- Test that all interactive elements have hover/focus states
- Verify all animations use non-linear easing
- Test consistency of design tokens across all elements
- Verify contrast ratios meet WCAG standards across all color combinations
- Test that all card elements have multi-layered shadows

### Testing Framework

**CSS Testing**: Use computed styles and DOM queries
```javascript
// Example: Testing computed styles
function getComputedStyle(element, property) {
  return window.getComputedStyle(element).getPropertyValue(property);
}

// Example: Testing shadow layers
function hasMutliLayeredShadow(element) {
  const shadow = getComputedStyle(element, 'box-shadow');
  return shadow.split(',').length >= 2;
}
```

**Animation Testing**: Use animation event listeners
```javascript
// Example: Testing animation completion
element.addEventListener('animationend', (e) => {
  assert(e.animationName === 'fadeIn');
});
```

**Contrast Ratio Testing**: Use WCAG contrast calculation
```javascript
// Example: Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const l1 = getRelativeLuminance(color1);
  const l2 = getRelativeLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
```

### Property-Based Testing Configuration

**Testing Library**: Use a JavaScript property-based testing library like fast-check

**Configuration**:
- Minimum 100 iterations per property test
- Each test references its design document property
- Tag format: **Feature: ui-enhancement, Property {number}: {property_text}**

**Example Property Test**:
```javascript
// Feature: ui-enhancement, Property 2: Interactive Element Feedback
fc.assert(
  fc.property(
    fc.constantFrom(...document.querySelectorAll('button, input, select, .tab-button')),
    (element) => {
      const transition = getComputedStyle(element, 'transition-duration');
      const duration = parseFloat(transition) * 1000; // Convert to ms
      return duration > 0 && duration <= 200;
    }
  ),
  { numRuns: 100 }
);
```

### Test Coverage Requirements

**CSS Properties to Test**:
- Gradient definitions in CSS variables
- Shadow layers on card elements
- Transition and animation properties
- Transform usage vs position properties
- Will-change properties on animated elements
- Contrast ratios in both themes
- Font-size, font-weight, line-height values
- Border-radius consistency
- Hover and focus state definitions

**JavaScript Functions to Test**:
- Theme toggle function
- Animation trigger functions
- RequestAnimationFrame usage
- Number count-up animation
- Loading state management
- Performance monitoring

**Integration Tests**:
- Theme switching updates all gradients
- Tab switching triggers animations
- Calculation triggers loading states
- Result display triggers stagger animations
- Reset clears values with animations

### Visual Regression Testing

While not automated in this spec, visual regression testing is recommended:
- Capture screenshots of all calculator tabs in both themes
- Compare before/after enhancement screenshots
- Verify animations through video recordings
- Test on multiple browsers and devices

### Performance Testing

Monitor animation performance:
- Use Chrome DevTools Performance tab
- Verify 60fps during animations
- Check for layout thrashing
- Verify GPU acceleration is active (check for composited layers)
- Test on lower-end devices

### Accessibility Testing

Verify accessibility is maintained:
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation still works
- Test with prefers-reduced-motion enabled
- Verify contrast ratios with automated tools
- Test with browser zoom at 200%
