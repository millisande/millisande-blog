# Millisande Bath Puzzle Game Blog

A functional blog site built using Jekyll and hosted by Github pages.

All views on Puzzle Games were written by the author and reflect just her own views. 

This is an adaption of [Sidey Jekyll theme](https://github.com/ronv/sidey).

### Prerequisites

In order to edit, run or test the blog website you will need to have installed the following:

- [Git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Jekyll and Ruby installed](https://jekyllrb.com/docs/installation/)

### How to run the blog locally

1. Use git to clone this repo and navigate a terminal to the root level of the repository
2. Run `bundle install` to install the necessary ruby files listed in the gem file
3. Run `bundle exec Jekyll serve` which will set up a server to host the static files and which will update the hosted files when the files are changed (hot reload)
4. Navigate to localhost:4000 in your browser of choice

## How to publish changes

Because I am using the "tags" Jekyll generator provided in the [Sidey Jekyll theme](https://github.com/ronv/sidey) I needed to remove the github pages support in the gemfile. This means that github won't run build when it gets pushed because of security concerns.

This means that before pushing changes the change must be built locally first. Follow the testing locally steps before attempting to push changes.

1. Run `bundle exec jekyll build` in the root level of the directory
2. Add all the changes, git commit and git push
