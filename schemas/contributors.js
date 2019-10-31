export default {
  name: "contibutors",
  type: "document",
  title: "Site Contributors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "portrait",
      type: "image",
      title: "Portrait"
    },
    {
      name: "title",
      type: "text",
      title: "Title",
      description: "What do you do on this site?"
    },
    {
      name: "personal",
      type: "text",
      title: "Personal",
      description: "Describe yourself"
    },
    {
      name: "website",
      type: "url",
      title: "Personal website",
      description: "Do you want to link your own website?"
    },
    {
      name: "instagram",
      type: "url",
      title: "Personal instagram",
      description: "Do you want to link your instagram?"
    }
  ]
};
