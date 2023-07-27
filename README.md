Wormhole Docs
-------------

Developer docs for Wormhole

## Contributing

To contribute to the docs, 

1) Fork the repo 
2) Make the change locally and commit it to a new branch 
3) Open a pull request with a description of the change and motivation if necessary
4) Pat yourself on the back, you just helped a bunch of devs :raised-hands:


## Generating Content

There are scripts in the `/scripts` directory that are used to auto-generate content.

See the [README](./scripts/README.md) for details on running these scripts


## Notes

The SUMMARY.md file is VERY picky, if you try to do something like have two top level (h1) headers, the CI job will never finish. If you're restructuring things, make small changes, CI for gitbook should be very fast.

Examples for writing GitBook flavored markdown: 

https://github.com/GitbookIO/git-sync-normalization/blob/master/api-blocks.md
https://support.audacityteam.org/community/contributing/tutorials/gitbook-markdown-syntax

You cannot include a dropdown in a tab or vice versa

Add a new line after the `{% hint %}` directive if you expect formatting like a link to work properly


Use a web utility to scan for dead links like https://www.deadlinkchecker.com/

> Note: Some urls will report 403 error because of geofencing 

