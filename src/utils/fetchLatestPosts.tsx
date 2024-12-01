import { Posts } from '@/lib/dummydata';

export const fetchLatestPosts = (limit: number = 5) => {
return [...Posts]
.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) 
.slice(0, limit);
};




/// copying all the posts and performing a sort on all of them is not scaleable , 

//Better Approach , 
// pop last posted posts like 10 or 5 , 
// sorting them may/ may not be required

