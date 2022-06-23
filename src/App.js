import './App.css';
import { categories } from './Api';
import {Row} from '../src/components/row/Row'
import Banner from '../src/components/row/banner/banner'

function App() {
  return (
    <div className="App">
      <Banner/>
      {categories.map((category)=>{
        return <Row 
                  key={category.name} 
                  title={category.title} 
                  path={category.path}
                  isLarge={category.isLarge}
                />
      })}
    </div>
  );
}

export default App;
