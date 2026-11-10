class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check every row
        for (let row=0; row<9; row++) {
            const cells = [];
            for (let col=0; col<9; col++) { 
                if (board[row][col]!==".") {
                    cells.push(board[row][col]);
                }
            }
            if (new Set(cells).size !== cells.length)
                return false;
        }

        // check every col
        for (let row=0; row<9; row++) {
            const cells = [];
            for (let col=0; col<9; col++) { 
                if (board[col][row]!==".") {
                    cells.push(board[col][row]);
                }
            }
            if (new Set(cells).size !== cells.length)
                return false;
        }

        // check every box
        for (let boxRow=0; boxRow<9; boxRow+=3) {
            for(let boxCol=0; boxCol<9; boxCol+=3) {
                const cells = [];
                for (let r=boxRow; r<boxRow+3; r++) {
                    for(let c=boxCol; c<boxCol+3; c++) {
                        if(board[r][c]!==".") {
                            cells.push(board[r][c]);
                        }
                    }
                }
                if (new Set(cells).size !== cells.length)
                return false;
            }
        }
        return true;
    }
}
