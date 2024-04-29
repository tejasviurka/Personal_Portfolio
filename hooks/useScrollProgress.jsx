// import React, {useState, useEffect } from 'react';

// const useScrollProgress = () => {
//     const [completion, setCompletion] = useState(0);

//     useEffect(() => {
//         const updateScrollCompletion = () => {
//             const scrollHeight = document.body.scrollHeight - window.innerHeight;

//             if(scrollHeight){
//                 setCompletion(Number(currentProgress / scrollHeight).toFixed(2)*100);
//             }
//         };
//         window.addEventListener('scroll', updateScrollCompletion);

//         return () => window.removeEventListener('scroll', updateScrollCompletion);
//     }, []);

//     return completion;
// };

// export default useScrollProgress;



import { useState, useEffect } from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentProgress = window.scrollY;
            if (scrollHeight > 0) {
                setCompletion(Number((currentProgress / scrollHeight) * 100).toFixed(2));
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
};

export default useScrollProgress;
