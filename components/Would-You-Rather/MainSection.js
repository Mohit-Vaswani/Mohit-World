import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/config/supabase';
import Image from "next/image";
import Logo from "@/components/Logo";
import WYRLogo from "../../public/WYR/WYR.svg"
import End from './End';

export default function MainSection() {
  const [votes, setVotes] = useState({ choice1_text: '', choice2_text: '', vote1: 0, vote2: 0 });
  const [id, setId] = useState(1);
  const [showVote, setShowVote] = useState(false);
  const [countdown, setCountdown] = useState(6);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  let timer = null;
  let countdownTimer = null;
  const lastId = 10;

  const handleVote = useCallback(async (choice) => {
    if (isTimerStarted) {
      return;
    }

    setIsTimerStarted(true);

    const { data } = await supabase
      .from('votes')
      .select('*')
      .eq('id', id)
      .single();
    const { choice1, choice2, votes_for_choice1, votes_for_choice2 } = data;

    if (choice === 'choice1') {
      await supabase
        .from('votes')
        .update({ votes_for_choice1: votes_for_choice1 + 1 })
        .eq('id', id);
      const totalVotes = votes_for_choice1 + votes_for_choice2 + 1;
      const vote1Percentage = Math.round(((votes_for_choice1 + 1) / totalVotes) * 100);
      const vote2Percentage = 100 - vote1Percentage;
      setVotes({ ...votes, vote1: vote1Percentage, vote2: vote2Percentage });
    } else {
      await supabase
        .from('votes')
        .update({ votes_for_choice2: votes_for_choice2 + 1 })
        .eq('id', id);
      const totalVotes = votes_for_choice1 + votes_for_choice2 + 1;
      const vote2Percentage = Math.round(((votes_for_choice2 + 1) / totalVotes) * 100);
      const vote1Percentage = 100 - vote2Percentage;
      setVotes({ ...votes, vote1: vote1Percentage, vote2: vote2Percentage });
    }
  }, [id, isTimerStarted, votes]);


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('votes').select('*').eq('id', id).single();
      setVotes({ choice1_text: data.choice1, choice2_text: data.choice2, vote1: data.votes_for_choice1, vote2: data.votes_for_choice2 });
      setShowVote(false);
    };

    fetchData();

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, [id]);

  useEffect(() => {

    if (isTimerStarted) {
      countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      timer = setTimeout(() => {
        setId(id + 1);
        setIsTimerStarted(false);
        setCountdown(6);
      }, 6000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, [id, isTimerStarted]);

  const unHideClick = () => {
    setShowVote(!showVote);
  }

  return (
    <>
      {id <= lastId ? (
        <section className='w-full h-full md:h-screen flex flex-col justify-center items-center relative gradient pt-16 pb-10'>
          <Logo/>
          <Image src={WYRLogo} alt="Would you rather game" width={800} height={800} className='logo-wyr mb-4'/>
          <main className='flex flex-col md:flex-row w-11/12 mx-auto items-center gap-4'>
            <div
              onClick={() => {
                unHideClick();
                handleVote('choice1')
              }}
              className='w-full h-60 md:h-72 p-6 bg-red-500 text-white cursor-pointer rounded-2xl relative text-xl'
            >
                <h2 className='text-xl sm:text-2xl'>{votes.choice1_text}</h2>
                {showVote &&
                    <p className='mt-2 absolute bottom-3 right-3 text-2xl sm:text-4xl'>{((votes.vote1 / (votes.vote1 + votes.vote2)) * 100).toFixed(2)}%</p>
                }
              </div>
            <div
              onClick={() => {
                unHideClick();
                handleVote('choice2')
              }}
              className='w-full h-60 md:h-72 p-6 bg-blue-500 text-white cursor-pointer rounded-2xl relative text-xl'
            >
              <h2 className='text-xl sm:text-2xl'>{votes.choice2_text}</h2>
              {showVote &&
                    <p className='mt-2 absolute bottom-3 right-3 text-2xl sm:text-4xl'>{((votes.vote2 / (votes.vote1 + votes.vote2)) * 100).toFixed(2)}%</p>
              }
            </div>
          </main>
          {isTimerStarted && <p className="text-xl md:text-3xl mt-4 absolute top-1 lg:top-2 right-10">{countdown}</p>}
        </section>
      ) : (
        <section className='w-full h-screen flex flex-col justify-center items-center' style={{ display: 'none' }}>
          <End />
        </section>
      )}
    </>
  );
  
}
