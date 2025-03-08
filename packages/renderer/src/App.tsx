import './App.css';
import TestComponent from './components/TestComponent';
import LibraryDemo from './components/LibraryDemo';

function App() {
  return (
    <>
      {/* 测试组件 */}
      <TestComponent />

      <div className="mt-4">
        {/* 库演示组件 */}
        <LibraryDemo />
      </div>
    </>
  );
}

export default App;
