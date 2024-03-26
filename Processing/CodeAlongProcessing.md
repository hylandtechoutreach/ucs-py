# Code-Along: Creating a Scene
In this code-along activity, use Processing to create a scene with some different components.

[**Click here to open the empty starter project.**](https://trinket.io/python/6c6947f434) Make sure to click the **Expand** button to give yourself some room.

## Getting Started
Since the **main.py** file is totally empty, there are a few things to add before it's possible to create anything interesting.

### Library Support
First, import the code from the `processing` library at the _very top_ of the **main.py** file:

```py
from processing import *
```

Then, make a bunch of new lines in the file. At the _very bottom_ of the **main.py** file, call the `run` function:

```py
run()
```

This will not do anything yet, but it ensures that the Processing code will work as expected.

### The `setup` Function
Next, define the `setup` function. Remember, start with the `def` keyword, then the function name, then parentheses, then a colon:

```py
def setup():
```

After that, make a new line, and make sure that the new line is _indented_ so it's in the _body_ of the function. There, set the size of the canvas by calling the `size` function and passing in a width and height:

```py
def setup():
  size(400, 200)
```

With the `setup` function defined, try running the program. There won't be much, but the canvas is there!

### The `draw` Function
Next, define the `draw` function. Similar to the `setup` function definition, it should start with the `def` keyword, ten the function name, then parentheses, then a colon:

```py
def draw():
```

After that, make a new line, and make sure that the new line is _indented_ so it's in the _body_ of the function. There, draw a circle by calling the `size` function and passing in an x coordinate, y coordinate, width, and height:

```py
def draw():
  ellipse(200, 100, 50, 50)
```

With the `draw` function defined, try running the program. The circle should appear!

### Empty Scene Code
At this point, your **main.py** file should look something like this:

```py
from processing import *

def setup():
  size(400, 200)

def draw():
  ellipse(200, 100, 50, 50)

run()
```

## Sky, Sun, and Ground
Next, start to create a world within this canvas. Change the background color to create a sky, move the circle and change its color to create a celestial body, and create a rectangular ground.

### Sky
First, change the background color so that it looks more like the sky. In the body of the `setup` function, under the `size` function call, make a new indented line. There, add this code:

```py
  background(0, 255, 255)
```

Run the program, and verify that the background changes to a light blue color!

### Sun
Next, change the position and color of the circle so that it looks like the sun.

1. Find the `draw` function definition
1. Make a new indented line _above_ the `ellipse` function call
1. There, call the `fill` function and pass `255, 255, 0`  
    - That will be a nice bright yellow
1. Change the x coordinate of the `ellipse` to be `400`  
    - This will move it all the way to the right  
1. Change the y coordinate of the `ellipse` to be `0`
    - This will move it all the way to the top

Run the program, and verify that a sun appears!

### Ground
All that's left is a nice green ground.

1. Find the `draw` function definition again
1. Make a new indented line at the bottom of the function body
1. There, set the `fill` color to green
1. Under that, create a rectangle  
    - Set the rectangle's x coordinate to be `-1`
    - Set the rectangle's y coordinate to be `175`
    - Set the rectangle's width to be `width+1`
    - Set the rectangle's height to be `25`

Run the program, and verify that the ground appears!

### Basic Scene Code
At this point, there should be a nice basic scene. The code should look something like this:

```py
from processing import *

def setup():
  size(400, 200)
  background(0, 255, 255)
  
def draw():
  fill(255, 255, 0)
  ellipse(400, 0, 50, 50)
  
  fill(0, 255, 0)
  rect(-1, 175, width+1, 25)

run()
```

## Image Objects
The scene has a nice background, but there's not much there. Fill it out with some pictures.

>Note: an image named **tree.png** has already been added to the Images library for this project.

### Loading the Image: Globally
First, the image has to be loaded.

1. Find the `setup` function definition
1. Make a new indented line right under the `def` line
1. There, declare a new global tree variable: `global tree`
1. Under that, set the `tree` variable to a call to `loadImage()`
1. Pass in `"tree.png"` between the `(` and `)`

The two lines added to the `setup()` function body should look like this:

```py
  global tree
  tree = loadImage("tree.png")
```

Now the image is loaded, but it still needs to be added to the scene!

### Placing the Image
The image can be drawn using the `image` function.

1. Find the `draw` function definition
1. Make a new indented line at the bottom of the function definition
1. There, call the `image` function  
    - Pass in the `tree` variable as the first value
    - Pass in `10` as the second value (x coordinate)
    - Pass in `150` as the third value (y coordinate)

The added line of code should look like this:

```py
image(tree, 10, 150)
```

Run the program again, and verify that a tree appears!

### Adding More Trees
Next, add some more trees to the scene. Each tree is added with the `image` function, just like this:

```py
image(tree, 40, 151)
```

Copy and paste that line within the body of the `draw` function definition, and change the x and y values. Do that a few times, then run the program to see a whole forest begin to appear!

## Conclusion
By the end of this activity, the code should look something like this:

```py
from processing import *

def setup():
  global tree
  tree = loadImage("tree.png")
  
  background(0, 255, 255)
  size(400, 200)
  
def draw():
  fill(255, 255, 0)
  ellipse(400, 0, 50, 50)
  
  fill(0, 255, 0)
  rect(-1, 175, width+1, 25)
  
  image(tree, 10, 150)
  image(tree, 40, 151)
  image(tree, 78, 150)
  image(tree, 99, 152)
  image(tree, 180, 151)
  image(tree, 210, 150)
  image(tree, 273, 154)
  image(tree, 360, 160)
  
run()
```
