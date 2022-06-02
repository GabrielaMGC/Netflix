import './App.css';
import { categories } from './Api';
import Row from '../src/components/row/Row'

function App() {
  return (
    <div className="App">
      {categories.map((category)=>{
        return <Row 
                  key={category.name} 
                  title={category.title} 
                  path={category.path}
                />
      })}
    </div>
  );
}

export default App;
