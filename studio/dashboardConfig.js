export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
      }
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5f369a6a0169f516fe6b6e0b",
                  title: "Sanity Studio",
                  name: "alexbucklee-studio",
                  apiId: "2019a8fc-bbb2-4428-86ae-3513a32c18ec"
                },
                {
                  buildHookId: "5f369a6b9522444e8fcc6d8c",
                  title: "Portfolio Website",
                  name: "alexbucklee",
                  apiId: "60a41f54-5ced-41fd-9e7b-703f8cfb9638"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/sssoja/alexbucklee",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://alexbucklee.com",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" }
    }
  ]
};
