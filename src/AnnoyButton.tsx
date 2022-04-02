export default function AnnoyButton() {
  return (
    <button
      className="m-4 p-8 text-white text-4xl bg-red-500 hover:bg-red-700 rounded-2xl"
      onClick={() => {
        console.log("click");
      }}
    >
      Oops he did it again.
    </button>
  );
}
