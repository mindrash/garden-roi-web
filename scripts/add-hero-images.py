import os, re

slugs = [
  "lemon-balm","lemongrass","lettuce","lima-bean","lovage","mache","marjoram","mint",
  "mustard-greens","napa-cabbage","nasturtium","okra","onion","oregano","parsley","parsnip",
  "potato","pumpkin","purslane","radicchio","radish","raspberry","rhubarb","romanesco",
  "rosemary","rutabaga","sage","scallion","shallot","snap-pea","sorrel","spinach","stevia",
  "strawberry","sunflower","sweet-pepper","sweet-potato","swiss-chard","tarragon","tatsoi",
  "thyme","tomatillo","tomato","turnip","watercress","watermelon","winter-squash","zucchini"
]

base = "/Users/tlawson/projects/garden-roi-web/src/content/plants"

for slug in slugs:
    path = f"{base}/{slug}.md"
    if not os.path.exists(path):
        print(f"  MISS  {slug}")
        continue
    with open(path) as f:
        content = f.read()
    matches = [m.start() for m in re.finditer(r'^---', content, re.MULTILINE)]
    if len(matches) < 2:
        print(f"  SKIP  {slug} (no closing ---)")
        continue
    if "hero_image" in content[:matches[1]]:
        print(f"  DUPE  {slug}")
        continue
    insert_pos = matches[1]
    new_line = f"hero_image: /images/crops/{slug}.webp\n"
    content = content[:insert_pos] + new_line + content[insert_pos:]
    with open(path, "w") as f:
        f.write(content)
    print(f"  OK    {slug}")
