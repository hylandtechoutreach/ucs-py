# Code-Along: Loopy Turtle
This activity shows how you can use loops to create some very interesting Turtle patterns in Python.

**[Click here for the starter project.](https://trinket.io/python/888146498f)**

## Part One: Understanding the Existing Code
There is already quite a bit of code in the project. So far, it:

- Creates a turtle
- Sets up the screen
- Sets the turtle and background colors
- Moves the turtle without drawing (using `penup`)
- Starts a fill
- Draws a small triangle based on a loop that runs `2` times

This code doesn't do much, but it lays the groundwork for something much more interesting.

## Part Two: Updating the Loop
Fix the `for` loop code so that instead of drawing a triangle with width `40`, it draws a square with width `400`.

1. Make the loop run `4` times instead of `2`
1. Make the turtle move forward `400` pixels instead of `40`

The updated `for` loop code should look something like this:

```py
for x in range(4):
  keisha.forward(400)
  keisha.right(90)
```

## Part Three: A New Pattern
Now there should be a nice blue square: a perfect canvas upon which to bestow a lovely geometric design. This will consist of a few different steps.

### Step A: Position the Turtle
First, change the turtle's color and position it appropriately.

1. Set the color to `white`
1. Pick up the pen
1. Move to coordinates of `(0, -100)`
1. Put the pen back down

After these commands, the turtle should be ready to draw. The code should look something like this:

```py
keisha.color("white")
  
keisha.penup()
keisha.goto(0, -100)
keisha.pendown()
```

### Step B: Setup the Loop
Now it's time for a totally new loop. This should look a lot like the other loop, but it will do some different things. First, make a new line at the bottom of the **main.py** file. Then:

1. Add the basic `for` loop structure code to loop `36` times
  - `for`
  - `x`
  - `in`
  - `range`
  - Parentheses `()`
  - Number `36`
  - Colon `:`
1. Make a new line
1. _Indent_ the new line by hitting `Space` twice
1. Make the turtle draw a circle with radius `40`

Once the new `for` loop is in place, run the project again. It should be looping... for now, it's just doing the same thing over and over again, but that's a good start.

The code should look something like this:

```py
for x in range(36):
  keisha.circle(40)
```

### Step C: Move Forward
The next step is to move the turtle along with each time through the loop. This will layer each circle in an interesting way, instead of simply drawing all the circles right on top of each other.

1. Make a new line at the bottom of the file
1. _Indent_ the new line by hitting `Space` twice
  - Note: It should be at the same indentation level as the `keisha.circle` command
1. Move the turtle forward `20` pixels

Run the code again, and see how it gets a little more interesting! Now the turtle draws different circles veering off to the right.

The code should look something like this:

```py
for x in range(36):
  keisha.circle(40)
  keisha.forward(20)
```

### Step D: Complete the Cycle
It looks pretty cool, but what we really want is to make a donut. This will be possible by adding one more command to run every time through the loop.

1. Make a new line at the bottom of the file
1. _Indent_ the new line by hitting `Space` twice
  - Note: It should be at the same indentation level as the `keisha.circle` command
1. Turn the turtle to the left `10` pixels

Run the code again - now, the turtle should be making a pretty cool cyclical pattern.

## Conclusion
And that's it! The code at the end of the activity should look something like this:

```py
from turtle import *

keisha = Turtle()
paper = keisha.getscreen()
paper.setup(500, 500)

keisha.color("blue")
paper.bgcolor("white")

keisha.penup()
keisha.goto(-200, 200)
keisha.pendown()

keisha.begin_fill()

for x in range(4):
  keisha.forward(400)
  keisha.right(90)
  
keisha.end_fill()

keisha.color("white")
  
keisha.penup()
keisha.goto(0, -100)
keisha.pendown()

for x in range(36):
  keisha.circle(40)
  keisha.forward(20)
  keisha.left(10)
```
