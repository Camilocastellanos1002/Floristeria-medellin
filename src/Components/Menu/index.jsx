import menuSVG from '../../assets/menu.svg';

function Menu ({onClick}){

    return (
        <>
            <ul>
                <li>
                    <span className='Menu-svg' onClick={onClick}>
                        <img src={menuSVG} alt='Menu'/>
                    </span>
                </li>
            </ul>
        </>
    );
}

export {Menu}