'use client';
import { useState } from 'react';

export default function UpdatePost({ post }: { post: any }) {
const [formData, setFormData] = useState(post);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData((prev) => ({
...prev,
[name]: value,
}));
};

const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, checked } = e.target;
setFormData((prev) => ({
...prev,
tags: {
...prev.tags,
[name]: checked,
},
}));
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Send the updated form data to the backend (API call)
console.log('Post Updated:', formData);
};

return (

<form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 border rounded-md">
<h2 className="text-xl font-bold mb-4">Update Post</h2>
{/* {/_ Similar form fields as CreatePost _/}
{/_ Reuse the form fields and logic from the CreatePost component _/} */}
</form>
);
}