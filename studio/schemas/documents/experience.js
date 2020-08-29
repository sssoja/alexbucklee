export default {
  name: "experience",
  type: "document",
  title: "Experience",
  fields: [
    {
      name: "company",
      type: "string",
      title: "Company"
    },
    {
      name: "role",
      type: "string",
      title: "Role"
    },
    {
      name: "date",
      type: "string",
      title: "Date"
    },
    {
      title: "Clients",
      name: "clients",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
};
