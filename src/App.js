import './App.css';
import WishMessage  from './components/WIshMessage';
import InlineStyle from './components/InlineStyles';
import Todo  from './components/Todo';
import ContactCard from './components/props/ContactCard';

import Joke from './components/props/props-styles/Joke';

import jokes from './components/mapping-components/jokesData';
import Product from './components/mapping-components/Product';
import products from './components/mapping-components/productsData';
import ClassBasedComponent from './components/class-based-components/CalssBasedComponent';
import ClassBasedComponentPractice from './components/class-based-components/CalssBasedComponentPractice';
import StateConcept from './components/state/StateConcept';
import StatePractice from './components/state/StatePractice';
import HandlingEvents from './components/handling-events/HandlingEvents';
import StatePractice1 from './components/state/StatePractice1'
import ConditionalRendering from './components/conditional-rendering/ConditionalRendering'

function App() {

  //just practicing git here (ignore this line)

  const jokeComponent = jokes.map(joke => <Joke key ={joke.id} joke ={{
    question : joke.question,
    punchLine : joke.punchLine
  }}/>)

  const productsComponent = products.map(product => <Product key = {product.id}
    product = {{
      name : product.product,
      price : product.price
      
    }}
  
  />)
  return (
    <div className="App">
      Functional component  
      <WishMessage />
      <hr/>
      InlineStyle
      <hr/>
      <InlineStyle />
      <hr/>

      <Todo />
      <hr/>
      <ContactCard contact = {{
          name:"Mr.Cat1",
          imageUrl : "http://placekitten.com/g/200/300",
          phone :"789789789789",
          email:"cat1@gmail.com"
        }} 
      />
       <hr/>

      <ContactCard 
          contact = {{
            name:"Mr.Cat2",
            imageUrl : "http://placekitten.com/g/201/301",
            phone :"159159159159",
            email:"cat2@gmail.com"
          }} 
      />
       <hr/>
       <h4>Conditional Rendering</h4>
       <hr/>
           <div className='rowC'>
           <Joke joke={{
                question : "This is joke question.",
                punchLine : "This is punch line."
            }}
            />
            
            <Joke joke={{                
                punchLine : "This is punch line.(No Question because it does not have question.)"
            }}
            />
           </div>
             <hr/>
            Mapping Components
             <hr/>
            
             <div>
             {jokeComponent}
             </div>
             <hr/>
            Mapping Components Practice
             <hr/>
            {productsComponent}
            <hr/>
            Class based component          
            <hr/>
            <ClassBasedComponent />
            <hr/>
            This is for class based component Practice
            <hr/>
            <ClassBasedComponentPractice />
            <hr/>
            <StateConcept />
            <hr/>
            <StatePractice />
            <hr/>
            Handling Events
            <hr/>
            <HandlingEvents />
            <hr/>
            <StatePractice1 />

            <hr/>
            <ConditionalRendering />

    </div>
  );
}

export default App;
