1) THIS IS A GIT REPO LIVE AT https://github.com/template01/wdka-pp-print

 - remember to pull and push for changes

2) RUN A LOCAL SERVER WITH LIVERELOAD (python)

  $ livereload -p 9000 -w 01

3) DON'T UPDATE THE .css FILES IN THE style/css DIRECTORY, BUT WORK WITH THE
.scss (SASS) FILES, IN THE style/sass DIRECTORY. SET UP A SASS-WATCHER TO
AUTOMATICALLY DETECT CHANGES AND OUTPUT THESE AS .css FILES.

  $ sass --watch style/sass/:style/css --style compressed

*) ALTERNATIVELY USE THE startup_developer.sh, THAT WILL RUN 2) and 3)

  $ ./startup_developer.sh
