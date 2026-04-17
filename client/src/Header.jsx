const Header = () => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-green-400">
        AI Code Reviewer
      </h1>

      {/* Status */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">Status:</span>
        <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-semibold">
          AI Ready
        </span>
      </div>
    </div>
  );
};

export default Header;