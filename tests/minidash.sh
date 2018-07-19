#!/usr/bin/env bash

if [ $# -ne 4 ]
then
	echo ""
	echo "syntax: $0 <icon> <name> <value> <status>"
	echo ""
	exit 1
fi

curl -X POST --include -F "msg=$(</dev/stdin)" http://localhost:3000/measure/$1/$2/$3/$4

