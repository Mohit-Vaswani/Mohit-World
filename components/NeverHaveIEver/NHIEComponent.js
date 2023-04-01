import { useState } from 'react';
import one from "../../public/assets/NHIE/1.png"
import two from "../../public/assets/NHIE/2.png"
import three from "../../public/assets/NHIE/3.png"
import four from "../../public/assets/NHIE/4.png"
import five from "../../public/assets/NHIE/5.png"
import six from "../../public/assets/NHIE/6.png"
import seven from "../../public/assets/NHIE/7.png"
import eight from "../../public/assets/NHIE/8.png"
import nine from "../../public/assets/NHIE/9.png"
import ten from "../../public/assets/NHIE/10.png"
import eleven from "../../public/assets/NHIE/11.png"
import twelve from "../../public/assets/NHIE/12.png"
import thirteen from "../../public/assets/NHIE/13.png"
import fourteen from "../../public/assets/NHIE/14.png"
import fifteen from "../../public/assets/NHIE/15.png"
import sixteen from "../../public/assets/NHIE/16.png"
import seventeen from "../../public/assets/NHIE/17.png"
import eighteen from "../../public/assets/NHIE/18.png"
import nineteen from "../../public/assets/NHIE/19.png"
import twenty from "../../public/assets/NHIE/20.png"
import twentyone from "../../public/assets/NHIE/21.png"
import twentytwo from "../../public/assets/NHIE/22.png"
import twentythree from "../../public/assets/NHIE/23.png"
import twentyfour from "../../public/assets/NHIE/24.png"
import twentyfive from "../../public/assets/NHIE/25.png"
import twentysix from "../../public/assets/NHIE/26.png"
import twentyseven from "../../public/assets/NHIE/27.png"
import twentyeight from "../../public/assets/NHIE/28.png"
import twentynine from "../../public/assets/NHIE/29.png"
import thirty from "../../public/assets/NHIE/30.png"
import thirtyone from "../../public/assets/NHIE/31.png"
import thirtytwo from "../../public/assets/NHIE/32.png"
import thirtythree from "../../public/assets/NHIE/33.png"
import thirtyfour from "../../public/assets/NHIE/34.png"
import thirtyfive from "../../public/assets/NHIE/35.png"
import thirtysix from "../../public/assets/NHIE/36.png"
import thirtyseven from "../../public/assets/NHIE/37.png"
import thirtyeight from "../../public/assets/NHIE/38.png"
import thirtynine from "../../public/assets/NHIE/39.png"
import forty from "../../public/assets/NHIE/40.png"
import Image from 'next/image';

function Progress({ percent }) {
    const styles = {
        progressBar: `h-6 w-8/12 bg-gray-200 rounded-full my-2`,
        filler: `h-full bg-green-500 rounded-full`,
    };

    return (
        <div className={styles.progressBar}>
            <div className={styles.filler} style={{ width: `${percent}%` }} />
        </div>
    );
}

