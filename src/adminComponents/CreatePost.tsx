'use client';
   import { useState } from 'react';

export default function CreatePost() {
           const [formData, setFormData] = useState({
             title: '',
             category: '',
             img: '',
             preview: '',
             content: '',
             tags: {
                  popular: false,
                  featured: false,
                  latest: false,
                 },
             });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setFormData((prev) => ({...prev,[name]: value,}));
};

const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({...prev, tags: {...prev.tags,[name]: checked,},}));
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Send the form data to the backend (API call)
console.log('Post Created:', formData);
};

return (

<form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 border rounded-md">
<h2 className="text-xl font-bold mb-4">Create Post</h2>
<div className="mb-4">
<label className="block mb-1 font-medium">Title</label>
<input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Enter the post title"
          required
        />
</div>
<div className="mb-4">
<label className="block mb-1 font-medium">Category</label>
<input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Enter the post category"
          required
        />
</div>
<div className="mb-4">
<label className="block mb-1 font-medium">Image URL</label>
<input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Enter the image URL"
        />
</div>
<div className="mb-4">
<label className="block mb-1 font-medium">Preview</label>
<textarea
          name="preview"
          value={formData.preview}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Enter a short preview"
          required
        ></textarea>
</div>
<div className="mb-4">
<label className="block mb-1 font-medium">Content</label>
<textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Enter the post content"
          required
        ></textarea>
</div>
<div className="mb-4">
<label className="block font-medium mb-2">Tags</label>
               <div className="flex gap-4">
                  {Object.keys(formData.tags).map((tag) => (
                        <label key={tag} className="flex items-center gap-2 capitalize">
                        <input
                         type="checkbox"
                         name={tag}
                         checked={formData.tags[tag]}
                         onChange={handleTagChange}
                         />
                           {tag}
                       </label>
                            ))}
                  </div>
</div>
<button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
Create Post
</button>
</form>
);
}