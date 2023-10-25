# Code-Along: Divination
Follow these instructions to make some updates to a console-based astrology application.

**[Click here for the starter project.](https://replit.com/@HylandOutreach/DivinationStart#main.py)**

## Part One: Customization
To start things off, make some changes to how things currently look.

### Replit Themes
[Themes](https://replit.com/themes) in Replit are a powerful way to enhance your code editing experience.

1. In a Replit project, locate the **Tools** pane
1. There, click on **Settings**
1. Scroll down in the Settings section to find **Theme**
1. Click the dropdown to select a new theme
1. Run the program to see how it looks with the new theme!

![](Assets/ReplitTheme.png)

>_Note: A dark theme is recommended for this activity._

### Figlet Console Fonts
Currently, running the program prints the word "DIVINATION" in a text-based font. Looking in the **main.py** file, this font is currently set to:

```py
"cybermedium"
```

But that's not the only font! Using this library named `pyfiglet`, there are a few different options.

**[Click here to view some available fonts.](https://devhints.io/figlet)** Find a fun one to use, and replace `"cybermedium"` with the new font name in the **main.py** file.

The updated code should end up looking something like this:

```py
title = figlet_format("Divination", "rectangles")
```

### RGB Console Colors
Another thing we can change is the color of the text! This is set using the [RGB color model](https://en.wikipedia.org/wiki/RGB_color_model), currently:

```py
(255, 127, 255)
```

- The first number is the amount of **R**ed in the color
- The second number is the amount of **G**reen in the color
- The third number is the amount of **B**lue in the color

Update the numbers to find a new color! Try to make it yellow, orange, red, or blue-green.

The new line of code may look something like this:

```py
header = color(title, fore=(255, 255, 0))
```

## Part Two: The Sign
Now, the application should be a bit more personalized. It's still not doing much though! It's time for some divination.

_Uncomment_ the two lines under the `print` so that they run (basically, remove the `# ` at the beginning). The two lines should look like this:

```py
sign = "Aries"
print_data(sign)
```

Make sure there is not an extra space at the beginning of the line! Then, run the program to see what happens.

### What Happens
Right now, the program will just print information about one sign: `"Aries"`. This works if you happen to be an Aries, but it may not work for others. One option would be to change the code, but other people who want to use this app may not have coding knowledge! What should we do?

### Getting the User's Sign
We can use the `input` function to get the sign from the user.

1. Remove the `"Aries"` value - but keep the `sign =` part!
1. Instead of setting the `sign` variable to `"Aries"`, set it to an `input` call
1. Make sure to add the parentheses `()` at the end of the `input`
1. Within the parentheses, add quotation marks `""`
1. Within the quotation marks, ask the user to enter their sign!

Run the program again. This time, it will be necessary to enter a sign into the console! Enter a new sign, and make sure the proper data is displayed.

The code for this part should look something like this:

```py
sign = input("Please enter your sign: ")
print_data(sign)
```

## Part Three: Daily Horoscope
Now the app is very customized! But we can do even more. We want to get a daily horoscope for the user based on their sign.

Uncomment the last few lines of the file (removing the `# `):

```py
color_for_text = "Sea Green"

print("Consulting the oracles for daily guidance...")
print_daily(sign, color_for_text)
```

### What Happens
Run the program to see what happens! If you wait a while, after entering the sign, it should print out a unique daily horoscope. But what color is it going to be? Right now, it will always be `"Sea Green"` - but we want the user to be able to tell us what color to use!

### Getting the User's Color
Like with the sign, we can use the `input` function to get the color from the user.

1. Remove the `"Sea Green"` value - but keep the `color_for_text =` part!
1. Instead of setting the `color_for_text` variable to `"Sea Green"`, set it to an `input` call
1. Make sure to add the parentheses `()` at the end of the `input`
1. Within the parentheses, add quotation marks `""`
1. Within the quotation marks, ask the user to enter their color

Run the program again. This time, it will be necessary to enter both a sign _and_ a color into the console! Enter a different color, and make sure the horoscope is displayed in all its technicolor brilliance!

The code for this part should look something like this:

```py
color_for_text = input("Please enter a color for your horoscope: ")

print("Consulting the oracles for daily guidance...")
print_daily(sign, color_for_text)
```

## Part Four: Lucky Numbers
In addition to all the wonderful custom information being displayed, the user may also want to see their lucky numbers based on their sign. Luckily, the `astrology` library has a function for this!

1. Make a new line at the end of the **main.py** file
1. There, type the `print_numbers` function name
1. Add parentheses `()` to the end of it to call the function
1. Within the parentheses, type `sign`  
    - This will pass the sign the user entered

Run the program one more time, and make sure the Lucky Numbers show up! The code for this part should look something like this:

```py
print_numbers(sign)
```

## Conclusion
That's all! In this code-along, you uncommented code, used `input`, and called library functions to significantly enhance an existing application.

### Final Code
By the end of the activity, the **main.py** file should look something like this:

```py
from colr import *
from pyfiglet import *
from astrology import *

# go to https://devhints.io/figlet for more fonts
title = figlet_format("Divination", "cybermedium")
header = color(title, fore=(255, 127, 255))

print(header)

sign = input("Please enter your sign: ")
print_data(sign)

color_for_text = input("Please enter a color for your horoscope: ")

print("Consulting the oracles for daily guidance...")
print_daily(sign, color_for_text)

print_numbers(sign)
```
