import { JSX } from "preact";

interface Props {
  /**
   * @description The text to display on the subscribe button.
   */
  buttonText?: string;
}

export default function SubscribeButton({ buttonText = "Subscribe" }: Props): JSX.Element {
  const handleClick = () => {
    console.log("Subscribed!");
  };

  return (
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}