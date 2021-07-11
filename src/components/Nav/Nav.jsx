import './Nav.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeColourStyle } from '../../redux/reducers/colourBoard.slice';

const Nav = () => {

    const dispatch = useDispatch();
    const colourStyle = useSelector((state) => state.colourBoard.colourStyle);

    const changeStyle = () => {
        dispatch(changeColourStyle());
    }

    return(
        <nav className="nav">
            <h2 className="nav__title">Chessboard</h2>
            <button className="nav__option" onClick={() => changeStyle()}> Change board colour to:  
                {
                    colourStyle === 'white' ? ' Brown ' : ' Black & White '
                } 
            </button>
        </nav>
    )
}

export default Nav;