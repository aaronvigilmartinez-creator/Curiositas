"""
Beacon Keeper

The Beacon Keeper receives Canonical Data Beacons
and adds them to the Canonical Registry.

Curiositas Supra Omnia.
"""
import csv

def load_canon():

    beacons = []

    with open("canon.csv", newline="") as canon:

        reader = csv.DictReader(canon)

        for row in reader:
            beacons.append(row)

    return beacons


beacons = load_canon()

print("🐝 Beacon Keeper initialized.")
print()

for beacon in beacons:
    print(beacon["number"], "-", beacon["name"])

print()
print("Hive Size:", len(beacons))