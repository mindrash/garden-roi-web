#!/bin/bash
SLUGS=$(cat slugs.txt)
ORPHANS=""
LINKED=""

for SLUG in $SLUGS; do
  FOUND=$(grep -r "href=" src/content src/pages --include="*.md" --include="*.astro" | grep "$SLUG" | grep -v "src/content/articles/$SLUG.md" | wc -l)
  if [ $FOUND -gt 0 ]; then
    LINKED="$LINKED $SLUG"
  else
    ORPHANS="$ORPHANS $SLUG"
  fi
done

echo "--- ORPHANS ---"
for o in $ORPHANS; do echo "$o"; done
echo ""
echo "--- LINKED ---"
for l in $LINKED; do echo "$l"; done
