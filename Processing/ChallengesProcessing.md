# Challenges: Processing
Try to complete some of these challenges.

## Dynamic Updates: Re-Backgrounding
The first step to make a dynamic scene is to redraw the background each time. Call the `background` function to set the sky at the top of the `draw` function definition, like this:

```py
def draw():
  background(0, 255, 255)
```

This will ensure that new frames do not contain old elements.

## Scene Updates
The scene should be looking pretty great so far, but there are some ways to improve it.

### Main Character
The sky and ground and trees are a pretty good background, but there should be a main character on the screen. There are a couple options for this:

1. Add the `"rocketship.gif"` image as the main character
1. Add a new custom image for the main character

[Click here to see how to add a custom image.](TrinketImages.md)

#### BONUS: Follow the Mouse
Instead of placing the main character directly into the scene, have it follow the mouse position. This is possible using the `mouseX` and `mouseY` variables:

```py
image(mainCharacter, mouseX, mouseY)
```

Doing this, you may realize that the background does not clear - it draws a new main character every time! This can be fixed by calling the `background` function at the top of the `draw` function definition to provide a fresh new canvas each time.

### Nighttime
Make the scene nighttime instead of daytime. Change the color of the sky to black or dark blue, and turn the sun into the moon!

### Moving the Sun
A still scene is fun, but it could be cool to simulate a day happening. This is possible using the `frameCount` variable to track time across a project. For example, replacing the x position of the sun ellipse with `frameCount` will move the sun from left to right:

```py
ellipse(frameCount, 0, 50, 50)
```

The sun drags its past versions behind itself - this can be fixed by calling the `background` function at the top of the `draw` function definition and refreshing the background each new frame.

### Day Cycle
As the sun moves, try to turn the day into night. Darken the sky bit by bit based on the `frameCount` variable.

To make this happen, it will be necessary to call the `background` function from the `draw` function, and dynamically update the color variables by subtracting the `frameCount`.

## More Examples
[Click here to check out some additional examples.](ProcessingExamples.md)
