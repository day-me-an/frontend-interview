# Frontend interview

Build a basic React frontend for the [StarWars API (SWAPI)](https://swapi.dev/documentation) that allows a user to search for a person by name, then click to open a details page.

The search page should just show the person's name in the list of results.

The details page should show the following details:
- Name
- Gender
- Height
- Mass
- Birth year
- Date record was created and edited in format `2006-01-02 15:04`

The details page should contain a "Share" button that uses the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) to show a native sharing dialog to the user if their browser supports this feature.

## Acceptance criteria
- User can input a search string into a text field.
- A list of matching people is shown based on their search input.
- User can open a details page by clicking a person in the search results.
- User can also navigate directly to the details page via a URL.
- User can share the URL of the details page by clicking a button to open a native sharing dialog.
- Error, loading and empty states are handled.