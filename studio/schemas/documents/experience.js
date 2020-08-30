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
      name: "clients",
      title: "Clients",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
};
