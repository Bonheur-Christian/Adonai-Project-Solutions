export default {
    name: 'news',
    title: 'News (Completed Projects)',
    type: 'document',
    fields: [
        {
            name: 'date',
            title: 'Date of completion',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            previews: {
                select: {
                    title: 'name',
                    media: 'image',
                    imageUrl: 'asset.url'
                },
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        }
    ]
}