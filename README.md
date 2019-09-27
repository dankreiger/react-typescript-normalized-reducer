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
- make ajax abortable (can be easily done via implicit cancellation `switchmap` or explicit cancellation `takeUntil`/observable unsubscribe in rxjs i.e. `redux-observable`, but find a saga solution for this example)
