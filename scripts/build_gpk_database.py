from pathlib import Path
import pandas as pd
import json

# --------------------------------------------------
# Curiositas Universe Builder
# Mission 002
# --------------------------------------------------

ROOT = Path(__file__).resolve().parent.parent

WORKBOOK = (
    ROOT /
    "data" /
    "gpk" /
    "workbooks" /
    "/Users/aaronvigil-martinez/Documents/Curiositas/data/gpk/workbooks/GPK_Original_Series_Through_Flashback3_Checklist.xlsx"
)

OUTPUT = (
    ROOT /
    "data" /
    "gpk" /
    "json" /
    "gpk_universe.json"
)

print("🌌 Curiositas Universe Builder")
print("--------------------------------")

print(f"Workbook:\n{WORKBOOK}")

excel = pd.ExcelFile(WORKBOOK)

print()
print("Worksheets Found:")
print("-----------------")

universe = {}

for sheet in excel.sheet_names:

    print("⭐", sheet)

    df = pd.read_excel(excel, sheet_name=sheet)

    df = df.fillna("")

    universe[sheet] = df.to_dict(orient="records")

OUTPUT.parent.mkdir(parents=True, exist_ok=True)

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(universe, f, indent=2, ensure_ascii=False)

print()
print("✨ Universe Created!")
print()
print(f"Output:\n{OUTPUT}")