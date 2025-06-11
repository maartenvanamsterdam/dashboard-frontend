import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dagelijkse metingen</h1>
      <EntryForm />
      <hr className="my-6" />
      <EntryList />  
    </div>
  );
}

export default App;

