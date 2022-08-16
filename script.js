

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialState = {
    value: 0,
}

function reducerCounter (currentState = initialState, action){
    if (action.type === "increment") {
        return{
            ...currentState,
            value: currentState.value + 1
        }
    }else if (action.type === "decrement") {
        return{
            ...currentState,
            value: currentState.value - 1
        }
    }else{
        currentState
    }
}


const storOfRedux = Redux.createStore(reducerCounter);

function renderElement(){
    const stateChange = storOfRedux.getState();
    counterEl.innerText = stateChange.value;
};


storOfRedux.subscribe(renderElement)

incrementEl.addEventListener("click", () => {
    storOfRedux.dispatch({
        type: "increment",
    })
})

decrementEl.addEventListener("click", () => {
    storOfRedux.dispatch({
        type: "decrement",
    })
})