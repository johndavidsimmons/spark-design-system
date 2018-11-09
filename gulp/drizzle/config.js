module.exports = {
  'css:toolkit': {
    src: './src/assets/toolkit/styles/*.css',
    dest: './dist/assets/toolkit/styles',
    name: 'css:toolkit',
  },

  'css:drizzle': {
    src: './src/assets/**/drizzle.css',
    dest: './dist/assets',
    prefix: 'drizzle-',
    name: 'css:drizzle',
  },

  copy: {
    src: './src/static/**/*',
    dest: './dist',
  },
  images: {
    src: './src/assets/toolkit/images/*.*',
    dest: './dist/assets/toolkit/images',
  },
  js: {
    plugins: {
      webpack: {
        entry: {
          'babel-polyfill': './src/assets/drizzle/scripts/drizzle.js',
          // Drizzle UI scripts
          'drizzle/scripts/drizzle': './src/assets/drizzle/scripts/drizzle.js',
          // Common toolkit scripts
          'toolkit/scripts/toolkit': './src/assets/toolkit/scripts/toolkit.js',
          'toolkit/scripts/toolkit-prerender': './src/assets/toolkit/scripts/toolkit-prerender.js',
        },
        output: {
          path: './dist/assets',
          filename: '[name].js',
        },
        module: {
          loaders: [
            {
              test: /\.js$/,
              loaders: ['babel-loader'],
            },
          ],
        },
        devtool: 'source-map',
        externals: {},
      },
    },
  },

  serve: {
    plugins: {
      browserSync: {
        open: false,
        notify: false,
        files: ['./dist/**/*'],
        server: { baseDir: './dist' },
      },
    },
  },

  watch: {
    watchers: [
      {
        match: ['./src/static/**/*'],
        tasks: ['copy'],
      },
      {
        match: [
          './src/assets/**/*.scss',
          './packages/spark-core/**/*.scss',
          './packages/spark-extras/**/*.scss',
          '!./src/angular',
        ],
        tasks: ['sass'],
      },
      {
        match: [
          './src/assets/drizzle/**/*.js',
          '!./src/angular',
        ],
        tasks: ['js'],
      },
      {
        match: [
          './src/**/*.hbs',
          './src/data/**/*',
          './src/**/*.yaml',
          './src/**/*.md',
          '!./src/templates/drizzle/spark-core-icons.hbs',
          '!./src/angular',
        ],
        tasks: ['drizzle'],
      },
      {
        match: [
          './packages/spark-core/{base,components,objects,settings,tools,utilities}/**/*.js',
          './packages/spark-core/*.js',
        ],
        tasks: ['build-spark-core'],
      },
      {
        match: [
          './packages/spark-extras-highlight-board/*.js',
        ],
        tasks: ['build-spark-extras-highlight-board'],
      },
      {
        match: [
          './src/angular/projects/spark-core-angular/src/lib/**/*.ts',
        ],
        tasks: ['build-spark-core-angular-silent'],
      },
    ],
  },

  drizzle: {
    beautifier: {
      /* eslint-disable camelcase */
      indent_char: ' ',
      indent_size: 2,
      indent_with_tabs: false,
      max_preserve_newlines: 1,
      wrap_line_length: 0,
      unformatted: `a abbr acronym address b bdo big cite code col del dfn dt em font
        h1 h2 h3 h4 h5 h6 i img ins kbd mark pre q s samp small span
        strike strong sub sup tt u var`.split(' '),
      /* eslint-enable camelcase */
    },
    src: {
      patterns: {
        basedir: './src/patterns',
        glob: './src/patterns/**/*.hbs',
      },
      templates: {
        basedir: './src/templates',
        glob: './src/templates/**/*.hbs',
      },
    },
    dest: {
      pages: './dist',
      patterns: './dist/patterns',
    },
    fieldParsers: {
      notes: 'markdown',
    },
  },
};
