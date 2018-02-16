import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'lib/bundle-cjs.js',
        format: 'cjs'
      }
    ],
    external: [
      'lodash.isplainobject',
      'lodash.isfunction',
      'babel-runtime/regenerator'
    ],
    plugins: [
      babel({
        include: ['src/*.js']
      })
    ]
  }
];
