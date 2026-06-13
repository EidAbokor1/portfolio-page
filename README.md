# Eid Abokor Portfolio

A static portfolio website for Eid Abokor, focused on platform engineering, AWS, Kubernetes, Terraform, GitOps, observability, and infrastructure automation.

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
