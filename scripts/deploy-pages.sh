#!/usr/bin/env bash
# Build the static export and deploy out/ to the gh-pages branch.
# Usage (from anywhere): bash scripts/deploy-pages.sh
set -euo pipefail
cd "$(dirname "$0")/.."

REPO_URL="https://github.com/Zaid1287/stockhours-landing.git"

npm run build
rm -f out/nour/*.jpg   # keep the raw ~5MB screenshots out of the deploy (only opt/ ships)
touch out/.nojekyll    # stop GitHub Pages' Jekyll from stripping the _next/ folder

# Fresh throwaway history each deploy — `next build` recreates out/ (and wipes any .git) anyway.
cd out
rm -rf .git
git init -q
git add -A
git -c user.email="abdulhadi1234knight@gmail.com" -c user.name="Zaid1287" \
  commit -qm "Deploy static export"
git branch -M gh-pages
git remote add origin "$REPO_URL"
git push -f origin gh-pages
echo "Deployed -> https://zaid1287.github.io/stockhours-landing/"
