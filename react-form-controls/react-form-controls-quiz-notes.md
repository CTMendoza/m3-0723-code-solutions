# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  For controlled elements, React takes control of the form data and maintains the state of the form element. The component decides when and how to update the state, and it re-renders itself based on the state changes.

For uncontrolled elements, a form element in a component is controlled by the DOM. The DOM decides the state of the input element and updates it based on a user's input.

- What are some advantages of using uncontrolled components?
  components don't have to re-render
- What are some advantages of using controlled components?
  The UI and the data are in sync
  Form data can be passed between different components

- Which style do you prefer?
  Controled components as they are easier to access the form data where you can just access the input values by the state variable associated with it

- What two props must you pass to an input for it to be "controlled"?
  value and onChange
- What are some popular npm packages for creating forms in React?
  React Hook Form, Formik, React Final

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
