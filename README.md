# Bomb Defusers

![](img/bomb_defuser.jpg)

The NYPD has decided that all NYC citizens should be effectively trained in the art of defusing bombs. You've been hired to create a high-tech bomb defusion simulator that will be used to educate the populace!

### Objectives:

1. Use **event listeners** to accept and react to user input
- **Manipulate the DOM** using JavaScript
- ***BONUS OBJECTIVE:*** Use **JavaScript timers** to perform behavior at a specified time or at intervals

### Keep In Mind

**Take this one step at a time.** Get one feature working before you worry about moving onto the next.

**Planning is key.** Always Be Breakin' It Down!

  - Draw out **the flow** of how your program will work before you jump into your code. Try to understand what needs to happen before you worry too much about exactly how to do/write it out.
  - Once you know what steps you need to take, break each step down further and further until you get an "accomplish-able" task.

## Basic Functionality

The basic requirements for your bomb defusion simulator are listed below. Work through implementing these features one at a time. ***Remember to psuedocode and draw out what you're thinking BEFORE YOU CODE A LINE so that you know where you're going before you try to get there!***

### Part One

1. The user should be able to load up a page that displays a series of wires. They should see instructions - what do they need to do in order to defuse the bomb?
- The user should be able to click on a wire to "cut" it in an attempt to defuse the bomb. When clicked, the wire should appear to have been cut so that the user knows they've clicked it.
- If the user clicks the correct wire, they should be informed that they have successfully defused the bomb.
- If the user clicks the incorrect wire, they should be informed that they have failed.
- If the user wins or loses the game, they shouldn't be able to click any more wires...

### Part Two

1. Refactor your logic so that the user must cut the wires in a specific order in order to succeed (example: First cut the red, then blue, then green).
  - Next: Try changing or randomizing this order every time the page is refreshed.
- When the user clicks the "Reset" button, your JavaScript should [reload the page](https://developer.mozilla.org/en-US/docs/Web/API/Window/location).

## Bonus: Countdown!

1. The user should see a countdown clock displayed on their page that counts down from 30 seconds.
- If the countdown clock reaches zero before the user has clicked the correct wire, the user should be informed that they have failed.
- The timer should start only once the user hits the "Start" button.
- If the user fails due to time running out, they should not be able to "cut" any more wires until they reset.
- If the user has not clicked the start button, they should not be able to "cut" any wires.