import React from 'react'
import Content from '../components/Content'
import { BagIcon, BookIcon, CssIcon, GitIcon, HtmlIcon, ReactJsIcon, ReduxIcon, SassIcon, TailWindIcon, TypeScriptIcon } from '../components/icons'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiJava } from 'react-icons/si'
import Timeline from '../components/Timeline'
import Title from '../components/Title'

export default function ResumePage() {
    const skills = [
        {
            "name": "HTML",
            "icon": <HtmlIcon />
        },
        {
            "name": "CSS",
            "icon": <CssIcon />
        },
        {
            "name": "JavaScript",
            "icon": <TbBrandJavascript />
        },
        {
            "name": "SASS",
            "icon": <SassIcon />
        },
        {
            "name": "TailwindCSS",
            "icon": <TailWindIcon />
        },
        {
            "name": "ReactJS",
            "icon": <ReactJsIcon />
        },
        {
            "name": "Redux",
            "icon": <ReduxIcon />
        },
        {
            "name": "Java",
            "icon": <SiJava />
        },
    ]
    const educationTimeline = [
        {
            id: 1,
            time: '2021 - current',
            title: 'Studying at',
            subTitle: 'Nong Lam University.',
            desc: `<ul class='list-disc'><li>Basic knowledge of programming, algorithms, computers.</li><li>Building a programming mindset.</li><li>OOP Java.</li/><li>Data structures and algorithms basic.</li></ul>`,
        },

    ]
    const workingTimeline = [
        {
            id: 1,
            time: '2020 - Current',
            title: 'Self learning',
            subTitle: 'W3Schools, F8',
            desc: `<ul class='list-disc'><li>Learn about ReactJS, TailwindCSS.</li><li>Apply the knowledge learned to build a few personal projects.</li><li>Improve language skills.</li></ul>`,
        },

    ]
    return (
        <div className='' id='resume'>
            <Content title='my skills' titleBg='skills'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 pt-10">
                    {
                        skills.map((e, i) => (
                            <div className="col-span-1 hover:text-primary flex flex-col items-center transition duration-200 hover:scale-110" key={i}>
                                <div className="text-8xl">
                                    {e.icon}
                                </div>
                                <p className="name pt-3  text-lg font-semibold">{e.name}</p>
                            </div>
                        ))
                    }
                </div>
                <Title title="my resume" bg="resume" className="mt-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative px-10 h-auto py-10">
                    <div className=" col-span-1">
                        <h4 className="title flex items-center text-primary text-xl font-semibold mb-3">
                            <BookIcon />
                            <span className="ml-2 text-black dark:text-section">Educational Qualification</span>
                        </h4>
                        <Timeline timeLineList={educationTimeline} />
                    </div>
                    <div className="col-span-1">
                        <h4 className="title flex items-center text-primary text-xl font-semibold mb-3">
                            <BagIcon />
                            <span className="ml-2 text-black dark:text-section">Working Experience</span>
                        </h4>
                        <Timeline timeLineList={workingTimeline} />
                    </div>
                </div>
            </Content>
        </div>
    )
}
