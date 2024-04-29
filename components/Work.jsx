'use client';
import Link from "next/link";
import { Button } from "./ui/button";


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

import ProjectCard from '@/component/ProjectCard';
const projectData  = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'lorbcvjh kdjbvskh dkjfhbuiefh fklfhnhd jbfvj jhvjh jdhbu',
        link: '/',
        github:'/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'lorbcvjh kdjbvskh dkjfhbuiefh fklfhnhd jbfvj jhvjh jdhbu',
        link: '/',
        github:'/',
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'lorbcvjh kdjbvskh dkjfhbuiefh fklfhnhd jbfvj jhvjh jdhbu',
        link: '/',
        github:'/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'lorbcvjh kdjbvskh dkjfhbuiefh fklfhnhd jbfvj jhvjh jdhbu',
        link: '/',
        github:'/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'lorbcvjh kdjbvskh dkjfhbuiefh fklfhnhd jbfvj jhvjh jdhbu',
        link: '/',
        github:'/',
    },
    
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'lorbcvjh kdjbvskh dkjfhbuiefh fklfhnhd jbfvj jhvjh jdhbu',
        link: '/',
        github:'/',
    },
    
    

];

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* text */}
                <div className='bg-pink-100 max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl;h-[400px] flex flex-col justify-center'>
                    <h2 className= 'section-title mb-4'>Latest Projects</h2>
                    <p className ='subtitle mb-8' >
                        lore,hghbftb jvnb bfg hjfb jhfhj v
                    </p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>

                {/* slider */}
                <div className='xl:max-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{640:{
                        slidesPerView: 2
                    }
                    }} SpaceBetween={30} modules={[Pagination]} pagination={{clickable: 'true'}}>
                      {projectData.slice(0.4).map((project, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                      })}  
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work;
