
import style from './search.module.scss'

type Props = {
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}

export const Search = ({ searchValue, setSearchValue }: Props) => {
    return (
        <div className={style.root}>
            <svg
                className={style.icon}
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px">
                <title /><desc /><defs />
                <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                    <g fill="#929292" id="icon-111-search">
                        <path d="M19.4271164,21.4271164 C18.0372495,22.4174803 
                        16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 
                        C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 
                        23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 
                        21.4271164,19.4271164 L27.0119176,25.0119176 
                        C27.5621186,25.5621186 27.5575313,26.4424687 
                        27.0117185,26.9882815 L26.9882815,27.0117185 
                        C26.4438648,27.5561352 25.5576204,27.5576204 
                        25.0119176,27.0119176 L19.4271164,21.4271164 
                        L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 
                        21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 
                        C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 
                        14.5,21 L14.5,21 Z" id="search" />
                    </g>
                </g>
            </svg>

            <input
                placeholder="Search..."
                className={style.input}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)} />

            {searchValue && <svg
                onClick={() => setSearchValue('')}
                className={style.clear_icon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 
                4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 
                12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 
                19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 
                13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 
                19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 
                12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 
                4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 
                10.5858L6.2253 4.81108Z" fill="currentColor" />
            </svg>}
        </div>

    )
}