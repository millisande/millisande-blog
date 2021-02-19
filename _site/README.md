# Millisande Bath Page

This is the readme of a github pages website which is being used to test the functionality of github pages

Because I am using the "tags" Jekyll generator provided in the [Sidey Jekyll theme](https://github.com/ronv/sidey) I needed to remove the github pages support in the gemfile. This means that github won't run build when it gets pushed because of security concerns.

This means that before pushing changes the change must be built locally first. Follow the testing locally steps before attempting to push changes.

## How to run locally for testing

- As detailed in the github docs https://help.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll you will need to install Jekyll (follow the Jekyll instructions https://jekyllrb.com/docs/installation/)
- Run `bundle install`
- Run `bundle exec jekyll build`
- Run `bundle exec jekyll serve`
- Go to localhost:4000 to view
