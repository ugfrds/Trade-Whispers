import imgurl from '@/../public/code.jpg';


type PostData ={
    id:number;
    category: string;
    img:StaticImageData;
    title: string;
    preview: string;
    content: string;
    createdAt:string; 
    tags?: Record<string, boolean>;

};
export const Posts: PostData[] =[
    {  
        id: 1,
        category: "technical analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags: {  popular: true, featured: true, latest: true },
                   
    },
    
    {  
        id: 2,
        category: "technical analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags: {  popular: true, featured: true, latest: true },
                   
    },
    {  
        id: 3,
        category: "technical analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags: {  popular: true, featured: false, latest: false },
                   
    },
    {  
        id: 4,
        category: "technical analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags : {  popular: true, featured: false, latest: true },
                   
    },
    {  
        id: 5,
        category: "technical analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags: {  popular: true, featured: false, latest: true },
                   
    },
    {  
        id: 6,
        category: "fundamental analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags: {  popular: true, featured: false, latest: true },
                   
    },
    {  
        id: 7,
        category: "fundamental analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: "",
        tags: {  popular: true, featured: false, latest: true },
                   
    },
    {  
        id: 8,
        category: "fundamental analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: ""
                   
    },
    {  
        id: 9,
        category: "fundamental analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: ""
                   
    },
    {  
        id: 10,
        category: "fundamental analysis",
        img: imgurl ,
        title: "Lorem ipsum",
        preview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque",
        content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure ab maxime corrupti atque animi",
        createdAt: ""
                   
    },

]


export const Brokers =[
    {
        name: "Exness",
        website: "",
        reviews: "",
        logo: "",
        review_url: ""

    },
    {
        name: "Exness",
        website: "",
        reviews: "",
        logo: "",
        review_url: ""

    },
    {
        name: "Exness",
        website: "",
        reviews: "",
        logo: "",
        review_url: ""

    },
    {
        name: "Exness",
        website: "",
        reviews: "",
        logo: "",
        review_url: ""

    },
    {
        name: "Exness",
        website: "",
        reviews: "",
        logo: "",
        review_url: ""

    }
]