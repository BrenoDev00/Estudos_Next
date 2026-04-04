export const SearchBar = ({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) => {
  return (
    <div className="flex items-center relative">
      <input
        className="w-[300px] border-b border-b-blue-500 p-2 outline-none"
        type="text"
        placeholder="Pesquisar"
        onInput={(event) => onSearch(event.currentTarget.value)}
      />

      <img src="/search-icon.svg" className="w-6 absolute right-2" />
    </div>
  );
};
