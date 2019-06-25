# Sweet Corner React Components

This is a partial project, only the `src` folder is included. This is intended to be placed into a project setup with React and Webpack, below is a full list of required dependencies, **NOT** including all necessary DEV dependencies.

## Project Dependencies

- @fortawesome/fontawesome-free
- axios
- bootstrap
- react
- react-dom
- react-redux
- react-router-dom
- redux

## Additional Required Webpack Config
*Add this to existing Webpack common config file*

```JAVASCRIPT
resolve: {
    alias: {
        actions: resolve(__dirname, 'src', 'actions'),
        assets: resolve(__dirname, 'src', 'assets'),
        components: resolve(__dirname, 'src', 'components'),
        helpers: resolve(__dirname, 'src', 'helpers')
    }
}
