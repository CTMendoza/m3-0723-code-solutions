# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
During the intial render of the component i.e. when it appears on the screen for the first time
- What is a React Effect?
React Effect allows components to connect and sychronize with external systems such as various apis and servers to get and post data
- When should you use an Effect and when should you not use an Effect?
You should use an Effect when rendering a component should trigger a connection to a third party source.
You shouldn't need an Effect if no external systems are involved with your components render
- When do Effects run?
Effects run after React commits a render of the component
- What function is used to declare an Effect?
the setup function
- What are Effect dependencies and how do you declare them?
Effect dependencies tell React to skip re-running an Effect function after every re-render of the component. You declare them as the second arguemnet of your use Effect function and they are held within an array
- Why would you want to clean up from an Effect?
You would want to clean up from an Effect if you want to disconnect from an external source when the component is dismounted
- How do you clean up from an Effect?
after the return statement, you write an arrow function with code inside.
- When does the cleanup function run?
React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed)

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
