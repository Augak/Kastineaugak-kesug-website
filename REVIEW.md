# Website refresh — review checklist

This branch contains a static Astro rebuild for review. It does not change the live InfinityFree website.

## Preview
Expected preview URL: https://augak.github.io/Kastineaugak-kesug-website/

## Review on phone and desktop
- Check the homepage hero and portrait crop.
- Open the mobile menu and follow each navigation link.
- Read the biography and check that the personal details are accurate.
- Check the journal topics and external reading links.
- Test the email link and try a slower connection.
- Check keyboard focus and reduced-motion behavior.

## Before public launch
- Confirm biography, education, venture descriptions and instrument details.
- Confirm the headshot URL and final social profile links.
- Add verified awards/certifications only after confirming exact names and dates.
- Generate the final production sitemap and run Lighthouse and real-device checks.
- Build with BASE_PATH=/ for InfinityFree root hosting.
- Back up current htdocs contents before any deployment.

## Review notes
- Portrait is referenced from the current live site so preview can reuse the existing asset.
- No fabricated testimonials, statistics, awards, article publication dates or video embeds have been added.
- Duplicated video embeds and placeholder article links have been removed.
- No WordPress folder or live-host files are modified by this branch.
