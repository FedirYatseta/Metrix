interface LogoProps {
    color: string;
    opacity: number;
    // Додайте інші необхідні пропси
}

export const Logo: React.FC<LogoProps> = ({ color, opacity }) => {
    return (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M21.9978 12.037C22.1081 12.2616 22.181 12.5021 22.2137 12.7494L22.8169 21.7192L23.1164 26.2277C23.1195 26.6913 23.1922 27.152 23.3323 27.5948C23.694 28.4539 24.564 28.9999 25.5106 28.9618L39.9347 28.0184C40.5593 28.0081 41.1625 28.2417 41.6115 28.6678C41.9857 29.0229 42.2273 29.4874 42.3034 29.987L42.3289 30.2904C41.732 38.5556 35.6617 45.4494 27.4136 47.229C19.1655 49.0086 10.7075 45.2493 6.6317 37.9923C5.45667 35.884 4.72274 33.5666 4.47299 31.1761C4.36866 30.4685 4.32272 29.7538 4.33562 29.0389C4.32274 20.1776 10.633 12.5168 19.4662 10.6699C20.5293 10.5044 21.5716 11.0672 21.9978 12.037Z" fill="#97A5EB" />
            <path opacity="0.4" d="M27.8851 4.33512C37.7648 4.58647 46.0684 11.6909 47.6667 21.26L47.6515 21.3306L47.6078 21.4333L47.6139 21.7151C47.5913 22.0886 47.4471 22.4478 47.1987 22.7381C46.9398 23.0404 46.5862 23.2462 46.1968 23.3261L45.9594 23.3587L29.3177 24.437C28.7641 24.4916 28.213 24.3131 27.8013 23.9459C27.4583 23.6399 27.239 23.2269 27.177 22.7818L26.06 6.16431C26.0406 6.10812 26.0406 6.04721 26.06 5.99102C26.0753 5.53297 26.2769 5.1 26.6198 4.78884C26.9628 4.47769 27.4185 4.31428 27.8851 4.33512Z" fill="#FFCC91" />
        </svg>
    )

}

export const Lock: React.FC<LogoProps> = ({ color, opacity }) => {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4232 7.4478V5.3008C13.4232 2.7878 11.3852 0.7498 8.87225 0.7498C6.35925 0.7388 4.31325 2.7668 4.30225 5.2808V5.3008V7.4478" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.683 19.2496H5.042C2.948 19.2496 1.25 17.5526 1.25 15.4576V11.1686C1.25 9.0736 2.948 7.3766 5.042 7.3766H12.683C14.777 7.3766 16.475 9.0736 16.475 11.1686V15.4576C16.475 17.5526 14.777 19.2496 12.683 19.2496Z" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.86279 12.2027V14.4237" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const Message: React.FC<LogoProps> = ({ color, opacity }) => {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9028 6.85114L12.4596 10.4642C11.6201 11.1302 10.4389 11.1302 9.59944 10.4642L5.11865 6.85114" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const Eyeoff: React.FC<LogoProps> = ({ color, opacity }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_104_13657)">
                <path d="M6.59984 2.82667C7.05872 2.71926 7.52855 2.66557 7.99984 2.66667C12.6665 2.66667 15.3332 8.00001 15.3332 8.00001C14.9285 8.75708 14.4459 9.46983 13.8932 10.1267M9.41317 9.41334C9.23007 9.60984 9.00927 9.76744 8.76394 9.87676C8.51861 9.98607 8.25377 10.0448 7.98523 10.0496C7.71669 10.0543 7.44995 10.0049 7.20091 9.90433C6.95188 9.80374 6.72565 9.65403 6.53573 9.46411C6.34582 9.27419 6.1961 9.04797 6.09551 8.79893C5.99492 8.5499 5.94552 8.28315 5.95026 8.01461C5.955 7.74607 6.01378 7.48124 6.12309 7.23591C6.2324 6.99057 6.39001 6.76977 6.5865 6.58667M11.9598 11.96C10.8202 12.8287 9.43258 13.3099 7.99984 13.3333C3.33317 13.3333 0.666504 8.00001 0.666504 8.00001C1.49576 6.4546 2.64593 5.10441 4.03984 4.04001L11.9598 11.96Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.666504 0.666672L15.3332 15.3333" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_104_13657">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>


    )
}

export const Eye: React.FC<LogoProps> = ({ color, opacity }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}