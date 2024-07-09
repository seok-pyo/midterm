#!/bin/sh
#

for i in `cat ./students.txt | grep -v "#"`
do
  echo $i
  head -15 ${i}.test.js
  sleep 1
done
