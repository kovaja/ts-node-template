#!/usr/bin/env bash

set -e

# Ensure argument is provided
if [ -z "$1" ]; then
  echo "Usage: ./publish.sh [patch|minor|major]"
  return 1
fi

# Ensure valid argument
if [[ "$1" != "patch" && "$1" != "minor" && "$1" != "major" ]]; then
  echo "Invalid argument. Use: patch | minor | major"
  return 1
fi

# Update version in package.json
new_version=$(npm version "$1" --no-git-tag-version)

echo "Updated version to: $new_version"

## Commit the change
git add . 2>/dev/null || true
git commit -m "new version $new_version"

## Create tag
git tag "$new_version"

## Push commit and tag
git push
git push origin "$new_version"

echo "Published version: $new_version"
