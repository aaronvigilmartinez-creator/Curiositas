"""
The Hive

The Hive stores many Canonical Data Beacons.

Curiositas Supra Omnia.
"""

beacons = [
    {
        "universe": "Garbage Pail Kids",
        "series": "Original Series 1",
        "number": "1a",
        "name": "Adam Bomb"
    },
    {
        "universe": "Garbage Pail Kids",
        "series": "Original Series 1",
        "number": "1b",
        "name": "Blasted Billy"
    },
    {
        "universe": "Garbage Pail Kids",
        "series": "Original Series 1",
        "number": "2a",
        "name": "Nasty Nick"
    },
    {
        "universe": "Baseball",
        "series": "1989 Upper Deck",
        "number": "1",
        "name": "Ken Griffey Jr."
    }
]
print("Welcome to the Hive!")
print()

search_name = "Green Aaron"

found = False

for beacon in beacons:
    if beacon["name"] == search_name:
        found = True
        print("Found!")
        print(beacon)

if not found:
    print("No matching beacon found.")