const foodItems = [
    { id: 'item1', name: 'fallen in love', image: one },
    { id: 'item2', name: 'gotten a tattoo', image: two },
    { id: 'item3', name: 'gone skydiving', image: three },
    { id: 'item4', name: 'traveled outside of my home country', image: four },
    { id: 'item5', name: 'stayed up for 24 hours straight', image: five },
    { id: 'item6', name: 'gone scuba diving', image: six },
    { id: 'item7', name: 'ridden a horse', image: seven },
    { id: 'item8', name: 'gone skiing or snowboarding', image: eight },
    { id: 'item9', name: 'learned how to play a musical instrument', image: nine },
    { id: 'item10', name: 'owned a pet', image: ten },
    { id: 'item11', name: 'gone on a blind date', image: eleven },
    { id: 'item12', name: 'gone on a road trip with friends', image: twelve },
    { id: 'item13', name: 'ridden a rollercoaster', image: thirteen },
    { id: 'item14', name: 'been in a hot air balloon', image: fourteen },
    { id: 'item15', name: 'broken a bone', image: fifteen },
    { id: 'item16', name: 'gone camping', image: sixteen },
    { id: 'item17', name: 'tried a food from a different culture', image: seventeen },
    { id: 'item18', name: 'learned a new language', image: eighteen },
    { id: 'item19', name: 'been on a cruise', image: nineteen },
    { id: 'item20', name: 'gone to a music festival', image: twenty },
    { id: 'item21', name: 'gone to a sports game', image: twentyone },
    { id: 'item22', name: 'climbed a mountain', image: twentytwo },
    { id: 'item23', name: 'been in a play or musical', image: twentythree },
    { id: 'item24', name: 'gone to a fancy restaurant', image: twentyfour },
    { id: 'item25', name: 'gone on a solo trip', image: twentyfive },
    { id: 'item26', name: 'gone on a helicopter ride', image: twentysix },
    { id: 'item27', name: 'gone on a beach vacation', image: twentyseven },
    { id: 'item28', name: 'cheated on a test', image: twentyeight },
    { id: 'item29', name: 'watch never have i ever series', image: twentynine },
    { id: 'item30', name: 'peed in a pool', image: thirty },
    { id: 'item31', name: 'fallen asleep in public', image: thirtyone },
    { id: 'item32', name: 'lied on my resume', image: thirtytwo },
    { id: 'item33', name: 'lied about my income', image: thirtythree },
    { id: 'item34', name: 'lied to my best friend', image: thirtyfour },
    { id: 'item35', name: 're-gifted something', image: thirtyfive },
    { id: 'item36', name: 'lied about my relationship status', image: thirtysix },
    { id: 'item37', name: 'bungee jumped', image: thirtyseven },
    { id: 'item38', name: 'donated blood', image: thirtyeight },
    { id: 'item39', name: 'run a marathon', image: thirtynine },
    { id: 'item40', name: 'met a celebrity', image: forty },
]

export default function NeverHaveIEver() {
    const [checkedItems, setCheckedItems] = useState([]);

    function handleCheckboxChange(e) {
        const itemId = e.target.id;
        if (e.target.checked) {
            setCheckedItems([...checkedItems, itemId]);
        } else {
            setCheckedItems(checkedItems.filter((item) => item !== itemId));
        }
    }

    const percent = (checkedItems.length / foodItems.length) * 100;

    // Define the function for sharing the progress on social media
    function shareProgress() {
        const shareUrl = `https://mohit.world/Never-Have-I-Ever/`;
        window.open(`https://twitter.com/intent/tweet?text=I%27ve+never+done+${checkedItems.length}%2F${foodItems.length}+things!&url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
    return (
        <section className="w-full h-auto bg-slate-100 text-gray-800 pt-24 flex flex-col items-center eatingSection font-serif font-medium">
            <header>
                <h1 className="text-2xl md:text-5xl text-center">Never Have I Ever</h1>
                <p className='text-base lg:text-xl my-2 text-center'>Only check the boxes that you have never done in your life.</p>
            </header>
            <main className="eatContainer">
                <ul className="flex flex-wrap gap-4 justify-center">
                    {foodItems.map((item) => (
                        <li key={item.id} className={`eatBox ${checkedItems.includes(item.id) ? 'bg-green-500' : 'bg-white'}`}>
                            <div className='flex gap-4 items-center justify-center h-full w-full'>
                                <input type="checkbox" id={item.id} className="w-6 h-6 cursor-pointer" onChange={handleCheckboxChange} />
                                <label htmlFor={item.id} className="cursor-pointer w-full h-full">{item.name}</label>
                            </div>
                            <Image src={item.image} width={0} height={0} className='w-16 h-16 mt-4' />
                        </li>
                    ))}
                </ul>
            </main>
            <div className="flex flex-col items-center mt-8 pb-16 w-full">
                <p className="text-lg">
                    You've Never done {checkedItems.length}/{foodItems.length} things
                </p>
                <Progress percent={percent} />
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white" onClick={shareProgress}>
                    Share on Twitter
                </button>
            </div>
        </section>
    );
}
