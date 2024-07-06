#!/bin/sh
#

for i in `cat students.txt`; do echo $i; cp -r hoinlee $i; done

for i in `cat students.txt`; do echo $i; cp -r hoinlee.test.js ${i}.test.js; done
