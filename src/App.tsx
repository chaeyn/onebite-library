import "./App.css";

function App() {
  return (
    <div>
      {/* 타이포그래피 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-thin">text-xl</div>
      <div className="text-2xl font-extrabold">text-2xl</div>
      <div className="text-[13px] font-black">text-13px</div>

      {/* 백그라운드 컬러*/}
      <div className="bg-amber-500">amber-500</div>

      {/* 사이즈 */}
      <div className="w-20 bg-blue-500">box</div>
      <div className="w-[21.3px] bg-red-500">box</div>
      <div className="h-20 w-full bg-yellow-500">box</div>

      {/* 여백 */}
      <div className="mx-5 h-50 w-50 bg-red-400 pt-5 pr-5 pb-5">
        <div className="h-full w-full bg-blue-400 px-2">dd</div>
      </div>
    </div>
  );
}

export default App;
