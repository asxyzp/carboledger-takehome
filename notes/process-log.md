# Development Process Log for CarbonEx

Condidering the context, detailed requirements, and technical requirements, these are the logs on the steps taken to develop this application:

## Log 0 (August 19, 23:00)

- Creating the application setup using CRA and removing the default files that are unnecessary and renaming files that are necessary.
- Creating a basic structure of the application (e.g. Context, Component, Layout, Page, Style etc).

## Log 1 (August 19, 23:40)

- Selecting appropriate theme for CarbonEx UI using [MUI theme creator tool](https://zenoo.github.io/mui-theme-creator/).
- Setting up MUI Theme for the application.

## Log 2 (August 20, 00:51)

- Testing the MUI theme.
- Setting up Recoil.js: Adding <RecoilRoot></RecoilRoot> to wrap <Routes.js> & theme atom to `/src/Context/atoms.js`.
- Setting up Navigation layout.
- Importing Button & IconButton components.
- Creating Modal & ModalRouter components.

## Log 3 (August 20, 11:36)

- Added different state components: Loading, Error, Empty, etc.
- Adding setup instructions in readme file.
