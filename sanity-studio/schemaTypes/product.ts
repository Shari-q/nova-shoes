import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Men", "Women", "Running", "Basketball", "Lifestyle", "Limited"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (PKR)",
      type: "number",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "compareAtPrice",
      title: "Original price (PKR)",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "image",
      title: "Product image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "externalImageUrl",
      title: "External image URL",
      description: "Used for the initial catalog import; a Sanity image takes priority when both are set.",
      type: "url",
    }),
    defineField({
      name: "tag",
      title: "Product label",
      type: "string",
      initialValue: "NEW",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.min(0).max(5),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
