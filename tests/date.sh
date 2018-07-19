#!/usr/bin/env bash

while :
do
	./minidash.js clock Date "$(date)" info < /dev/null
	sleep 1
done
