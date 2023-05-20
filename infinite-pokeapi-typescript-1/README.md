# Infinite-PokeAPI-TypeScript

This project demonstrates an implementation of an infinite scroll list of Pokémon using TypeScript and the [PokeAPI](https://pokeapi.co/). The goal is to build the infinite scroll mechanism from scratch and paginate the API requests.

## Requirements

- Implement infinite scroll from scratch
- Paginate API requests
- Load more Pokémon as the user scrolls to the bottom of the list
- Add any libraries as needed, except those that already implement infinite-scroll

## Recommendations

- Utilize custom hooks for better code organization
- Define types for all components and data structures
- Write clear and concise comments to explain complex logic or functionality

## PokeAPI

Retrieve Pokémon list data from https://pokeapi.co/api/v2/pokemon. Implement pagination by adding the `limit` and `offset` query parameters to the API call.

## Getting Started

To set up the app locally, run the following commands:

```shell
$ yarn install
$ yarn dev
```

Open http://localhost:3000 to view the project in the browser.

## Development Tips

- Update App.tsx and any other relevant files to implement the infinite scroll functionality
- Consider creating a custom hook to handle the logic for fetching data and managing the scroll state
- Be mindful of performance and avoid unnecessary re-renders

## Project Structure

This project was bootstrapped with [Vite](https://vitejs.dev/), a build tool and development server for lightning-fast development and optimized production builds.

For more information about Vite and its features, visit the [official documentation](https://vitejs.dev/guide/).
