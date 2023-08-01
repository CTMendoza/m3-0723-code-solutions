# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  when we want to display a collection of data that might be deleted or edited over time.
- Why is it important for React components to be data-driven?
  because the components in React are influenced by the flow of data that is used in an application. User interactions triggger data updates and other side-effects that then flow back to the UI.
- Where in the component code would a list of React components typically be built?
  within a callback function thats passed as an argument of the .map() method
- What `Array` method is commonly used to create a list of React components?
  the .map() method
- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
- What is the best value to use as a "key" prop when rendering lists?
  a string or a number value

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
