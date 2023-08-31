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

export const Profile: React.FC<LogoProps> = ({ color, opacity }) => {
    return (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98493 13.3462C4.11731 13.3462 0.814453 13.931 0.814453 16.2729C0.814453 18.6148 4.09636 19.2205 7.98493 19.2205C11.8525 19.2205 15.1545 18.6348 15.1545 16.2938C15.1545 13.9529 11.8735 13.3462 7.98493 13.3462Z" stroke="#6E7079" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98489 10.0059C10.523 10.0059 12.5801 7.94781 12.5801 5.40971C12.5801 2.87162 10.523 0.814476 7.98489 0.814476C5.44679 0.814476 3.3887 2.87162 3.3887 5.40971C3.38013 7.93924 5.42394 9.99733 7.95251 10.0059H7.98489Z" stroke="#6E7079" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const Dash = ({ border, opacity }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z" stroke={border} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z" stroke={border} opacity={opacity} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z" stroke={border} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z" stroke={border} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )

}

export const Order = ({ border, opacity }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5134 20.5H6.16555C3.09919 20.5 0.746786 19.3925 1.41498 14.9348L2.19301 8.8936C2.60491 6.66934 4.02367 5.81808 5.26852 5.81808H15.447C16.7102 5.81808 18.0466 6.73342 18.5225 8.8936L19.3006 14.9348C19.8681 18.889 17.5797 20.5 14.5134 20.5Z" stroke={border} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.6502 5.5984C14.6502 3.21233 12.716 1.27804 10.3299 1.27804V1.27804C9.18088 1.27317 8.07727 1.7262 7.26308 2.53695C6.44889 3.34771 5.9912 4.44939 5.99121 5.5984H5.99121" stroke={border} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.296 10.1018H13.2502" stroke={"#53545C"} opacity={opacity} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.46492 10.1018H7.41916" stroke="#53545C" opacity={opacity} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Customer = ({ color }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill='white'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59102 13.2068C11.28 13.2068 14.433 13.7658 14.433 15.9988C14.433 18.2318 11.301 18.8068 7.59102 18.8068C3.90102 18.8068 0.749023 18.2528 0.749023 16.0188C0.749023 13.7848 3.88002 13.2068 7.59102 13.2068Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59108 10.0198C5.16908 10.0198 3.20508 8.0568 3.20508 5.6348C3.20508 3.2128 5.16908 1.2498 7.59108 1.2498C10.0121 1.2498 11.9761 3.2128 11.9761 5.6348C11.9851 8.0478 10.0351 10.0108 7.62208 10.0198H7.59108Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.4824 8.8816C16.0834 8.6566 17.3164 7.2826 17.3194 5.6196C17.3194 3.9806 16.1244 2.6206 14.5574 2.3636" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5947 12.7322C18.1457 12.9632 19.2287 13.5072 19.2287 14.6272C19.2287 15.3982 18.7187 15.8982 17.8947 16.2112" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export const Inventory = ({ color }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill='white'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.419 14.7321C20.419 18.3101 18.31 20.4191 14.732 20.4191H6.95C3.363 20.4191 1.25 18.3101 1.25 14.7321V6.9321C1.25 3.3591 2.564 1.2501 6.143 1.2501H8.143C8.861 1.2511 9.537 1.5881 9.967 2.1631L10.88 3.3771C11.312 3.9511 11.988 4.2891 12.706 4.2901H15.536C19.123 4.2901 20.447 6.1161 20.447 9.7671L20.419 14.7321Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.48145 13.463H15.2164" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export const Conversation = ({ color }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill='white'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0714 18.0699C15.0152 21.1263 10.4898 21.7867 6.78642 20.074C6.23971 19.8539 5.79148 19.676 5.36537 19.676C4.17849 19.683 2.70117 20.8339 1.93336 20.067C1.16555 19.2991 2.31726 17.8206 2.31726 16.6266C2.31726 16.2004 2.14642 15.7602 1.92632 15.2124C0.212831 11.5096 0.874109 6.98269 3.93026 3.92721C7.8316 0.0244319 14.17 0.0244322 18.0714 3.9262C21.9797 7.83501 21.9727 14.1681 18.0714 18.0699Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.9398 11.413H14.9488" stroke="#53545C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.9301 11.413H10.9391" stroke="#53545C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.92128 11.413H6.93028" stroke="#53545C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export const Settings = ({ bg, opacity }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill='white'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8064 6.62357L18.184 5.54348C17.6574 4.62956 16.4905 4.31428 15.5753 4.83867V4.83867C15.1397 5.0953 14.6198 5.16811 14.1305 5.04104C13.6411 4.91398 13.2224 4.59747 12.9666 4.16133C12.8021 3.8841 12.7137 3.56835 12.7103 3.246V3.246C12.7251 2.72918 12.5302 2.22836 12.1698 1.85763C11.8094 1.48689 11.3143 1.27782 10.7973 1.27803H9.54326C9.03672 1.27803 8.55107 1.47987 8.19376 1.8389C7.83644 2.19793 7.63693 2.68455 7.63937 3.19108V3.19108C7.62435 4.23688 6.77224 5.07677 5.72632 5.07666C5.40397 5.07331 5.08821 4.9849 4.81099 4.82037V4.82037C3.89582 4.29597 2.72887 4.61125 2.20229 5.52517L1.5341 6.62357C1.00817 7.53635 1.31916 8.70256 2.22975 9.23227V9.23227C2.82166 9.574 3.18629 10.2055 3.18629 10.889C3.18629 11.5725 2.82166 12.204 2.22975 12.5458V12.5458C1.32031 13.0719 1.00898 14.2353 1.5341 15.1453V15.1453L2.16568 16.2346C2.4124 16.6797 2.82636 17.0082 3.31595 17.1474C3.80554 17.2865 4.3304 17.2249 4.77438 16.976V16.976C5.21084 16.7213 5.73094 16.6515 6.2191 16.7822C6.70725 16.9128 7.12299 17.233 7.37392 17.6716C7.53845 17.9488 7.62686 18.2646 7.63021 18.587V18.587C7.63021 19.6435 8.48671 20.5 9.54326 20.5H10.7973C11.8502 20.5 12.7053 19.6491 12.7103 18.5961V18.5961C12.7079 18.088 12.9086 17.6 13.2679 17.2407C13.6272 16.8814 14.1152 16.6806 14.6233 16.6831C14.9449 16.6917 15.2594 16.7797 15.5387 16.9394V16.9394C16.4515 17.4653 17.6177 17.1543 18.1474 16.2437V16.2437L18.8064 15.1453C19.0615 14.7075 19.1315 14.186 19.001 13.6963C18.8704 13.2067 18.55 12.7893 18.1108 12.5366V12.5366C17.6715 12.2839 17.3511 11.8665 17.2206 11.3769C17.09 10.8873 17.16 10.3658 17.4151 9.92792C17.581 9.63829 17.8211 9.39815 18.1108 9.23227V9.23227C19.0159 8.70285 19.3262 7.54345 18.8064 6.63272V6.63272V6.62357Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="10.1752" cy="10.889" r="2.63616" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}


export const Logout = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path opacity="0.4" d="M0 4.447C0 1.996 2.03024 0 4.52453 0H9.48564C11.9748 0 14 1.99 14 4.437V15.553C14 18.005 11.9698 20 9.47445 20H4.51537C2.02515 20 0 18.01 0 15.563V14.623V4.447Z" fill="#CC5F5F" />
            <path d="M19.7792 9.4548L16.9334 6.5458C16.6393 6.2458 16.166 6.2458 15.8728 6.5478C15.5807 6.8498 15.5816 7.3368 15.8748 7.6368L17.434 9.2298H15.9391H7.54875C7.13483 9.2298 6.79883 9.5748 6.79883 9.9998C6.79883 10.4258 7.13483 10.7698 7.54875 10.7698H17.434L15.8748 12.3628C15.5816 12.6628 15.5807 13.1498 15.8728 13.4518C16.0199 13.6028 16.2118 13.6788 16.4046 13.6788C16.5955 13.6788 16.7873 13.6028 16.9334 13.4538L19.7792 10.5458C19.9204 10.4008 20.0003 10.2048 20.0003 9.9998C20.0003 9.7958 19.9204 9.5998 19.7792 9.4548Z" fill="#CC5F5F" />
        </svg>
    )
}

export const HeadPhones = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)

}

export const Gift = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 12V22H4V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 7H2V12H22V7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 22V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Home = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5.09615 12.8548V10.8102C5.09614 10.2921 5.51744 9.87115 6.03928 9.86789H7.9554C8.47957 9.86789 8.9045 10.2898 8.9045 10.8102V12.8488C8.90449 13.2982 9.26967 13.6634 9.72229 13.6667H11.0295C11.6401 13.6682 12.2262 13.4285 12.6584 13.0005C13.0907 12.5724 13.3337 11.9912 13.3337 11.385V5.57724C13.3336 5.0876 13.115 4.62315 12.7367 4.30901L8.29564 0.782856C7.51933 0.166092 6.41057 0.186016 5.65725 0.830266L1.31167 4.30901C0.915486 4.61389 0.678694 5.07972 0.666992 5.57724V11.3791C0.666992 12.6425 1.69858 13.6667 2.97111 13.6667H4.24852C4.46644 13.6682 4.67598 13.5834 4.83064 13.431C4.9853 13.2785 5.07228 13.0711 5.07227 12.8548H5.09615Z" fill="#5570F1" />
        </svg>
    )
}