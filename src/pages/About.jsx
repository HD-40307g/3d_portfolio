import React from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CTA } from '../components';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{' '}<span className='blue-gradient_text font-semibold drop-shadow'>{' '}Erik</span>{' '}👋
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I am a passionate and self-taught developer who has been learning to code with Codecademy for over a year. Through completing multiple certificates and building over multitude of projects, I've honed my skills and am eager to start my first professional role as a full-stack software engineer</p>
      </div>
      {/* Skills Section */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' loading='lazy' />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Work Experience Section */}
      <div className='py-16'>
        <h3 className='subhead-text'>Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>While I haven't yet held a formal software engineering position, I've built a strong foundation through hands-on experience with multiple projects and rigorous learning, showcasing my ability to tackle real-world coding challenges.</p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement 
                  key={experience.company_name} 
                  date={experience.date} 
                  icon={<div className='flex justify-center items-center w-full h-full'>
                          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' loading='lazy'/>
                        </div>} 
                  contentStyle={{ borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.icon.Bg, boxShadow: 'none' }} 
                  iconStyle={{ background: experience.iconBg }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                    <p className='text-black-500 font-medium text-base' style={{margin:0}}>{experience.company_name}</p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li className='text-black-500/50 font-normal pl-1 text-sm' key={`experience-point-${index}`}>{point}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default About;
