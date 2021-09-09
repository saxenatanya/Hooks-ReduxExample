#Learing from basics react

link - https://github.com/academind/react-complete-guide-code/blob/16-working-with-forms

### A js file can have multiple state, and we have three ways to handle those state.

- First is by creating sepeate useState as I did in expenseForm.js
- Second is by creating one state handler for all three , but we need to add all the other values in handler function and then give event.target.value to the one for which that handler is cretaed
- third is by using prevSate
  const selectItems = (event) => {
  setUserInput(prevState => ({
  yourWishList: [...prevState, event.target.value] // update this
  })
  }

### how to clear inputs?
- by adding two way binding!!!
what is two binding
Answer- two way binding means to give a value attribute to your form giving it the value of that particular state variable. as done in expenseform.js and then after declaration of the method which takes the value of diffrent input tags u call the setUserInput with blank values.
if you are using 1 way of declaring then use setEnteredTitle(''),setEnteredAmount(''),setEnteredDate('')

### Child to parent component communcation

- step 1 will be to declare a function in parent component
- step 2 will be to create a custom prop that expalins what it does and will just point to that function eg. - onSaveExpenseData={savedExpenseDataHandler}
- step 3 will be to call the function you made in parent in child component through props and passing the data in that function call from child to parent. check NewExpense.js (parent) and ExpenseForm.js (child)

## Lifting State up is similar to child to parent communcation

### controlled and uncontrolled components & statefull and stateless components

- stateless components are also called dumb components
- controlled components are those in which form data is handled by react Component.

  - is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
    > // Controlled:
    > `<input type="text" value={value} onChange={handleChange} />`

- UNCONTROLLED COMPONENTS is when form data is handled by DOM itself.
- is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
  > // Uncontrolled:
  > `<input type="text" defaultValue="foo" ref={inputRef} />`
  > // Use `inputRef.current.value` to read the current value of `<input>`

* In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.*

//Show error modal app starts here
## State Manangement

Is used when you need to handle state of something in conditional based task , suppose you got to show a coponent when you face some error and need to hide it on okay (check ErrorModal for this implementation)

### Fragments, Portals & Refs
- Fragements (<> </>) Or (<React.Fragement><React.Fragement/>)

instead of div you can combine a whole return statement in fragements and it will create a virtual div on time of component creation in browser.
You can also use a new component Wrapper that just return porps.children and it will work fine

- Portals
write a cleaner DOM with Portals, most of the done for overlay components like popup modal etc

Portal need two things a port the component to and then you need to let the componet now that it should have a portal to that place
So in this project we are gonna make changes in index.html for portal .

ReactDOM.createPortal(<ComponetName>,document.getElememtById('id-name'));

- Refs
In the most basic form Refs allow us to get access to other DOM elements and work with them.
//as hook
useRef();
is an object which always holds a current prop that holds current actual value of dom node which you can manipulate acc to yourself.
Can be used as refName.current.value and it will hold the value of that object 
Can be used when you just want to read a value and you never plan on changing then you can use Ref over state.


### Controlled and Uncontrolled Components
when we use ref in input tags then it becomes *uncontrolled* because it's value is not controlled by react now when we get the value from refNAME.current.value.

// Login App Starts
### Effects , Reducers and Context
- Effect ( or Side Effect)
Can be Store data in Browser Storage, send HTTP Requests to Backend server , set and manage Timers.
``These tasks must happen outside of you normal component evaluation and render cycle - especially since they might block delay rendering (e.g HTTP Request).``
  > UseEffect - takes two things , first is a fucntion and second is dependencies which will make the useEffect work every time they change 
  UseEffect run every time after a componnet is re-rendered.
  > What to add & Not to add as Dependencies
 you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a few exceptions you should be aware of:

*You DON'T need to add state updating functions* (as we did in the last lecture with setFormIsValid in Login.js ): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

*You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc* (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

*You also DON'T need to add variables or functions you might've defined OUTSIDE of your components* (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

*You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!*


// Debouncing 
no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.

// Throttling
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.


- UseReducer
Can be used as replacement for useState "more powerfull state management".
Most common scenario is when  you update a state which us dependent on another state then merging the two becomes more handy.

Reducders goes like const [prevState,dispatchAction] = useReducer(reducerfucntion,initialState,initFn});

you should use object destructuring while accessing object 

Because now the effect function would re-run whenever ANY property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on.


- Context API
provide it and then consume it.
AuthContext.Provider and AuthContext.Consumer
Consimer Take a child which actually should be a function

More clean code comes into picture with useContext hooks
It allows to tap into a context and listen to it.

> Limmitations of Context 
-Not use when a component is created for reuse like a button component etc 
-Not optomized for high frequency chnages
-Not a replacement of props

- RUles of Hooks
-Used in functions or in custom React Hook
-Call the on top of component only
  
  
###  UseMemo() and memoize
//need tp learn more



### Custom Hooks 

Custom hooks are just function with statefull logic
(need to learn more )



### validating form inputs
- to get the value entered in form 
event.target.value OR nameInputRef.current.value 
while using ref setting the form field to empty becomes trobulesome hence we use state to empty the input box after submit buy setting the setEnteredName as empty .


