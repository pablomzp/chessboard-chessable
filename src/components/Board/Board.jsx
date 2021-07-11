import './Board.scss';
import Square from '../Square/Square';
import { useSelector } from 'react-redux';

const Board = (props) => {

    const colourBoard = useSelector((state) => state.colourBoard);

    return(
        <div className="board" style={{height: props.size, width: props.size}}>
            <div className="board__row">
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
            </div>
            <div className="board__row">
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
                <Square style={colourBoard.colour2}/>
                <Square style={colourBoard.colour1}/>
            </div>
        </div>
    )
}

export default Board;