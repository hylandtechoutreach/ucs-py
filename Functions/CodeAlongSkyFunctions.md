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

Each time through the loop, it gets a random `size` value...

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

Finally, outside of the loop (once it has run `10` times), the program hides the `plane` by calling the `hideturtle` function:

```py
plane.hideturtle()
```

### The fun.py File
The **fun.py** file contains a few functions that make the **main.py** file much shorter and cleaner. It defines these functions:

- `draw_corner`
- `move_randomly`
- `draw_star`
- `draw_cloud`

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

#### Side-Note: A More Sustainable Way


### Shape Types

### Shape Sizes

### Shape Count

https://trinket.io/python/a0f90bc908

## Part Three: Aliens

https://trinket.io/python/17bc7a684c

