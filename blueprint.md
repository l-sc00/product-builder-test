# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers.

## Features

*   Generates 6 unique random numbers between 1 and 45.
*   Displays the generated numbers in a visually appealing way.
*   Keeps a history of generated numbers.
*   Modern and responsive design.

## Implemented Plan

*   **index.html:**
    *   Changed the title to "Lotto Number Generator".
    *   Added a main container for the application.
    *   Added a title heading.
    *   Added a section to display the generated lottery numbers using a custom element.
    *   Added a button to trigger the number generation.
    *   Added a section for a history of generated numbers.
*   **style.css:**
    *   Added styles for the main container, title, number display, button, and history section.
    *   Used modern CSS features like CSS variables, flexbox/grid for layout.
    *   Added some nice styling to make it visually appealing.
*   **main.js:**
    *   Created a function to generate 6 unique random numbers between 1 and 45.
    *   Added an event listener to the button to call the generation function.
    *   Created a web component `<lotto-numbers>` to display the generated numbers.
    *   Displayed the generated numbers in the number display section.
    *   Stored the generated numbers in an array to keep a history.
    *   Displayed the history of generated numbers.

## Current Plan

*   **Localization (Korean):**
    *   **index.html:** Change `lang` attribute to `ko`. Translate title, headings, and button text to Korean.
