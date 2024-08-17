export default {
    name: "admin",
    title: "Admin",
    type: "document",
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email()
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string',
            validation: (Rule) => Rule.required().min(6).error("Password must be atleast 6 characters long.")
        }

    ]
}