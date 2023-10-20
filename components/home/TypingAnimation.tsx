import { useEffect, useState } from "react";

const textArray = [
  "Elegantly simple email marketing",
  "Professional Email Software",
];

export default function Typewriter() {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const delay = isDeleting
    ? 110
    : charIndex === textArray[textIndex].length
    ? 1000
    : 50; // 1 second delay deletion after typing is complete, 50 milliseconds during deletion

  useEffect(() => {
    const type = () => {
      const currentText = textArray[textIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setText(currentText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(type, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [textIndex, charIndex, isDeleting]);

  return (
    <p>
      {text}
      <span className={"animate-blink text-[#353439]"}>|</span>
    </p>
  );
}
