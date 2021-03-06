import store from '@redux/store';
import { buildDefaultEntities } from '@utilities/entityUtility';
import { squareClicked } from '@redux/actions/squares-actions';
import { getSquareSelected, inBounds } from '@utilities/squareUtility';

const MoveSystem = (entities, { input }) => {
    const { game, squares } = store.getState();
    const result = game.gameWasReset ? buildDefaultEntities(game, squares) : { ...entities };

    // bounds of my board 

    const offset = 0;
    const xMax = 800;
    const yMax = 800;

    //search for input event within bounds of the board to respond to
    
    const { payload } = input.find(x => x.name === 'onMouseDown' || {};

    if (inBounds({ location: payload, offset, xMax, yMax })) {
        const { row, col } = getSquareSelected(payload);
        store.dispatch(squareClicked({ game, squares, row, col }));
    }
    return result;

};

export default MovesSystem;
