import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import packageMate from "./package.json" assert {type: "json"};


// @scope/component -> scope-component
const name = JSON.stringify(packageMate.name.replace('@', '').replace('/', '-'));

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: './src/index.ts',
    plugins: [
        replace({
            values: {
                VERSION: JSON.stringify(packageMate.version),
                NAME: name,
                "component-name": name
            },
            preventAssignment:true
        }), typescript(), json(),],
    output: {
        dir: 'lib',
        sourcemap: true,
    }
};

export default config;