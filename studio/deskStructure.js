import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";

const hiddenDocTypes = listItem =>
  ![
    "art",
    "bio",
    "design",
    "experience",
    "category",
    "person",
    "sampleProject",
    "siteSettings"
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Sample projects")
        .schemaType("sampleProject")
        .child(S.documentTypeList("sampleProject").title("Sample projects")),

      S.listItem()
        .title("Art work")
        .schemaType("art")
        .child(S.documentTypeList("art").title("Art work")),
      S.listItem()
        .title("Design work")
        .schemaType("design")
        .child(S.documentTypeList("design").title("Design work")),
      S.listItem()
        .title("Experience")
        .schemaType("experience")
        .child(S.documentTypeList("experience").title("Experience")),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
