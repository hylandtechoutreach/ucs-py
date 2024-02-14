# Code-Along: Sky Drawing
In this code-along activity, you'll use functions to make a turtle draw a scene of the sky.

## Part One: Day
**[Click here to open the starter project.](https://trinket.io/python/ec8696d460)** Make sure to click the "Expand" button, and drag the preview to the left so you can see the whole scene!

The next few of sections explain the existing program, and the code that makes it work.

### The main.py File
The **main.py** is the main script - the entry point for the program.

The first couple lines `import` the necessary modules - including code from the **fun.py** file:

```py
from turtle import *
from fun import *
```

The next few lines grab the `paper` screen, and setup the canvas:

```py
paper = Screen()
paper.setup(1000, 700)
paper.bgcolor("cyan")
```

The next few lines create the new `plane` turtle that will fly through the sky and draw things:

```py
plane = Turtle()
plane.color("white")
plane.shape("arrow")
plane.speed(10)
```

The next command draws the sun in the upper right - by calling the `draw_corner` function, and passing in the `plane` object as input:

```py
draw_corner(plane)
```

The next section starts up a loop, that will run `10` total times:

```py
for x in range(10):
```

Each time through the `for` loop, it gets a random `size` value...

```py
  size = randint(150, 200)
```

...moves the `plane` a random spot on the canvas...

```py
  move_randomly(plane)
```

...and draws a cloud by calling the `draw_cloud` by passing in the `plane` and the random `size` value!

```py
  draw_cloud(plane, size)
```

Finally, outside of the `for` loop (once it has run `10` times), the program hides the `plane` by calling the `hideturtle` function:

```py
plane.hideturtle()
```

### The fun.py File
The **fun.py** file contains a few functions that make the **main.py** file much shorter and cleaner. It defines these functions:

- `draw_corner`
- `move_randomly`
- `draw_star`
- `draw_cloud`

The details aren't too important right now, but know that each of these functions does what its name says.

### Current Behavior
Right now, when the program runs, it makes a cyan sky, draws a yellow sun, and draws ten randomly-sized clouds in random places! Run the program a few times to see how it looks different each time.

## Part Two: Night
The sky during the day is cool. It's true. But everyone knows that nighttime is cooler than daytime. Update the project so that it creates a night sky scene! 

### Sky Color
First, the obvious thing to do is make the sky black. This is simple enough; on line **6** where the background color of the `paper` is set, change it from `"cyan"` to `"black"`. It should look like this:

```py
paper.bgcolor("black")
```

Run the program again to make sure the sky turns black!

### Corner Color
The one thing about night is that the sun is **NOT** out at night. Right now, there's a big yellow quartercircle in the upper right. Change it from a sun to a moon!

This happens in the **fun.py** file, so open that one. There, find the `draw_corner` function definition. On line **6**, the `fillcolor` is set to `"yellow"` - make it `"white"` instead. The code should look something like this:

```py
  turtle.fillcolor("white")
```

#### Side-Note: A More Sustainable Way
What if we wanted to draw a moon, but still be able to draw a sun? We could add a _parameter_ as input that could change the color dynamically based on the function call!

```py
# define the function - with parameter
def draw_corner(turtle, color):
  # ...
  turtle.fillcolor(color)

# call the function - passing input
draw_corner(plane, "white")
```

This is not necessary for now, but it can make functions much more powerful.

### Shape Types
Sure, there are clouds at night. But to really set the night scene apart from the day, we can use a new type of shape: stars!

1. Open the **main.py** file
1. Find the `draw_cloud` function call within the `for` loop (line **18**)
1. Change `draw_cloud` to `draw_star`

The code should look something like this:

```py
  draw_star(plane, size)
```

Run the program, and see the stars!

### Shape Sizes
Okay, so there are stars, but they don't really look like stars from the sky. They look kind of like spangled-banner type stars. Make them smaller so they look more like the twinkling celestial bodies we all know and love!

1. In the **main.py** file, find the `for` loop
1. There, find the `randint` function call (line **16**)
1. Notice the numbers passed: `150` and `200`  
    - This means the `size` will be between 150 and 200 pixels
1. Update those numbers to be `15` and `20`

The code should look something like this:

```py
  size = randint(15, 20)
```

Run the program, and see the shrunken stars!

### Shape Count
Now the stars themselves look pretty good, but they don't quite fill the sky. Update the code so that the `plane` turtle draws a lot more stars!

1. In the **main.py** file, find the `for` loop
1. Notice that it currently loops `10` times 
    - This means there will be 10 stars
1. Update the number to be `50`

The code should look something like this:

```py
  for x in range(50):
```

Run the program, and by the end, the sky should be totally filled with stars!

### Code
At this point, the code should look something like this:

[Click here for the full night version of the project.](https://trinket.io/python/a0f90bc908)

## Part Three: Aliens
Okay, so it's nighttime now. But nighttime by itself isn't too exciting. Let's shake things up with an alien invasion.

>_For our purposes, aliens will be green squares_

### Defining a New Function
First, we need to tell Python how to draw an alien, just like we told it how to draw clouds and stars.

1. Open the **fun.py** file
1. Make a new line at the very bottom of the file
1. There, define a function named `draw_alien` that takes in a `turtle` and a `size` as input 
    - `def ` keyword
    - Function name
    - Parentheses
    - Input
    - Colon

The new line should look something like this:

```py
def draw_alien(turtle, size):
```

#### Function Body: Turtle Prep
Now the function has been named, but it doesn't have any instructions yet! First, let's set up the turtle to draw an alien. We will put the pen down, and get it ready to draw green.

1. Go onto the next line, and make sure it is **indented**
1. Put the `turtle`'s pen down
1. Set the `turtle`'s color to `"lime"`
1. Set the `turtle`'s fill color to `"lime"`
1. Start the `turtle`'s fill

The added code should look something like this:

```py
  turtle.pendown()
  turtle.color("lime")
  turtle.fillcolor("lime")
  turtle.begin_fill()
```

#### Function Body: Square Drawing
Now the turtle is ready to draw! Next, make it draw a square.

1. Go onto the next line, still **indented** within the `draw_alien` function body
1. Create a new `for` loop to loop `4` times
1. Go onto the next line, and make sure it is indented **two levels**
1. There, move the `turtle` forward based on the `size` of the shape
1. Under that, turn the `turtle` left `90` degrees

The added code should look something like this:

```py
  for x in range(4):
    turtle.forward(size)
    turtle.left(90)
```

Make careful note of the indentation!

#### Function Body: Turtle Teardown
Now the shape has been drawn! All that's left is filling it in, and picking up the pen.

1. Go onto the next line, and make sure it is only indented **one level** 
    - Outside of the `for` loop body
1. There, end the `turtle`'s fill
1. Under that, pick up the `turtle`'s pen

The added code should look something like this:

```py
  turtle.end_fill()
  turtle.penup()
```

#### Full Function Definition
The whole function definition should look something like this:

```py
def draw_alien(turtle, size):
  turtle.pendown()
  turtle.color("lime")
  turtle.fillcolor("lime")
  turtle.begin_fill()
  
  for x in range(4):
    turtle.forward(size)
    turtle.left(90)
  
  turtle.end_fill()
  turtle.penup()
```

So the function has been **defined**, but running the program won't do anything different. We've _taught_ Python _how_ to draw an alien, but we haven't _told_ Python to draw an alien yet! We still need to **call** the function.

### Calling the New Function
We need to go back into the **main.py** file to change what our `plane` is actually doing.

1. Open the **main.py** file
1. Find the `for` loop
1. In the body of the `for` loop, find where the `draw_star` function is called
1. Change it to draw an alien instead of drawing a star!

The updated code should look like this:

```py
  draw_alien(plane, size)
```

Run the program to see what happens! There should be a bunch of little green aliens in the sky.

### Bigger Aliens
The little aliens are nice, but we can make them bigger. We can also make fewer of them so they don't fill up too much of the sky.

1. Find the `for` loop
1. Make it run 15 times instead of 50
1. In the body of the `for` loop, find the `size` line
1. Make it between 40 and 60 instead of 15 and 20

The code for the `for` loop should end up looking something like this: 

```py
for x in range(50):
  size = randint(15, 20)
  move_randomly(plane)
  draw_alien(plane, size)
```

Run the program, and see the larger aliens invade!

## Conclusion
By the end of this activity, the code should look something like this:

[Click here for the Alien Invasion version of the project](https://trinket.io/python/a209abcbb6)
