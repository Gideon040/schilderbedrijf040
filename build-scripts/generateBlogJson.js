"scripts": {
  "build:blog": "node build-scripts/generateBlogJson.js",
  "build": "npm run build:blog && next build"
} 