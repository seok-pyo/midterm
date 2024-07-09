#!/bin/sh
#

for i in `cat ./students.txt | grep -v "#"`
do
  echo $i
  node ${i}.test.js
  sleep 2
done
