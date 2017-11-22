#!/usr/bin/env bash

while :
do
	./minidash.js cool Cool "O...." info < /dev/null
	sleep 1
	./minidash.js cool Cool ".O..." info < /dev/null
	sleep 1
	./minidash.js cool Cool "..O.." info < /dev/null
	sleep 1
	./minidash.js cool Cool "...O." info < /dev/null
	sleep 1
	./minidash.js cool Cool "....O" info < /dev/null
	sleep 1
	./minidash.js cool Cool "...O." info < /dev/null
	sleep 1
	./minidash.js cool Cool "..O.." info < /dev/null
	sleep 1
	./minidash.js cool Cool ".O..." info < /dev/null
	sleep 1
	./minidash.js cool Cool "O...." info < /dev/null
	sleep 1
done
