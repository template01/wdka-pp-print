#!/bin/bash

sass --watch style/sass/:style/css --style compressed &
livereload -p 9000 -w 01

exit 0
