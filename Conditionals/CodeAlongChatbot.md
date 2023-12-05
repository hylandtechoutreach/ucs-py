# Code-Along: Chatbot
In this activity, create a simple [chatbot](https://en.wikipedia.org/wiki/Chatbot) that can respond to some basic messages.

[**Click here to view the Repl project.**](https://replit.com/@HylandOutreach/PythonBot) Fork the project to begin.

## Part One: Prompt For Message
The first thing to do is ask the user to input a message. This is possible by creating a new variable, and using `input`.

1. Open the **main.py** file for editing
1. Create a new variable named `message`
1. Set the `message` variable to an `input` function call
1. Make the text for the prompt say `"Please enter a message: "`

The added Python code should look something like this:

```py
message = input("Please enter a message: ")
```

Run the code, and verify that a prompt appears asking for a message. Nothing should happen when entering a message yet though!

## Part Two: Responding to the Message
Next, the chatbot should respond to certain messages the user enters. This is where `if` statements come in: the response should be different depending on the message.

To start, have the chatbot respond to a message of "Hi" from the user.

1. Open the **main.py** file for editing
1. Make a new line at the bottom of the file
1. There, create an `if` statement with the `if` keyword
1. For the `if` condition, check if the user said "Hi"
    - Use `message` variable, `==`, and `"Hi"` to compare
1. Make a new line, and make sure it is _indented_
1. There, display a message saying "Greetings, human"
    - Use `print("Greetings, human")`

The added Python code should look something like this:

```py
if message == "Hi":
  print("Greetings, human")
```

Run the code. Enter "Hi" as the message, and verify that the proper response appears! If any other message is entered, no response should appear.

## Part Three: More Responses
The chatbot is functional, but it is not very powerful yet. It needs to be able to respond to some more messages! Add a couple more responses using `if` statements.

| Message | Response |
|-|-|
| I love you | Does not compute |
| Can I have a hug? | INITIATING HUG PROTOCOL 🤗 |

These `if` statements will look very similar to the previous `if` statement. For each of the responses, follow these steps:

1. Have the **main.py** file open for editing
1. Make a new line at the bottom of the file
1. Add an `if` keyword
1. For the condition after the `if`, check if `message ==` the given message
1. In the body (indented on the next line), add the `print` with the response

The added Python code should look something like this:

```py
if message == "I love you":
  print("Does not compute")

if message == "Can I have a hug?":
  print("INITIATING HUG PROTOCOL 🤗")
```

Run the code, try out each of the messages. Make sure to enter them exactly right, with proper punctuation/capitalization/etc. Each message should produce the correct response!

## Final Code
By the end of the activity, the code should look something like this:

```py
print("Welcome to the chat 🤖")
print()

message = input("Please enter a message: ")

if message == "Hi":
  print("Greetings, human")

if message == "I love you":
  print("Does not compute")

if message == "Can I have a hug?":
  print("INITIATING HUG PROTOCOL 🤗")
```

## Next Steps
After the basic code-along activity has been completed, work on some of these additional features.

### Even More Responses
There is always room for more responses to be added to the chatbot! Come up with some original ones, or use this list as a basis. Each new response should use a similar `if` statement structure:

```py
if message == "MESSAGE":
  print("RESPONSE")
```

Add several responses to make the chatbot more lifelike.

| Message | Response |
|-|-|
| What's up? | Nothing. |
| How are you | I am fine. |
| Sing a song | Mary had a little lamb 🎶 |
| What is 1+1 | 1+1 is 2. |
| What is 1+2 | 1+2 is 3. |
| Tell me a joke | I'm against picketing, but I don't know how to show it. |
| Give me a quote | You miss 100% of the shots you take |
