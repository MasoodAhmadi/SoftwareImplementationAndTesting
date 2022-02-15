# Webdriver IO

## Installation

Use the package manager npm to install foobar.

```bash
npm install @wdio/cli install foobar
```

then

```bash
npx wdio config
```

## Run

```JavaScript
npx wdio run wdio.conf.js
```

## Reports

change wdio.conf.js file report section to allure after installation package.

```JavaScript
npm install @wdio/allure-reporter --save-dev
```

## Run

```JavaScript
npx wdio run wdio.conf.js && Allure generate allure-results && Allure open allure-report
```
