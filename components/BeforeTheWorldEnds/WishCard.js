import { useState } from 'react';
import supabase from '@/config/supabase';

const WishCard = ({ wish }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(wish.likes);

    const handleLike = async () => {
        // For Animation
        const button = document.querySelector('.animated');
        button?.classList.add('animated');
        setTimeout(() => {
            button?.classList.remove('animated');
        }, 500);

        // For adding likes
        if (!isLiked) {
            const { data, error } = await supabase
                .from('wishes')
                .update({ likes: likes + 1 })
                .eq('id', wish.id)
                .single();

            if (error) {
                console.log(error);
            } else {
                setIsLiked(true);
                setLikes(data ? data.likes : likes + 1);
            }
        } else {
            const { data, error } = await supabase
                .from('wishes')
                .update({ likes: likes - 1 })
                .eq('id', wish.id)
                .single();

            if (error) {
                console.log(error);
            } else {
                setIsLiked(false);
                setLikes(data ? data.likes : likes - 1);
            }
        }


    };


    return (
        <div className="border-2 border-white p-3 flex flex-col gap-5 wish-card">
            <p>{wish.wish}</p>
            <ul className='flex items-center flex-row-reverse justify-between'>
                <p className="text-right">{wish.username}</p>
                <button
                    onClick={handleLike}
                    className={`w-16 outline-none py-1 px-3 ${isLiked ? 'animated text-white' : ''}`}
                >
                    {likes}
                    <span className='pl-2'>🔥</span>
                </button>

            </ul>
        </div>
    );
};

export default WishCard;
