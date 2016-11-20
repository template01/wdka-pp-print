#!/bin/bash

sass --watch style/sass/:style/css --style compressed &
livereload -p 9000

exit 0
