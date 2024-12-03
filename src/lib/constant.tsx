'use client';

import { JSX } from 'react';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaDocker, FaNodeJs } from 'react-icons/fa';
import { IoLogoFirebase, IoLogoVue } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
    SiExpress,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiSocketdotio,
    SiTypescript
} from 'react-icons/si';
import PROJECTIMAG1 from '../../public/image/project8.webp';
import PROJECTIMAG2 from '../../public/image/project_image6.webp';
import PROJECTIMAG3 from '../../public/image/project2.webp';
import PROJECTIMAG4 from '../../public/image/project6.webp';

type Section = {
    description?: string;
    additionalInfo?: string;
    technologies?: {
        icon: JSX.Element;
    }[];
    link?: string;
    responsibilities?: string[];
    image: {
        src: string;
        alt: string;
    };
};

type ProjectProps = {
    title: string;
    sections: Section[];
};
const PROJECTCARDDATA = [
    {
        img: PROJECTIMAG1,
        title: 'SDAX',
        link: '/projects/sdax',
        type: 'frontend',
        desc: 'The SDAX Investor Portal is a secure site where investors can manage and track their digital asset investments, view performance, and access important documents—all designed for both individual and institutional investors.'
    },
    {
        img: PROJECTIMAG2,
        title: 'Teen Up',
        type: 'frontend',
        link: '/projects/teen-up',
        desc: 'TeeUp is a social platform for teens to connect with friends, join groups, and access resources that support learning and personal growth in a safe, engaging community.'
    },
    {
        img: PROJECTIMAG3,
        title: 'PRUIdeas',
        type: 'fullstack',
        link: '/projects/pruidea',
        desc: 'A comprehensive learning management system designed for   students, teachers, and administrators, featuring project management, submission capabilities, reactions, and rewards for outstanding projects.'
    },
    {
        img: PROJECTIMAG4,
        title: 'FlashMall',
        type: 'fullstack',
        link: '/projects/flashmall',
        desc: 'FlashMall is an Electronic Point of Sale (EPOS) system that offers features such as sales processing, inventory and warehouse management, CRM, payment processing, and reporting'
    }
];
const CAREERINFO = [
    {
        title: ' Fullstack Developer at Viabells',
        duration: 'Aug 2023 - Present',
        dec: ' As a Fullstack Developer, I work closely with the team to ensure that both the front-end and back-end are well integrated and align with the product’s goals. I focus on building reliable and efficient systems, helping the startup succeed by providing practical, user-focused solutions.'
    },
    {
        title: 'Web Developer at Light Idea',
        duration: 'July 2022 - Augest 2023',
        dec: 'I played a key role in enhancing the Flash Mall EPOS system by leading the integration of new features using Firebase and React.js. Additionally, I built a complete delivery app dashboard from the ground up with Vue.js, covering restaurant, order, driver, and promotion management. I also developed a powerful EPOS system for a bar and restaurant, ensuring smooth operations and high customer satisfaction.'
    },
    {
        title: 'Frontend Developer at Dynasty',
        duration: 'November 2021 - June 2022',
        dec: 'I created and maintained multiple static websites using HTML5, CSS3, JavaScript, and React. I designed and implemented custom client dashboards with Material UI components and consistently applied strong problem-solving skills in day-to-day code maintenance, debugging, and client support.'
    },
    {
        title: 'Frontend Instructor ',
        duration: 'January 2022 - October 2022',
        dec: 'As an Instructor, I taught over 50 students web development, covering HTML, CSS, JavaScript, jQuery, and React. Additionally, I developed and administered assessments and coding challenges to track and evaluate their learning and progress.'
    }
];
const EDUINFO = [
    {
        title: 'BSC (Hons) Business Compution and Information Systems',
        duration: '2023 - Present',
        uniName: 'University of Central Lancashire , UK'
    },
    {
        title: 'NCC Level 5 Diploma in Compution ',
        duration: '2024',
        uniName: 'Twinkle University'
    },
    {
        title: 'NCC Level 4 Diploma in Compution ',
        duration: '2023',
        uniName: 'Twinkle University'
    },
    {
        title: "Google's UX Design",
        duration: '2024',
        uniName: 'Google Coursera'
    }
];
const FLASHMALL: ProjectProps = {
    title: 'FlashMall EPOS Web Application',
    sections: [
        {
            description:
                'FlashMall is a comprehensive Electronic Point of Sale (EPOS) system designed to streamline retail operations. It provides a wide range of features, including sales processing, inventory and warehouse management, customer relationship management (CRM), payment processing, and detailed reporting. The platform empowers businesses to enhance operational efficiency, monitor inventory effectively, and deliver superior customer experiences. With its user-friendly interface and robust capabilities, FlashMall simplifies day-to-day management for retail and warehouse operations.',
            link: 'https://flashmallmm.com/',

            image: {
                src: '/image/project_detail_image_9.webp',
                alt: 'project showcase'
            }
        },
        {
            description:
                'The platform uses modern technologies to provide a smooth and efficient user experience. Vue.js powers the dynamic and responsive frontend for easy navigation, while Bootstrap ensures a clean, mobile-friendly design. On the backend, Firebase and Firestore enable real-time data management, secure storage, and instant synchronization. This setup ensures the platform is reliable, scalable, and perfectly suited for retail and warehouse management needs.',
            technologies: [
                {
                    icon: <IoLogoVue fontSize={'40px'} />
                },
                {
                    icon: <SiTypescript fontSize={'40px'} />
                },
                {
                    icon: <BsBootstrapFill fontSize={'40px'} />
                },
                {
                    icon: <IoLogoFirebase fontSize={'40px'} />
                }
            ],
            image: {
                src: '/image/project_detail_image_10.webp',
                alt: 'features showcase'
            }
        },
        {
            responsibilities: [
                'Acted as the Full Stack Developer for the project, seamlessly integrating backend and frontend systems to ensure streamlined workflows and optimized functionality across all components.',
                'Developed a responsive and interactive user interface using Vue.js and Bootstrap, delivering a smooth user experience across devices.',
                'Utilized Firebase and Firestore to build a real-time, scalable backend for sales processing and inventory tracking.',
                'Implemented key EPOS features such as inventory and warehouse management, CRM, and payment processing.',
                'Implemented a feature for generating and printing vouchers, ensuring accuracy and a seamless user experience.',
                'Enforced Firebase security rules to safeguard data and implemented secure authentication and authorization mechanisms for user access control.'
            ],
            image: {
                src: '/image/project_detail_image_11.webp',
                alt: 'features showcase'
            }
        }
    ]
};
const PRUIDEA_LMS: ProjectProps = {
    title: 'Pruidea Learning Management Web Application',
    sections: [
        {
            description:
                'PreIdea is a comprehensive learning management system (LMS) designed for students, teachers, and administrators. The platform creates an interactive and dynamic learning environment, featuring a robust course management system with tools for creating and managing quizzes, assignments, and projects. Students can submit their assignments, take quizzes, receive feedback, and engage with peers’ work, fostering collaboration and motivation. Teachers and administrators can manage courses, track student progress, and assess performance efficiently using built-in tools. The system also includes a rewards feature for exceptional submissions, enhancing student engagement. Powered by Prudential, PreIdea ensures a seamless educational process while providing a scalable and secure platform for all users.',
            link: '#',
            image: {
                src: '/image/project_detail_image_7.webp',
                alt: 'project showcase'
            }
        },
        {
            description:
                'The platform utilizes modern technologies, including Node.js and Express.js for backend development, Next.js for the frontend, and MySQL with Sequelize for database management. For state management and data fetching, React Query and Redux Toolkit are implemented, while Material-UI provides a sleek and responsive user interface. This comprehensive tech stack delivers a high-performance, user-friendly platform, enhancing the digital learning experience for students, teachers, and administrators.',
            technologies: [
                { icon: <RiNextjsFill fontSize={'40px'} /> },
                { icon: <SiTypescript fontSize={'40px'} /> },
                { icon: <FaNodeJs fontSize={'40px'} /> },
                { icon: <SiExpress fontSize={'40px'} /> },
                { icon: <SiSocketdotio fontSize={'40px'} /> },
                { icon: <SiMysql fontSize={'40px'} /> }
            ],
            image: {
                src: '/image/project_detail_image_6.webp',
                alt: 'features showcase'
            }
        },
        {
            responsibilities: [
                'Served as the Full Stack Developer for the project, ensuring seamless collaboration between backend and frontend development.',
                'Developed and maintained a scalable backend using Node.js and Express.js, ensuring smooth data flow and robust API integration.',
                'Designed and implemented a responsive and interactive frontend with Next.js and Material-UI, delivering an intuitive user interface.',
                'Managed relational database systems using MySQL and Sequelize, optimizing database queries for efficient data retrieval and storage.',
                'Leveraged React Query and Redux Toolkit for efficient state management and real-time data synchronization across the platform.',
                'Integrated a course management system that includes quizzes, assignments, and rewards, enhancing user engagement and learning outcomes.',
                'Implemented secure authentication and authorization mechanisms to safeguard user data and control access.',
                'Improved scalability and maintainability by adhering to best coding practices and implementing a modular architecture.'
            ],
            image: {
                src: '/image/project_detail_image_8.webp',
                alt: 'features showcase'
            }
        }
    ]
};
const TEENUP: ProjectProps = {
    title: 'TeenUp Web Application',
    sections: [
        {
            description:
                "TeenUp is a dynamic social platform designed for teens to connect, grow, and explore new opportunities in a safe and engaging environment. It empowers users to build meaningful relationships with friends, join groups of common interest, and access various resources aimed at fostering personal growth and learning. TeenUp also offers a Job Application feature, enabling teens to explore career opportunities, apply for jobs, and gain valuable work experience—all while fostering a community of support and engagement. Whether you're looking to learn, connect, or kick-start your career journey, TeenUp is your go-to platform for a vibrant and productive teen experience.",
            image: {
                src: '/image/project_detail_image_4.webp',
                alt: 'project showcase'
            },
            link: 'https://teeup.viabells.com/'
        },
        {
            description:
                'Developed using a modern tech stack, including Next.js, Tailwind CSS, TypeScript, and Node.js, the platform ensures a responsive design and optimized performance. The application leverages advanced technologies such as Radix UI for accessible and customizable UI components, Socket.IO for real-time communication, Zustand for state management, and SWR for data fetching and caching.',
            technologies: [
                { icon: <RiNextjsFill fontSize={'40px'} /> },
                { icon: <RiTailwindCssFill fontSize={'40px'} /> },
                { icon: <SiTypescript fontSize={'40px'} /> },
                { icon: <FaNodeJs fontSize={'40px'} /> },
                { icon: <SiSocketdotio fontSize={'40px'} /> }
            ],
            image: {
                src: '/image/project_detail_image_5.webp',
                alt: 'features showcase'
            }
        },
        {
            responsibilities: [
                'Designed and developed user-friendly dashboards for schools, companies, and individual users, providing intuitive control panels tailored to specific needs.',
                'Implemented role-based access control, ensuring that each user type (school, company, or individual) has appropriate permissions and feature access.',
                'Optimized dashboard performance by utilizing tools like Zustand for state management and SWR for efficient data fetching and caching.',
                'Ensured full responsiveness of the dashboard across all devices using Tailwind CSS and Radix UI for customizable and accessible components.'
            ],
            image: {
                src: '/image/project_detail_image_3.webp',
                alt: 'features showcase'
            }
        }
    ]
};
const SDAX: ProjectProps = {
    title: 'SDAX Crypto Exchange Web Application',
    sections: [
        {
            description:
                'The SDAX Crypto Exchange is a secure and scalable platform for trading digital assets. It aims to provide a smooth and easy trading experience with strong security features, real-time updates, and a user-friendly interface. The platform includes key features such as user registration, wallet integration, trading charts, and asset management, all built with the latest technologies.',
            link: 'https://investor.sdax.co/register',
            image: {
                src: '/image/project_detail_image_1.png',
                alt: 'project showcase'
            }
        },
        {
            description:
                'Developed using a modern tech stack, including Next.js, Tailwind CSS, TypeScript, and Node.js, the platform ensures a responsive design and optimized performance. Advanced tools like Docker and Kubernetes are utilized for containerization and orchestration, ensuring high availability and scalability. The application is built with a microservices architecture, enabling modular, flexible, and easily maintainable services to support the growing demands of the platform.The platform leverages modern technologies to create a secure and scalable environment for digital asset trading. With its microservices architecture, the system is designed to handle high demand while providing modular and flexible services.',
            technologies: [
                {
                    icon: <RiNextjsFill fontSize={'40px'} />
                },
                {
                    icon: <RiTailwindCssFill fontSize={'40px'} />
                },
                {
                    icon: <SiTypescript fontSize={'40px'} />
                },
                {
                    icon: <FaNodeJs fontSize={'40px'} />
                },
                {
                    icon: <SiMongodb fontSize={'40px'} />
                },
                {
                    icon: <FaDocker fontSize={'40px'} />
                },
                {
                    icon: <SiKubernetes fontSize={'40px'} />
                }
            ],
            image: {
                src: '/image/project_detail1.webp',
                alt: 'features showcase'
            }
        },
        {
            responsibilities: [
                'Designed and implemented a responsive user interface using Next.js and Tailwind CSS, ensuring a seamless user experience across devices.',
                'Developed and integrated a custom UI React library to create reusable, shareable components, ensuring consistent design and efficient development across multiple projects.',
                'Developed reusable and scalable UI components for efficient front-end development and consistency.',
                'Implemented real-time notifications and live updates using WebSockets to enhance user engagement and interactivity.',
                'Implemented third-party KYC validation using Onfido’s SDK and API, as well as Singpass integration, to streamline identity verification and ensure compliance with regulatory requirements'
            ],
            image: {
                src: '/image/project_detail_image_12.webp',
                alt: 'features showcase'
            }
        }
    ]
};
const NAVITEM = ['About', 'Experience', 'Projects', 'Contact'];
export {
    PROJECTCARDDATA,
    CAREERINFO,
    EDUINFO,
    NAVITEM,
    FLASHMALL,
    PRUIDEA_LMS,
    TEENUP,
    SDAX
};
