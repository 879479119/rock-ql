import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import {terser} from 'rollup-plugin-terser'
import builtins from 'rollup-plugin-node-builtins'
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

const config = {
  input: 'index.js',
  // browser-friendly UMD build
  output: {
    format: 'cjs',
    name: 'index',
    file: pkg.main,
  },
  plugins: [
    postcss({
      extract: true
    }),
    typescript({module: 'CommonJS'}),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    // allows the node builtins to be required/imported.
    // Doing so gives the proper shims to support modules that were designed for Browserify
    builtins(),
    terser(),
    // resolve({
    //   browser: true,
    //   module: false,
    // }),
    commonjs({extensions: ['.js', '.ts', '.tsx']}),
  ],
}

export default config
