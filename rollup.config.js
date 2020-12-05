import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/index.ts",
	plugins: [
		typescript(),
	],
	output: [
		{
			format: "esm",
			file: "lib/index.esm.js",
		},
		{
			format: "cjs",
			file: "lib/index.js",
		},
		{
			format: "iife",
			name: "Faykah.emails",
			file: "lib/index.browser.js",
		},
		{
			format: "iife",
			name: "Faykah.emails",
			file: "lib/index.browser.min.js",
			plugins: [
				terser(),
			],
		},
	],
};
