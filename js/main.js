/**
 * main.js
 * Main JavaScript file that initializes all components
 */

import { initNavigation } from './components/navigation.js';
import { initForms } from './components/forms.js';
import { initAnimations } from './components/animations.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initForms();
    initAnimations();
});
