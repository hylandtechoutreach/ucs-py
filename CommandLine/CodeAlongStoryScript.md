# Code-Along: Story Script
Follow these instructions to turn your story from the [warm-up activity](WarmUpStory.md) into a Python script!

[If needed, click here for the starter project.](https://replit.com/@HylandOutreach/MagicalPythonStory)

## Background: Starter Code
There are a couple lines of code that should already be in the **main.py** file:

```py
import time
```

This command imports the [`time`](https://docs.python.org/3/library/time.html) library. This will allow python to [`sleep`](https://docs.python.org/3/library/time.html#time.sleep) - basically, to wait some number of seconds before running the next command.

```py
# Story will go below
```

This line is a code comment - basically, a line of code that does nothing, but can provide context or insight to the person reading the code.

It's up to you to add the code for the story below!

## New Code
Follow the steps below to fill out the script.

1. Re-open the forked project from the warm-up activity
  - If needed, fork another project using the link above
1. Open the **story.txt** file for editing
1. Highlight the first line of the story, and copy it
1. Open the **main.py** file for editing
1. At the bottom of the file, add a new line
1. There, add a `print` statement to print out the first line of the story  
  ```py
  print("Once upon a time...")
  ```
1. Make a new line under that
1. There, add a `time.sleep` statement to wait for `1` second  
  ```py
  time.sleep(1)
  ```

Repeat the steps above for each line of the story!

## Final Code
By the end of the activity, the code in the **main.py** file should look something like this:

```py
import time

# Story will go below
print("Once upon a time...")
time.sleep(1)
print("There was a magical python.")
time.sleep(1)
print("She cast a spell on everyone and made them dance.")
time.sleep(1)
print("Everyone had a pretty good time.")
time.sleep(1)
print("The end.")
```
