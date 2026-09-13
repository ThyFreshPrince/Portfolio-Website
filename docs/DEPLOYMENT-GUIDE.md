# UNC Charlotte Portfolio Deployment Guide

## What to upload
Upload the **contents of this website folder**, not the outer folder itself. The file named `index.html` must be at the top level of your personal web space.

Top-level items:
- `index.html`
- `projects.html`
- `project-truss.html`
- `archive.html`
- `about.html`
- `404.html`
- `assets/`

Do not rename `index.html` or change its capitalization.

## Recommended workflow
1. Keep this entire website folder backed up on your computer.
2. Put the folder in a GitHub repository so every change is versioned.
3. Preview locally by double-clicking `index.html`, or use Visual Studio Code with the Live Server extension.
4. Connect to UNC Charlotte's server with an SFTP client such as FileZilla.
5. Upload all top-level files and the full `assets` folder.
6. Open `https://webpages.charlotte.edu/zdiegelm/` in a private/incognito browser window and test every page.

## FileZilla connection values
- Protocol: SFTP – SSH File Transfer Protocol
- Host: `webpages.charlotte.edu`
- Port: `22`
- Username/password: NinerNET credentials
- Off campus: connect to the UNC Charlotte VPN first

## Safe replacement process
1. Download the current server contents as a backup.
2. Move old files into a local folder named `old-site-backup`.
3. Upload the new site files.
4. Confirm that `index.html` is at the server root.
5. Test desktop and mobile views, résumé download, image lightbox, filters, and email links.

## Adding a new project later
1. Add optimized images to `assets/images/` using lowercase filenames and hyphens.
2. Add project files to `assets/downloads/` only when they are appropriate for public release.
3. Duplicate `project-truss.html` and rename it, for example `project-additive-manufacturing.html`.
4. Replace the page title, summary, tools, challenge, process, results, images, and downloads.
5. Add a project card in `projects.html` and optionally on `index.html`.
6. Test all relative links before uploading.

## Public-release check
Do not publish:
- Student ID numbers
- Grades you do not intend to disclose
- Instructor-only materials or copyrighted course packets
- Proprietary team/sponsor information
- Files that expose other students' personal information
- Broken Canvas links that require a university login
