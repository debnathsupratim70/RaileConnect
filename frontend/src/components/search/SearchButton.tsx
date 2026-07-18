import Button from "../common/Button";

interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({
  onClick,
}: SearchButtonProps) {
  return (
    <div className="flex items-end">
      <Button
        className="w-full"
        onClick={onClick}
      >
        🔍 Search Trains
      </Button>
    </div>
  );
}

export default SearchButton;