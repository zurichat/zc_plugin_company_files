
import { FaRegShareSquare } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import { FaPeopleCarry } from 'react-icons/fa';
import { BsCloudUpload } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';

import { BsUpload } from 'react-icons/bs';
import { FaCompressArrowsAlt } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';
import { BsBarChart } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';

export const popData = [
    {
        id: 'p1',
        title: 'What is ZC Files all about?',
        answer: 'ZC Files is a file management solution for small to midsize businesses in a variety of industries, that unites the features of already existing solutions and more in one perfectly crafted and easy to use interface.',
        icon: <FaRegShareSquare />
    },
    {
        id: 'p2',
        title: 'Is it possible to copy files to multiple folders?',
        answer: 'Yes, it is possible.',
        icon: <FiCopy />
    },
    {
        id: 'p3',
        title: 'How do i add collaborators to my files?',
        answer: 'Right click on the file and click on invite and enter the username of a collaborator',
        icon: <FaPeopleCarry />
    },
    {
        id: 'p4',
        title: 'Can i export my files from the cloud storage?',
        answer: 'Yes, you can export your files from the cloud by using the download option',
        icon: <BsCloudUpload />
    },
    {
        id: 'p5',
        title: 'How can i share my files?',
        answer: 'Right click on the file and click the share option then choose your preferred file sharing option',
        icon: <FiShare2 />
    }
]

export const moData = [
    {
        id: 'm1',
        title: 'Can i upload multiple files?',
        answer: 'Yes',
        icon: <BsUpload />
    },
    {
        id: 'm2',
        title: 'How can i compress large files?',
        answer: 'File compression feature is not possible right now',
        icon: <FaCompressArrowsAlt />
    },
    {
        id: 'm3',
        title: 'What kind of files can i share on Zurichat?',
        answer: 'You can share a number of file types and file extensions including images, documents, sheets, presentation slides, music, videos etc',
        icon: <FiFolder />
    },
    {
        id: 'm4',
        title: 'How can i find the activities panel?',
        answer: '...',
        icon: <BsBarChart />
    },
    {
        id: 'm5',
        title: 'Can more than one person be an administrator?',
        answer: 'Yes, you can have as many administrator as you want on a file',
        icon: <BsPeople />
    }
]