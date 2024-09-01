export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true
            }
        },
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "role",
            type: "string",
            title: "Role"
        }
    ]
}