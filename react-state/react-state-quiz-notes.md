# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions that are only available while React is rendering. They let you "hook into" different React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be called at the top level of your component or your own Hooks. Cannot be called within conditions, loops or other nested functions

- What is the purpose of state in React?
  state allows React to remember information between renders

- Why can't we just maintain state in a local variable?
  local variables don't persist between renders and changes to a local variable wont trigger renders

- What two actions happen when you call a `state setter` function?
  it can update the state variable and trigger React to render the component again

- When does the local `state variable` get updated with the new value?
  state variable gets updated during the next render

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
