import React, { useEffect, useState } from 'react';
import { UseFetch } from '../hooks/UseFetch';
import { Loader } from '../Loader/Loader';
import './Movie.css';


export const Movie = () => {
    const [count, setCount] = useState(1);
    let movieUrl = ` https://api.themoviedb.org/3/tv/popular?api_key=140d648a01229b143fbaadee47387efd&language=en&page=${count}`
    const { data , loading, reFetchApi } = UseFetch(movieUrl);

    const imgBaseURL = `https://image.tmdb.org/t/p/w400/`;
    useEffect(() => {
        reFetchApi();
    }, [count]);

    const decrease = () => {
        if (count > 1)
            setCount(count - 1)
    };
    const increase = () => {
        setCount(count + 1)
    };
    const selectCount = (num) => {
        setCount(num)
    }

    return (
        <>
            <div className='grid grid-cols-5 gap-8 mx-20 my-5'  >
                {loading ? <Loader/> : (<>
                    {
                        data?.data?.results && data?.data?.results?.length > 1 && data?.data?.results?.map(item =>
                            <div className="shadow-lg w-full rounded-lg" key={item.id}>
                                <div className="">
                                    <img className='w-full rounded-t-lg object-center' src={imgBaseURL + item.backdrop_path} alt={item.original_name} />
                                </div>
                                <div className="py-5 text-lg font-bold">
                                    <h4>{item.original_name}</h4>
                                    <p className='text-sm font-light'>{item.first_air_date}</p>
                                </div>
                            </div>
                        )
                    }
                    <div className="flex justify-center space-x-2">
                        <button
                            type="button"
                            className="inline-block rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]" onClick={decrease}>
                            PREV
                        </button>
                        <button type="submit" className='px-4 bg-neutral-100' onClick={() => selectCount(1)}>1</button>
                        <button type="submit" className='px-4 bg-neutral-200' onClick={() => selectCount(2)}>2</button>
                        <button type="submit" className='px-4 bg-neutral-200' onClick={() => selectCount(3)}>3</button>
                        <button type="submit" className='px-4 bg-neutral-200' onClick={() => selectCount(4)}>4</button>
                        <button
                            type="button"
                            className="inline-block rounded bg-blue-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]" onClick={increase}>
                            NEXT
                        </button>
                    </div>
                </>)
                }
            </div>
        </>
    )
}

