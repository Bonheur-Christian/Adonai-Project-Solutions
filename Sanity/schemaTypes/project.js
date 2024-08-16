export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }

    ]
}