# Eid Abokor Portfolio

A static portfolio website for Eid Abokor, focused on platform engineering, cloud infrastructure, Kubernetes, infrastructure as code, GitOps, observability, and automation.

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy On Netlify

Netlify Deploy Previews are created automatically for pull requests or merge requests after the repository is connected to Netlify.

1. Push this folder to a Git provider such as GitHub.
2. In Netlify, choose **Add new site** and import the repository.
3. Use these build settings:
   - Build command: leave empty
   - Publish directory: `.`
4. Open a pull request from a feature branch. Netlify will create a Deploy Preview URL for that PR.

The included `netlify.toml` stores the publish directory and security headers, so Netlify can detect the site settings from the repository.
# portfolio-page

## Engineering stories

`work.html` groups the story log into five project areas: CDK orchestration; S3 attribution, cost analysis, and concurrency; Application delivery and recovery (with related golden-path work); AI reviewer platform; and Wiz automation. Ongoing platform ownership appears as context. The page is linked from the main navigation and the homepage projects section. Shared layout and theme behaviour use `styles.css` and `script.js`; story styling and optional topic filtering use `work.css` and `work.js`. The projects and expandable details remain readable without JavaScript.

Content is adapted from the [Platform Engineering Story Log](https://app.notion.com/p/Platform-Engineering-Story-Log-3ea9610d132e81208665de2e7497f5f6), reviewed on 30 September 2026. This is a static snapshot, not a live Notion integration. Keep measured results, estimated cost avoidance, and ongoing goals distinct when updating it. Each project and its subtopics have stable IDs for direct links; opening a direct link reveals the project details and clears a filter if needed. A project may belong to more than one topic filter.
