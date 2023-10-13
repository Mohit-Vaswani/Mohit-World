// components/BlogSection.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InfinitySpin } from 'react-loader-spinner'

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mohit-vaswani#')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    setBlogs(data.items);
                }
                setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading to false in case of an error
            });
    }, []);

    return (
        <div className="blog-section h-full mb-20">
            <h2 className='my-10 text-2xl sm:text-4xl text-center'>Recent Blog Posts</h2>
            {isLoading ? (
                <div className="loader h-screen flex justify-center">
                    <InfinitySpin
                        width='200'
                        color="#4fa94d"
                    />
                </div>
            ) : (
                <div className="blog-cards grid grid-cols-1 2xl:grid-cols-2 gap-4">
                    {blogs.map((blog, index) => (
                        <Link key={index} href={blog.link}>
                            <div className="blog-card flex flex-col sm:flex-row justify-between gap-0 sm:gap-10 bg-white text-black rounded-xl">
                                <h3 className='sm:w-1/2 text-xl sm:text-2xl font-semibold p-8'>{blog.title}</h3>
                                {/* <p>{blog.pubDate}</p> */}
                                <Image src={blog.thumbnail} alt='thumbnail' width={250} height={250} className='p-3 rounded-3xl w-full sm:w-auto' />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogSection;
