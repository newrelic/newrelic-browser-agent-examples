<a href="https://opensource.newrelic.com/oss-category/#community-project"><picture><source media="(prefers-color-scheme: dark)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/dark/Community_Project.png"><source media="(prefers-color-scheme: light)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Project.png"><img alt="New Relic Open Source community project banner." src="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Project.png"></picture></a>

# New Relic Browser Agent Examples

This is a collection of example applications instrumented with the New Relic [Browser Agent](https://github.com/newrelic/newrelic-browser-agent). Each example project is self-contained and can be built locally to test the agent in different configurations. Before making use of any example, remember to update the example project with a browser agent configuration that includes a license key and application ID.

## Build

It is recommended to use Docker to build the example projects. You will need to have Docker installed and can run the below command in a terminal to build one of the examples.

```bash
DOCKER_BUILDKIT=1 docker build -f examples/angular12-toh/Dockerfile . \
    -t nr-browser-example \
    --no-cache \
    --build-arg="NR_USER_KEY=<new_relic_user_api_key>" \
    --build-arg="NR_BROWSER_APP_GUID=<browser_entity_guid>"
```

Replace the target `Dockerfile` with the example project you want to build and the build arguments with correct values for your New Relic account. Review [browser_agent.env](./browser_agent.env) for additional build arguments that can be provided. You can use the below command to run the image.

```bash
docker run -it --rm -p 8080:80 nr-browser-example
```

If you do not have or want to use Docker, each example project can be built locally. You will need to modify the project to place the correct agent snippet which can be difference depending on the example. Review each examples Dockerfile for more information on how to do this.

## Support

New Relic hosts and moderates an online forum where you can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

>Add the url for the support thread here: discuss.newrelic.com

## Contribute

We encourage your contributions to improve [project name]! Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.

If you have any questions, or to execute our corporate CLA (which is required if your contribution is on behalf of a company), drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

If you would like to contribute to this project, review [these guidelines](./CONTRIBUTING.md).

To all contributors, we thank you!  Without your contribution, this project would not be what it is today.  We also host a community project page dedicated to [Project Name](<LINK TO https://opensource.newrelic.com/projects/... PAGE>).

## License
[Project Name] is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
>[If applicable: The [project name] also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.]
