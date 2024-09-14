## Magnetic Button Effect

This project showcases a simple "magnetic cursor" effect applied to a button element. When hovering over the button, the cursor appears to attract the button horizontally, moving it up to 50px left or right.

### About

This interactive button provides a fun and engaging user experience by adding a subtle magnetic effect on hover. The cursor's position influences the button's movement, creating a playful interaction.

### How it works
* **JavaScript and GSAP:**
    * Tracks the cursor position.
    * Uses `lerp` to calculate the horizontal movement of the button based on the cursor position within the button's container.


### Customization
* **Movement:** Adjust the maximum movement distance (50px) in the `script.js` file.