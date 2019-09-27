### another experiment with Redux + Typescript + Hooks

#### conclusions (sep 2019):

- connected components still very cumbersome to test
- React Testing Library is slighly friendlier with hooks than Enzyme

### Todos:

- update tests
- abstract the todos dictionary logic in a neater way
- create `WithSpinner` hoc for async loading components
- apply error boundaries
- get a faster computer one day because typescript compiler is heavy
- make ajax abortable
  - implicit cancellation can be done with rxjs `switchMap` (redux-observable) / explicitly with `takeUntil(action)`
  - can be done with axios cancel token
  - can be done with fetch API `AbortController`, but cross-browser support isn't great
  - can be done with XMLHttpRequest `abort()`- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort
