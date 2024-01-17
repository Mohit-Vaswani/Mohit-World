'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

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
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    console.log('Blogs', blogs)

    return (
        <div className="blog-section h-full mb-20">
            <div className='flex justify-between items-center'>
                <h2>Latest Articles</h2>
                <button>View All <span><GoArrowUpRight size={23} color='#fff' /></span></button>
            </div>
            {isLoading ? (
                <div className="loader h-screen flex justify-center">
                    Loading....
                </div>
            ) : (
                <div className="blog-cards grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {blogs.slice(0, 2).map((blog: any, index: number) => (
                        <Link key={index} href={blog.link} target='_blank'>
                            <div className="blog_card">
                                <h3 className='text-base md:text-3xl'>{blog.title}</h3>
                                <div className='flex justify-between items-center'>
                                    <p>{new Date(blog.pubDate).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short'
                                    })}</p>
                                    <button >
                                        <GoArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            )}
        </div>
    );
};

export default BlogSection;