
export const routes=[
    {
        id:1,
        name:"Programs",
        isThereSubMenu:true,
        subMenu:[
            {
                id:1,
                name:"Engineering",
                url:"engineering"
            },
            {
                id:2,
                name:"Management",
                url:"management"
            },
            {
                id:3,
                name:"Medicine",
                url:"medicine"
            },
            {
                id:4,
                name:"Law",
                url:"law"
            }
        ]
    },
    {
        id:2,
        name:"Professional study",
        isThereSubMenu:false,
        url:"professional-study"

    },
    {
        id:3,
        name:"Collaboration",
        isThereSubMenu:true,
        subMenu:[
            {
                id:1,
                name:"XPEDIOLIVES",
                url:"xpediolives"
            },
            {
                id:2,
                name:"U. OF PORTSMOUTH",
                url:"u-of-portsmouth"
            },
            {
                id:3,
                name:"Cass Paris",
                url:"cass-paris"
            }
        ]
    },
    {
        id:4,
        name:"Double Degree",
        isThereSubMenu:false,
        url:"double-degree"
    },
    {
        id:5,
        name:"Doctoral",
        isThereSubMenu:false,
        url:"doctoral"
    },
    {
        id:6,
        name:"FAQ",
        isThereSubMenu:false,
        url:"faq"

    },
    {
        id:7,
        name:"Contact Us",
        isThereSubMenu:false,
        url:"contact-us"
    }
]