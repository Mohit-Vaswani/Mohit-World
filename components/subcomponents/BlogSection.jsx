"use client"
// components/BlogSection.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mohit-vaswani#')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    setBlogs(data.items);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="blog-section">
            <h2 className='my-10 text-4xl text-center'>Recent Blog Posts</h2>
            <div className="blog-cards grid grid-cols-2 gap-4">
                {blogs.map((blog, index) => (
                    <Link key={index} href={blog.link}>
                    <div className="blog-card flex justify-between gap-10 bg-gray-900">
                        <h3 className='w-1/2 p-4 text-xl'>{blog.title}</h3>
                        {/* <p>{blog.pubDate}</p> */}
                        <Image src={blog.thumbnail} alt='thumbnail' width={250} height={250} />
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
