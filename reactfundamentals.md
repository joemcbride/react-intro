# React Fundamentals

^ In this talk I will introduce to to React, _why_ you would want to use it, and how to get started.

---

# Joe McBride / @uicraftsman / github.com/joemcbride

^ I am a full-stack developer at Towers Watson.  I am currently working on transitioning a large Angular application to React.

---

# React

- Facebook + Instagram
- Open Source since Fall 2013

---

# [This is React](https://jsfiddle.net/guk7mm72/3/)

---

# Why React?

---

# Speed
- super fast rendering
- virtual DOM

^
* 60fps in non-JIT UIWebView on iPhone 5 - PhoneGap.
* Bottleneck is usually never the diffing its the DOM operations.

---

# Declarative
- easier to understand
- fewer bugs
- all interactions are in one place

---

# Composable
- simple input / output
- easy to combine components together

---

# Architecture

---

![inline](http://i.imgur.com/RIPyYGy.png)

^
* Props (external component state) & State (internal component state) get used to render the component.
* React renders the component to the DOM.
* DOM Events can be handled in component to change state, which re-renders the component.
* Synthetic DOM events.  HTML5 events in IE8.

---

# Working with State

---

# How does it compare?

---

# React compared to Angular or Ember
- Full featured libraries
- Provide everything needed to built an application
- Routing, two-way binding

---

# React compared to Backbone
- Full featured library
- Routing
- Imperative way of describing how changes effect the view

---

# Building Components

---

# Environment
- Webpack - combine and transform javascript into one file
- Babel - transfrom JSX and ES6 to ES5
- Node / Express

---

# Blog

- Post - title, text
- List of Posts

---

```javascript
class Post extends React.Component {
  render() {
    return (
      ...
    );
  }
}
Post.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};
```

---

```javascript
class PostList extends React.Component {
  render() {
    return (
      ...
    );
  }
}
PostList.propTypes = {
  posts: React.PropTypes.array.isRequired,
};
```
---

# Next Steps

* Flux
* Isomorphic Flux (Fluxible)
* Relay + GraphQL
* React Native (iOS & Android)

---

# Resources

- http://facebook.github.io/react
- [Pete Hunt: React: Rethinking best practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
- http://fluxible.io/
- https://medium.com/@dan_abramov

---

# React Fundamentals
