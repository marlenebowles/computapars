## About Computapars

Computapars is a react component design system using Lerna for package management, Jest for testing, Storybook for exploring. It's currently being deployed through Zeit Now but there are other options.

Each "package" is a component with its own set of tests. Each package can be individually installed in a project through npm or yarn.

## Scripts

To get started with this repo:

```
yarn install
```

```
yarn run storybook
```

This will run storbook locally on port 5555, if you are trying to deploy a static version of the compiled storybook assets.

```
yarn run build-storybook
```

The assets in the .out directory can be placed were you host your static assets.

## Todo

-   npm package registry vs github
-   add directions on how to pubish
-   add stuff about token
