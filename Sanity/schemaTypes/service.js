export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            preview: {
                select: {
                    title: 'name',
                    media: 'image',
                    imageUrl: 'asset.url'
                },
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'priority',
            title: 'Priority',
            type: 'number',

        },

    ],

}