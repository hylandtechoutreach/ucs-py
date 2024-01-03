# Code-Along: Turtle's Journey
Follow these instructions to create a basic turtle program.

[**Click here for the starter project.**](https://replit.com/@HylandOutreach/TurtleJourney#main.py) Fork the project to begin.

## Part One: Setup
Take a look at the code that is currently in the **main.py** file. Run the project to see what it currently does. It does not do much, but there are already a few improvements to be made.

### Challenge: Make Some Updates
Make the following updates to the code:

1. Give your turtle a different name (other than `"Turtle"`)
1. Change the background color to something else (other than `white`)
1. Make the window a new size (bigger than `300` by `100`)

Run the program after making the updates, and see how it changes! The code should look something like this:

```py
from turtle import Turtle, Screen, title, done

title("Leo's Journey")

paper = Screen()
paper.bgcolor("black")
paper.setup(500, 500)

done()
```

## Part Two: Turtle Time
Now the window is looking alright, but it's pretty boring! Create a new turtle cursor to go on the screen.

1. Create a new variable with the name of your turtle (e.g., `leo =`)
1. Set the turtle to be `Turtle()`  
  - Must have a capital `T` and must have parentheses (`()`)
1. Use `.shape` to set the turtle's shape to `"arrow"`  
  - How could it be made into a turtle instead of an arrow?
1. Update the color of the turtle  
  - Use the `.shape` command as an example to figure it out!
1. Update the size of the turtle with `.turtlesize`  
  - Passing in `2` will make it twice as big!

Run the program, and make sure the new turtle friend appears! The code should look something like this:

```py
leo = Turtle()

leo.shape("turtle")
leo.color("blue")
leo.turtlesize(2)
```

## Part Three: Turtle Draw
The turtle is pretty boring right now. It's just hanging out on the screen, doing nothing. It's time to make it draw!

1. First, set the `speed` of the turtle to `1`  
  - Very similar to setting the `shape`, `color,`, and `turtlesize`
1. Additionally, set the `pensize` to `4`  
  - Also very similar to the lines above

Now the turtle is ready for action. It's time for it to draw a square.

1. Use `.forward` to move the turtle in the direction it's facing
1. Use `.right` to turn the turtle `90` degrees so it will be facing down
1. Use `.forward` to move the turtle again - but this time, it will move down!

Run the program to see how it's currently working. The turtle should draw about half of a square! The code should look something like this:

```py
leo.speed(1)
leo.pensize(4)

leo.forward(100)
leo.right(90)
leo.forward(100)
```

### Challenge: Complete the Square
See if you can figure out how to finish the rest of the square!

>Hint: You only have to use `.forward(100)` and `.right(90)` for this to work.

The code for the remainder of the square should look something like this:

```py
leo.forward(100)
leo.right(90)
leo.forward(100)
leo.right(90)
leo.forward(100)
leo.right(90)
leo.forward(100)
leo.right(90)
```

## Part Four: Turtle Talk
The last part is for the turtle to sign their drawing by writing on the screen. The code looks like this:

```py
leo.write("      I'm the best turtle")
```

Note all the spaces within the `"` and `"` - this ensures that the text does not overlap with the turtle on the screen.

## Conclusion
That's it for the basic turtle program!

### Final Code
The code in the **main.py** file should look something like this:

```py
from turtle import Turtle, Screen, title, done

title("Leo's Journey")

paper = Screen()
paper.bgcolor("black")
paper.setup(500, 500)

leo = Turtle()

leo.shape("turtle")
leo.color("blue")
leo.turtlesize(2)
leo.speed(1)
leo.pensize(4)

leo.forward(100)
leo.right(90)
leo.forward(100)
leo.right(90)
leo.forward(100)
leo.right(90)
leo.forward(100)
leo.right(90)

leo.write("      I'm the best turtle")

done()
```
