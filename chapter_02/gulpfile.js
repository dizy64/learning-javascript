const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require('gulp-eslint');

const defaultTask = async function() {
  await gulp.src(["es6/**/*.js", "public/es6/**/*.js"]).pipe(eslint()).pipe(eslint.format())
  await gulp.src("es6/**/*.js").pipe(babel({ presets: ["@babel/env"]})).pipe(gulp.dest("dist"))
  await gulp.src("public/es6/**/*.js").pipe(babel({ presets: ["@babel/env"]})).pipe(gulp.dest("public/dist"))
}

gulp.task("default", () =>
  defaultTask()
);
