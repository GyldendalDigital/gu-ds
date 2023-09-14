import { useEffect, useState } from "react";

let knutDone = false;

/** Half assed attempt to make a fancy input */
export const AnimatedInput = ({
  initialValue,
}:{ initialValue: string }) => {
  const [placeHolder, setPlaceHolder] = useState<string | undefined>("");

  const knut = "Knut?";
  const gud = "GUDS?";

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      if (placeHolder == undefined) return;

      if (knutDone) {
        setPlaceHolder(gud.slice(0, placeHolder.length + 1));
      } else {
        setPlaceHolder(knut.slice(0, placeHolder.length + 1));
      }
      if (placeHolder === knut) {
        knutDone = true;
        setTimeout(() => {
          setPlaceHolder("");
        }, 2000);
      }
    }, 250);

    return () => window.clearTimeout(timeoutID);
  }, [placeHolder]);

  return (
    <input
      type="text"
      name="name"
      defaultValue={initialValue}
      placeholder={placeHolder}
    />
  );
};
