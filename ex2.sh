#!/bin/bash

while getopts "t:" opt
do
  case "$opt" in
    t)
      if [ "$OPTARG" = "IPv4" ]; then
        pingCommand=$(which ping)
      elif [ "$OPTARG" = "IPv6" ]; then
        pingCommand=$(which ping6)
      else
        echo "Invalid protocol type: $OPTARG"
        echo "Usage: -t IPv4 or -t IPv6"
        exit 1
      fi
      ;;
    *)
      echo "Usage: -t IPv4 or -t IPv6"
      echo "Exiting Script"
      exit 1
      ;;
  esac
done

shift $((OPTIND - 1))

if [ $# -eq 0 ]; then 
  echo -e "\nAddress(es) Parameters are missing"
  echo "Exiting Script"
  exit 1
fi

for ipaddress in "$@"
do
  echo -e "\nChecking system at $ipaddress ...."
  echo
  $pingCommand -nex2_modified -c 3 "$ipaddress"
  echo
done
