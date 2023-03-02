import arrowRight from './arrow-right.svg';
import downloadIcon from './download.svg';
import externalLinkIcon from './external-link.svg';
import playCircleIcon from './play-circle.svg';
import twitterIcon from './twitter-icon.svg';
import penIcon from './Group 7.svg'
import codeIcon from './Frame.svg'
import marketerIcon from './Frame-1.svg'
import checkIcon from './check.svg'
import closeIcon from './close.svg'

export const ArrowRightIcon = ({ classProp, strokeColor }) => {
    return (<svg className={classProp} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    )
}


export { arrowRight, downloadIcon, externalLinkIcon, playCircleIcon, twitterIcon, penIcon, codeIcon, marketerIcon, checkIcon, closeIcon }