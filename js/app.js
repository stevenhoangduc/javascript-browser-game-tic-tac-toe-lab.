/*-------------------------------- Constants --------------------------------*/
//Step 5
            
//5) Define the required constants.
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
]
            


/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.
let board;
let turn;
let winner;
let tie;




/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.
const squareEls = document.querySelectorAll('.sqr')
const messageEl  = document.getElementById('message');
const resetbtn = document.getElementById('reset')

console.log(messageEl);



/*-------------------------------- Functions --------------------------------*/


//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
function init(){
    board = [
        "", "", "", 
        "", "", "",
        "", "", ""]
        // keep track of whose turn it is.
        turn = "X";
        // if there's a winner
        winner = false
        // if there's a tie
        tie = false
        render()
        
        console.log("Game initialized!")
    }
    init();
    
    
    //4) The state of the game should be rendered to the user.
    function render() {
        updateBoard()
        updateMessage()
    }
    
    function updateBoard() {
        board.forEach((b, index) => {
            squareEls[index].innerText = b
        })
    }
   
            // !winner && !tie (same as winner == false && tie == false)
            
            function updateMessage(){
                if (!winner && !tie ) {
                    messageEl.innerText=`${turn}'s turn`
                }else if (!winner  && tie){
                    messageEl.innerText= `tie`
                    
                }else {
                    messageEl.innerText= `${turn} wins`
                }
            }
            
            
            //6) Handle a player clicking a square with a `handleClick` function.
            function handleClick(e) {
                // 6c
               let squareIndex = e.target.id 
               // 6d
                if (board[squareIndex] != '') return
                if (winner) return
                //6c
                placePiece(squareIndex)
                checkForWinner()
                checkForTie()
                switchPlayerturn()
                render()
            }
           

            
            // 6.1 placePiece(
                
            function placePiece(index) {
                // 6b
               board[index] = turn 
               console.log(board)
            }

           

            
            // 6.2 checkForWinner()
            
            function checkForWinner() {
                // 6.2 b
                 winningCombos.forEach(combo => {
                     if (board[combo[0]] != '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){
                         winner = true
                     }

                })
            }
            
            // 6.3 checkForTie()
            
            function checkForTie(){
                if (winner) return
                if (board.includes('')) return
                tie = true
            }
            
            // 6.4 switchPlayerTurn()
            
            function switchPlayerturn() {
               if(winner ) return
               if(turn === 'X'){
                turn = 'O'
               } else {
                turn = 'X'
               }
            }


            
            
            //7) Create Reset functionality.
            
            
            
            
/*----------------------------- Event Listeners -----------------------------*/
                    
    squareEls.forEach(square => {
           square.addEventListener('click',  handleClick)         
    })
    resetbtn.addEventListener('click', init)