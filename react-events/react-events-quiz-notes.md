# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  events are usually user interactions with a web app that trigger a change to the web app

- What is an "event handler"? Which component declares the handler?
  They are custom functions that are called in response to user interactions on the web app. The parent component declares event handlers

- How do you pass an event handler to a React component?
  First you have to define the event handler function then pass it as a prop to the jsx element.

- What is the naming convention for event handlers?
  Usually it will named with the word handle followed by the event type

- What is an "event handler prop"? Which component declares the prop?
  An event handler prop is a prop that is passed an event handler from a different component usually from it's parent component. The child component declares the prop
- What are some custom event handler props a component may wish to define?
  the onClick event handler prop
- What is the naming convention for custom event handler props?
  based on app-specific interactions i.e onPlayMovie, onUploadImage

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
