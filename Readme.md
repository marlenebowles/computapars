## About Computapars

Computapars is a react component design system using Lerna for package management and Storybook for exploring.
It's currently being deployed through Zeit Now.

Each "package" is a component with its own set of tests. Each package can be individually installed in a project through npm or yarn.

## Scripts

To get started with this repo:

```
yarn install
```

```
yarn run storybook
```

This will run storybook locally on port 5555, if you are trying to deploy a static version of the compiled storybook assets.

```
yarn run build-storybook
now
```

The assets in the .out directory can be placed were you host your static assets.

## To use lerna

Each package uses an upward root mode option to compile js thats pointing to babel.config.js.

In order to publish to npm, login with your credentials

```
npm login
```

Now that you are logged in you should be able to build the packages with.

```
yarn lerna-build
```

This will walk you through the patching versions of each change it detects from the last publish.
It will automatically change the version numbers in corresponding package.json files.

```
lerna publish
```

Publish will also publish to npm if you are logged in.
Make sure to allow public/private access depending on the goal of your monrepo.

## Future Improvements

-   typescript
-   jest testing
