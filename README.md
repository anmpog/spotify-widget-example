# Explanation

This is a small companion repo to the blog series on my personal site that details how to consume the Spotify API in pursuit of making a small widget for a developer's portfolio site.

The blog posts that go with this detail how to register and authorize an application on the Spotify developer portal. They also discuss the particular structure of this application, namely the decision to store the Spotify refresh token in an environment variable so that the serverless function that proxies requests from the client to the Spotify API. This decision means that our application requests an access token on every request to the Spotify API – one to get a new access token, and another to get the data we want from the API.

The format of this repository is such that there are 4 branches: the `main` branch, which contains the finished application and should be functional. There are 3 other branches that track the blog posts detailing the building of the application, and each should reflect the status of the application as it appears in each respective blog post. To be fair, there's not really a lot of difference between the `part-1` and `part-2` branches – the bulk of the application comes together in `part-3`. The `part-3` branch should be identical to the `main` branch.

## Prerequisites

In order to run this project locally and use the Netlify functions, you need to install the Netlify CLI. To do so, see [the documentation here](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/). Netlify CLI will allow you to run your client app and serve your serverless function so you can test it locally.

You do not have to use an API client to help with authenticating your application but I recommend using one. I used [Bruno](https://www.usebruno.com/downloads) to make things simpler for myself.
