import { format } from "date-fns";

export default {
  name: "vintage-school",
  title: "Vintage-School",
  type: "document",
  fields: [
    {
      name: "decade",
      title: "Decade",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image"
    },
    {
      name: "background",
      title: "Society background",
      type: "text"
    },
    {
      name: "fashion",
      title: "Fashion summary",
      type: "text"
    },
    {
      name: "examples",
      type: "array",
      title: "Examples",
      description:
        "Add examples of techniques, materials, silhuettes and more!",
      of: [{ type: "vintageSchoolExamples" }]
    }
  ],
  preview: {
    select: {
      title: "decade",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", slug, media }) {
      return {
        title,
        media
      };
    }
  }
};
