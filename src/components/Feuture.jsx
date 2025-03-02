'use client';
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { p } from 'motion/react-client';
import { BackgroundGradient } from "./ui/background-gradient";

// interface Course {
//     id: number;
//     title: string;
//     slug: string;
//     description: string;
//     price: number;
//     instructor: string;
//     isFeatured: boolean;
//     image?: string;
//   }

function Feuture() {
    const featuredCourses = courseData.courses.filter(
        (course) => course.isFeatured === true
      );

  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
            </div>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((courses ) =>(
                    <div  className="flex justify-center" key={courses.id}>

                       <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {courses.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {courses.description}
                    </p>
                    <Link href={`/courses/${courses.slug}`}>Learn More</Link>
                  </div>
                </BackgroundGradient>

                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
        <Link
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-500 hover:bg-teal-600 focus:shadow-outline focus:outline-none"
          href={"/courses"}
        >
          View All Courses
        </Link>
        </div>
    </div>
  )
}

export default Feuture