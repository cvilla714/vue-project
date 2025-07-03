const esbuild = require('esbuild');
const vuePlugin = require('esbuild-plugin-vue3');
const { argv } = require('process');
const path = require('path');

const watchMode = argv.includes('--watch');

const options = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  plugins: [vuePlugin()],
  loader: {
    '.js': 'jsx',
    '.vue': 'jsx',
  },
  alias: {
    vue: path.resolve('./node_modules/vue/dist/vue.esm-bundler.js'),
  },
  define: {
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
};

if (watchMode) {
  esbuild
    .context(options)
    .then((context) => {
      context.watch();
      console.log('Watching for changes...');
    })
    .catch(() => process.exit(1));
} else {
  esbuild.build(options).catch(() => process.exit(1));
}
