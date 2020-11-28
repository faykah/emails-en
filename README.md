# @faykah/emails-en

Emails data set in English.

## Summary

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)

## About

[Faykah](https://github.com/faykah/core) is a Node.js library that help create generators for various data.

This library contains a data set of English emails suited for mocking and testing emails.

## Features

- Provides a variables containing a lot of emails for testing purposes
- Provides a browser version
- Provides its own Typescript types

## Installation

Using NPM:

```bash
npm install --save-dev @faykah/emails-en
```

Using Yarn:

```bash
yarn add --dev @faykah/emails-en
```

## Examples

- [1. Create an array generator](#1-create-an-array-generator)
- [2. Standalone usage](#2-standalone-usage)

### 1. Create an array generator

In this example, we will use [@faykah/core](https://github.com/faykah/core) to create an email generator, which will then let us generate random emails.

ES6

```ts
import { createArrayGenerator } from "@faykah/core";
import { emails } from "@faykah/emails-en";

const generateEmail = createArrayGenerator(emails);

generateEmail(); // "john.doe@example.com"
generateEmail(); // "foo@bar.com"
```

CJS

```js
const { createArrayGenerator } = require("@faykah/core");
const { emails } = require("@faykah/emails-en");

const generateEmail = createArrayGenerator(emails);

generateEmail(); // "john.doe@example.com"
generateEmail(); // "foo@bar.com"
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/core@0.1.0/lib/index.browser.min.js" defer></script>
	<script type="text/javascript" src="https://unpkg.com/@faykah/emails-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		const generateEmail = Faykah.createArrayGenerator(Faykah.emails);

		generateEmail(); // "john.doe@example.com"
		generateEmail(); // "foo@bar.com"
	</script>
</body>
```

### 2. Standalone usage

In this example, we will simply loop over the emails to understand you what it contains.

ES6

```ts
import { emails } from "@faykah/emails-en";

for (const email of emails) {
	console.log(email);
}
```

CJS

```js
const { emails } = require("@faykah/emails-en");

for (const email of emails) {
	console.log(email);
}
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/emails-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		for (const email of Faykah.emails) {
			console.log(email);
		}
	</script>
</body>
```