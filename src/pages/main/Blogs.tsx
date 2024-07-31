import {Link} from "react-router-dom";

const BlogsList = ()=>{
    const blogPosts = [
        {
            id: 1,
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.',
            author: 'Author One',
            date: '2024-07-01',
            image:"https://di-uploads-pod11.dealerinspire.com/lithiahyundaiofreno/uploads/2020/03/2020-hyundai-santa-fe-interior.png"
        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.',
            author: 'Author Two',
            date: '2024-07-02',
            image:"https://di-uploads-pod11.dealerinspire.com/lithiahyundaiofreno/uploads/2020/03/2020-hyundai-santa-fe-interior.png"
        },
    ];
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.map((post) => (
                    <div key={post.id} className="border rounded shadow overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-2xl mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-2">By {post.author} on {post.date}</p>
                            <p className="mb-2">{post.author}</p>
                            <Link to={`/blogs/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BlogsList;