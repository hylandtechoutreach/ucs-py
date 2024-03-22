# Processing
This lesson introduces the [processing](https://py.processing.org/) library for "sketching" with code. This is made possible by the [Processing capabilities of trinket](https://trinket.io/processing).

## Learning Objectives
Students will be able to...

- Import the `processing` library
- Draw basic shapes with `ellipse` and `rect`
- Change colors with `fill`, `background`, and `stroke`
- Setup the canvas by defining the `setup` function
- Make dynamic updates by defining the `draw` function
- Take user input with the `mouseX`, `mouseY`, and `mousePressed` variables
- Understand the (r, g, b) color model used in Processing
- Understand the (x, y) coordinate system used in Processing

## Lesson Outline
The lesson consists of these parts:

### Warm-Up: Processing Power
Students should check out some of what is possible with Processing with examples on the [warm-up page](WarmUpProcessingPower.md). Note that these examples use the JavaScript version of Processing, so they may not translate directly to Python.

### Lecture: Processing
Present the [Processing PowerPoint](Processing.pptx).

### Formative Assessment: Gimkit
First, have the students practice answering the questions for the Gimkit game. These questions cover the material from the lecture, as well as some previous lessons. Students should click the [Practice Link](https://www.gimkit.com/practice/65fc762f3ee6c3002c0db3c3) from the [Lesson Homepage](StudentDesc.md).

After a few minutes of practice, start up a real live [Gimkit game](https://www.gimkit.com/view/65fc762f3ee6c3002c0db3c3).

### Code-Along: Processing Basics
Walk through the [code-along instructions](CodeAlongProcessing.md) with the students to build a simple Processing application.

### Challenges
Students can follow [the instructions](ChallengesProcessing.md) to modify their programs in some fun and challenging ways.

### Review Games
There are a couple of review games for the students to play toward the end of the session. Students can attempt to get high scores and may be rewarded if they do.

#### Color Picker
[This game](ColorPicker.md) may help students gain a better understanding of the [(r, g, b) color model](https://en.wikipedia.org/wiki/RGB_color_model).

#### Coordinate Clicker
[This game](CoordinateClicker.md) may help students gain a better understanding of [the Processing coordinate system](https://processing.org/tutorials/coordinatesystemandshapes).

## Agenda

| Activity | Time |
|-|-|
| Warm-up | 10m |
| Lecture | 10m |
| Formative Assessment | 20m |
| Code-Along | 10m |
| Challenges | 10m |
| Review Games | 10m |











first program

```py
from processing import *

def setup():
  size(400, 200)

def draw():
  ellipse(200, 100, 50, 50)

run()
```
