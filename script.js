

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialState = {
    value: 0,
}

//action identifier
const increment = "increment";
const decrement = "decrement";

//action creators
const incrementAction = (value)=>{
   return {
    type: increment,
    payload: value,
}
}

const decrementAction = (value)=>{ 
    return {
     type: decrement,
     payload: value,
 }
 }
 
function reducerCounter (currentState = initialState, action){
    if (action.type === increment) {
        return{
            ...currentState,
            value: currentState.value + action.payload
        }
    }else if (action.type === decrement) {
        return{
            ...currentState,
            value: currentState.value - action.payload
        }
    }else{
        currentState
    }
}


const storOfRedux = Redux.createStore(reducerCounter);

function renderElement(){
    let stateChange = storOfRedux.getState();
    console.log(stateChange);
    counterEl.innerText = stateChange.value;
};

storOfRedux.subscribe(renderElement)

incrementEl.addEventListener("click", () => {
    storOfRedux.dispatch(incrementAction(5))
})

decrementEl.addEventListener("click", () => {
    storOfRedux.dispatch(decrementAction(2))
})

