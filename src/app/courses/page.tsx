'use client'
import courseData from '@/data/music_courses.json'
import { GlareCard } from '@/components/ui/glare-card'

function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
        <h2 className='text-center' >All Courses {courseData.courses.length}</h2>
        <div className='flex flex-wrap justify-center'>
            {courseData.courses.map((course) => (
                <GlareCard className="m-5 mt-5 flex flex-col items-center justify-center">
                <svg
                  width="66"
                  height="65"
                  viewBox="0 0 66 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                >
                  <path
                    d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                    stroke="currentColor"
                    strokeWidth="15"
                    strokeMiterlimit="3.86874"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-white font-bold text-xl mt-4">{course.title}</p>
                <p className="text-white font-bold text-xl mt-4">{course.description}</p>
              </GlareCard>
            )
            )}
            
        </div>
    </div>
  )
}

export default page