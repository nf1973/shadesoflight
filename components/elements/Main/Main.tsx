import styles from "../../../styles/Main.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

function convertRandomColor(randomColor: number) {
  let ret = randomColor.toString(16);
  while (ret.length < 6) {
    ret = "0" + ret;
  }
  ret = "#" + ret;
  return ret;
}

function calculateComplColor(mainHex: string) {
  let hex = mainHex.substring(1);
  let dec = parseInt(hex, 16);
  let complCol = 16777215 - dec;
  let ret = complCol.toString(16);
  while (ret.length < 6) {
    ret = "0" + ret;
  }
  ret = "#" + ret;
  return ret;
}

function reShade(d: number, s: number) {
  return d * s;
}

function reTint(d: number, s: number) {
  return d + (255 - d) * s;
}

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

function decToHex(dec: number) {
  let val = dec.toString(16);
  while (val.length < 2) {
    val = "0" + val;
  }
  return val.toUpperCase();
}

function Main() {
  const [selectedColor, setSelectedColor] = useState(
    convertRandomColor(Math.floor(Math.random() * 16777215))
  );
  const [complimentaryColor, setComplimentaryColor] = useState("");
  const [shade1, setShade1] = useState("");
  const [shade2, setShade2] = useState("");
  const [shade3, setShade3] = useState("");
  const [shade4, setShade4] = useState("");
  const [shade5, setShade5] = useState("");
  const [shade6, setShade6] = useState("");
  const [shade7, setShade7] = useState("");
  const [shade8, setShade8] = useState("");
  const [shade9, setShade9] = useState("");
  const [tint1, setTint1] = useState("");
  const [tint2, setTint2] = useState("");
  const [tint3, setTint3] = useState("");
  const [tint4, setTint4] = useState("");
  const [tint5, setTint5] = useState("");
  const [tint6, setTint6] = useState("");
  const [tint7, setTint7] = useState("");
  const [tint8, setTint8] = useState("");
  const [tint9, setTint9] = useState("");

  const [complShade1, setComplShade1] = useState("");
  const [complShade2, setComplShade2] = useState("");
  const [complShade3, setComplShade3] = useState("");
  const [complShade4, setComplShade4] = useState("");
  const [complShade5, setComplShade5] = useState("");
  const [complShade6, setComplShade6] = useState("");
  const [complShade7, setComplShade7] = useState("");
  const [complShade8, setComplShade8] = useState("");
  const [complShade9, setComplShade9] = useState("");
  const [complTint1, setComplTint1] = useState("");
  const [complTint2, setComplTint2] = useState("");
  const [complTint3, setComplTint3] = useState("");
  const [complTint4, setComplTint4] = useState("");
  const [complTint5, setComplTint5] = useState("");
  const [complTint6, setComplTint6] = useState("");
  const [complTint7, setComplTint7] = useState("");
  const [complTint8, setComplTint8] = useState("");
  const [complTint9, setComplTint9] = useState("");

  useEffect(() => {
    //Calculate complimentary color
    setComplimentaryColor(calculateComplColor(selectedColor));

    //Get RGB values for selected color and Complimentary color

    const selectedColorR: number = hexToRgb!(selectedColor!).r!;
    const selectedColorG: number = hexToRgb!(selectedColor!).g!;
    const selectedColorB: number = hexToRgb(selectedColor!).b!;
    const complimentaryColorR: number = hexToRgb(complimentaryColor).r;
    const complimentaryColorG: number = hexToRgb(complimentaryColor).g;
    const complimentaryColorB: number = hexToRgb(complimentaryColor).b;

    //Calculate nine shades darker (selected color)
    const shade1R: number = reShade(selectedColorR, 0.1);
    const shade1G: number = reShade(selectedColorG, 0.1);
    const shade1B: number = reShade(selectedColorB, 0.1);
    const shade2R: number = reShade(selectedColorR, 0.2);
    const shade2G: number = reShade(selectedColorG, 0.2);
    const shade2B: number = reShade(selectedColorB, 0.2);
    const shade3R: number = reShade(selectedColorR, 0.3);
    const shade3G: number = reShade(selectedColorG, 0.3);
    const shade3B: number = reShade(selectedColorB, 0.3);
    const shade4R: number = reShade(selectedColorR, 0.4);
    const shade4G: number = reShade(selectedColorG, 0.4);
    const shade4B: number = reShade(selectedColorB, 0.4);
    const shade5R: number = reShade(selectedColorR, 0.5);
    const shade5G: number = reShade(selectedColorG, 0.5);
    const shade5B: number = reShade(selectedColorB, 0.5);
    const shade6R: number = reShade(selectedColorR, 0.6);
    const shade6G: number = reShade(selectedColorG, 0.6);
    const shade6B: number = reShade(selectedColorB, 0.6);
    const shade7R: number = reShade(selectedColorR, 0.7);
    const shade7G: number = reShade(selectedColorG, 0.7);
    const shade7B: number = reShade(selectedColorB, 0.7);
    const shade8R: number = reShade(selectedColorR, 0.8);
    const shade8G: number = reShade(selectedColorG, 0.8);
    const shade8B: number = reShade(selectedColorB, 0.8);
    const shade9R: number = reShade(selectedColorR, 0.9);
    const shade9G: number = reShade(selectedColorG, 0.9);
    const shade9B: number = reShade(selectedColorB, 0.9);

    //Calculate nine tints lighter (selected color)
    const tint1B: number = reTint(selectedColorB, 0.1);
    const tint1G: number = reTint(selectedColorG, 0.1);
    const tint1R: number = reTint(selectedColorR, 0.1);
    const tint2R: number = reTint(selectedColorR, 0.2);
    const tint2G: number = reTint(selectedColorG, 0.2);
    const tint2B: number = reTint(selectedColorB, 0.2);
    const tint3R: number = reTint(selectedColorR, 0.3);
    const tint3G: number = reTint(selectedColorG, 0.3);
    const tint3B: number = reTint(selectedColorB, 0.3);
    const tint4R: number = reTint(selectedColorR, 0.4);
    const tint4G: number = reTint(selectedColorG, 0.4);
    const tint4B: number = reTint(selectedColorB, 0.4);
    const tint5R: number = reTint(selectedColorR, 0.5);
    const tint5G: number = reTint(selectedColorG, 0.5);
    const tint5B: number = reTint(selectedColorB, 0.5);
    const tint6R: number = reTint(selectedColorR, 0.6);
    const tint6G: number = reTint(selectedColorG, 0.6);
    const tint6B: number = reTint(selectedColorB, 0.6);
    const tint7R: number = reTint(selectedColorR, 0.7);
    const tint7G: number = reTint(selectedColorG, 0.7);
    const tint7B: number = reTint(selectedColorB, 0.7);
    const tint8R: number = reTint(selectedColorR, 0.8);
    const tint8G: number = reTint(selectedColorG, 0.8);
    const tint8B: number = reTint(selectedColorB, 0.8);
    const tint9R: number = reTint(selectedColorR, 0.9);
    const tint9G: number = reTint(selectedColorG, 0.9);
    const tint9B: number = reTint(selectedColorB, 0.9);

    //Convert to Hex (selected color shades)
    setShade1(rgbToHex(shade1R, shade1G, shade1B));
    setShade2(rgbToHex(shade2R, shade2G, shade2B));
    setShade3(rgbToHex(shade3R, shade3G, shade3B));
    setShade4(rgbToHex(shade4R, shade4G, shade4B));
    setShade5(rgbToHex(shade5R, shade5G, shade5B));
    setShade6(rgbToHex(shade6R, shade6G, shade6B));
    setShade7(rgbToHex(shade7R, shade7G, shade7B));
    setShade8(rgbToHex(shade8R, shade8G, shade8B));
    setShade9(rgbToHex(shade9R, shade9G, shade9B));
    setTint1(rgbToHex(tint1R, tint1G, tint1B));
    setTint2(rgbToHex(tint2R, tint2G, tint2B));
    setTint3(rgbToHex(tint3R, tint3G, tint3B));
    setTint4(rgbToHex(tint4R, tint4G, tint4B));
    setTint5(rgbToHex(tint5R, tint5G, tint5B));
    setTint6(rgbToHex(tint6R, tint6G, tint6B));
    setTint7(rgbToHex(tint7R, tint7G, tint7B));
    setTint8(rgbToHex(tint8R, tint8G, tint8B));
    setTint9(rgbToHex(tint9R, tint9G, tint9B));

    //Calculate nine shades darker (complimentary color)
    const complShade1R: number = reShade(complimentaryColorR, 0.1);
    const complShade1G: number = reShade(complimentaryColorG, 0.1);
    const complShade1B: number = reShade(complimentaryColorB, 0.1);
    const complShade2R: number = reShade(complimentaryColorR, 0.2);
    const complShade2G: number = reShade(complimentaryColorG, 0.2);
    const complShade2B: number = reShade(complimentaryColorB, 0.2);
    const complShade3R: number = reShade(complimentaryColorR, 0.3);
    const complShade3G: number = reShade(complimentaryColorG, 0.3);
    const complShade3B: number = reShade(complimentaryColorB, 0.3);
    const complShade4R: number = reShade(complimentaryColorR, 0.4);
    const complShade4G: number = reShade(complimentaryColorG, 0.4);
    const complShade4B: number = reShade(complimentaryColorB, 0.4);
    const complShade5R: number = reShade(complimentaryColorR, 0.5);
    const complShade5G: number = reShade(complimentaryColorG, 0.5);
    const complShade5B: number = reShade(complimentaryColorB, 0.5);
    const complShade6R: number = reShade(complimentaryColorR, 0.6);
    const complShade6G: number = reShade(complimentaryColorG, 0.6);
    const complShade6B: number = reShade(complimentaryColorB, 0.6);
    const complShade7R: number = reShade(complimentaryColorR, 0.7);
    const complShade7G: number = reShade(complimentaryColorG, 0.7);
    const complShade7B: number = reShade(complimentaryColorB, 0.7);
    const complShade8R: number = reShade(complimentaryColorR, 0.8);
    const complShade8G: number = reShade(complimentaryColorG, 0.8);
    const complShade8B: number = reShade(complimentaryColorB, 0.8);
    const complShade9R: number = reShade(complimentaryColorR, 0.9);
    const complShade9G: number = reShade(complimentaryColorG, 0.9);
    const complShade9B: number = reShade(complimentaryColorB, 0.9);

    //Calculate nine tints lighter (complimentary color)
    const complTint1B: number = reTint(complimentaryColorB, 0.1);
    const complTint1G: number = reTint(complimentaryColorG, 0.1);
    const complTint1R: number = reTint(complimentaryColorR, 0.1);
    const complTint2R: number = reTint(complimentaryColorR, 0.2);
    const complTint2G: number = reTint(complimentaryColorG, 0.2);
    const complTint2B: number = reTint(complimentaryColorB, 0.2);
    const complTint3R: number = reTint(complimentaryColorR, 0.3);
    const complTint3G: number = reTint(complimentaryColorG, 0.3);
    const complTint3B: number = reTint(complimentaryColorB, 0.3);
    const complTint4R: number = reTint(complimentaryColorR, 0.4);
    const complTint4G: number = reTint(complimentaryColorG, 0.4);
    const complTint4B: number = reTint(complimentaryColorB, 0.4);
    const complTint5R: number = reTint(complimentaryColorR, 0.5);
    const complTint5G: number = reTint(complimentaryColorG, 0.5);
    const complTint5B: number = reTint(complimentaryColorB, 0.5);
    const complTint6R: number = reTint(complimentaryColorR, 0.6);
    const complTint6G: number = reTint(complimentaryColorG, 0.6);
    const complTint6B: number = reTint(complimentaryColorB, 0.6);
    const complTint7R: number = reTint(complimentaryColorR, 0.7);
    const complTint7G: number = reTint(complimentaryColorG, 0.7);
    const complTint7B: number = reTint(complimentaryColorB, 0.7);
    const complTint8R: number = reTint(complimentaryColorR, 0.8);
    const complTint8G: number = reTint(complimentaryColorG, 0.8);
    const complTint8B: number = reTint(complimentaryColorB, 0.8);
    const complTint9R: number = reTint(complimentaryColorR, 0.9);
    const complTint9G: number = reTint(complimentaryColorG, 0.9);
    const complTint9B: number = reTint(complimentaryColorB, 0.9);

    //Convert to Hex (complimentary color shades)
    setComplShade1(rgbToHex(complShade1R, complShade1G, complShade1B));
    setComplShade2(rgbToHex(complShade2R, complShade2G, complShade2B));
    setComplShade3(rgbToHex(complShade3R, complShade3G, complShade3B));
    setComplShade4(rgbToHex(complShade4R, complShade4G, complShade4B));
    setComplShade5(rgbToHex(complShade5R, complShade5G, complShade5B));
    setComplShade6(rgbToHex(complShade6R, complShade6G, complShade6B));
    setComplShade7(rgbToHex(complShade7R, complShade7G, complShade7B));
    setComplShade8(rgbToHex(complShade8R, complShade8G, complShade8B));
    setComplShade9(rgbToHex(complShade9R, complShade9G, complShade9B));
    setComplTint1(rgbToHex(complTint1R, complTint1G, complTint1B));
    setComplTint2(rgbToHex(complTint2R, complTint2G, complTint2B));
    setComplTint3(rgbToHex(complTint3R, complTint3G, complTint3B));
    setComplTint4(rgbToHex(complTint4R, complTint4G, complTint4B));
    setComplTint5(rgbToHex(complTint5R, complTint5G, complTint5B));
    setComplTint6(rgbToHex(complTint6R, complTint6G, complTint6B));
    setComplTint7(rgbToHex(complTint7R, complTint7G, complTint7B));
    setComplTint8(rgbToHex(complTint8R, complTint8G, complTint8B));
    setComplTint9(rgbToHex(complTint9R, complTint9G, complTint9B));
  }, [selectedColor, complimentaryColor]);

  function showColorFromPicker(event: any) {
    setSelectedColor(event.target.value);
  }

  function showColor(color: any) {
    setSelectedColor(color);
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>Shades of Light</div>
      <div className={styles.colorpicker}>
        <p>Click here to pick a different main color</p>
        <div>
          <input
            type="color"
            id="colorpicker"
            value={selectedColor}
            onChange={showColorFromPicker}
          />
        </div>
      </div>

      <div className={styles.pallettes}>
        <div className={styles.pallette}>
          <div className={styles.palletteTitle}>Main Color</div>
          <div
            style={{ backgroundColor: shade1 }}
            className={`${styles["swatch"]}`}
          >
            {shade1}
          </div>
          <div
            style={{ backgroundColor: shade2 }}
            className={`${styles["swatch"]}`}
          >
            {shade2}
          </div>
          <div
            style={{ backgroundColor: shade3 }}
            className={`${styles["swatch"]}`}
          >
            {shade3}
          </div>
          <div
            style={{ backgroundColor: shade4 }}
            className={`${styles["swatch"]}`}
          >
            {shade4}
          </div>

          <div
            style={{ backgroundColor: shade5 }}
            className={`${styles["swatch"]}`}
          >
            {shade5}
          </div>

          <div
            style={{ backgroundColor: shade6 }}
            className={`${styles["swatch"]}`}
          >
            {shade6}
          </div>

          <div
            style={{ backgroundColor: shade7 }}
            className={`${styles["swatch"]}`}
          >
            {shade7}
          </div>

          <div
            style={{ backgroundColor: shade8 }}
            className={`${styles["swatch"]}`}
          >
            {shade8}
          </div>

          <div
            style={{ backgroundColor: shade9 }}
            className={`${styles["swatch"]}`}
          >
            {shade9}
          </div>

          <div
            style={{ backgroundColor: selectedColor }}
            className={`${styles["swatch"]}`}
          >
            {selectedColor}
          </div>

          <div
            style={{ backgroundColor: tint1 }}
            className={`${styles["swatch"]}`}
          >
            {tint1}
          </div>
          <div
            style={{ backgroundColor: tint2 }}
            className={`${styles["swatch"]}`}
          >
            {tint2}
          </div>
          <div
            style={{ backgroundColor: tint3 }}
            className={`${styles["swatch"]}`}
          >
            {tint3}
          </div>
          <div
            style={{ backgroundColor: tint4 }}
            className={`${styles["swatch"]}`}
          >
            {tint4}
          </div>

          <div
            style={{ backgroundColor: tint5 }}
            className={`${styles["swatch"]}`}
          >
            {tint5}
          </div>

          <div
            style={{ backgroundColor: tint6 }}
            className={`${styles["swatch"]}`}
          >
            {tint6}
          </div>

          <div
            style={{ backgroundColor: tint7 }}
            className={`${styles["swatch"]}`}
          >
            {tint7}
          </div>

          <div
            style={{ backgroundColor: tint8 }}
            className={`${styles["swatch"]}`}
          >
            {tint8}
          </div>

          <div
            style={{ backgroundColor: tint9 }}
            className={`${styles["swatch"]}`}
          >
            {tint9}
          </div>
        </div>

        <div className={styles.pallette}>
          <div className={styles.palletteTitle}>Complimentary Color</div>

          <div
            style={{ backgroundColor: complShade1 }}
            className={`${styles["swatch"]}`}
          >
            {complShade1}
          </div>
          <div
            style={{ backgroundColor: complShade2 }}
            className={`${styles["swatch"]}`}
          >
            {complShade2}
          </div>
          <div
            style={{ backgroundColor: complShade3 }}
            className={`${styles["swatch"]}`}
          >
            {complShade3}
          </div>
          <div
            style={{ backgroundColor: complShade4 }}
            className={`${styles["swatch"]}`}
          >
            {complShade4}
          </div>

          <div
            style={{ backgroundColor: complShade5 }}
            className={`${styles["swatch"]}`}
          >
            {complShade5}
          </div>

          <div
            style={{ backgroundColor: complShade6 }}
            className={`${styles["swatch"]}`}
          >
            {complShade6}
          </div>

          <div
            style={{ backgroundColor: complShade7 }}
            className={`${styles["swatch"]}`}
          >
            {complShade7}
          </div>

          <div
            style={{ backgroundColor: complShade8 }}
            className={`${styles["swatch"]}`}
          >
            {complShade8}
          </div>

          <div
            style={{ backgroundColor: complShade9 }}
            className={`${styles["swatch"]}`}
          >
            {complShade9}
          </div>

          <div
            style={{ backgroundColor: complimentaryColor }}
            className={`${styles["swatch"]}`}
          >
            {complimentaryColor}
          </div>

          <div
            style={{ backgroundColor: complTint1 }}
            className={`${styles["swatch"]}`}
          >
            {complTint1}
          </div>
          <div
            style={{ backgroundColor: complTint2 }}
            className={`${styles["swatch"]}`}
          >
            {complTint2}
          </div>
          <div
            style={{ backgroundColor: complTint3 }}
            className={`${styles["swatch"]}`}
          >
            {complTint3}
          </div>
          <div
            style={{ backgroundColor: complTint4 }}
            className={`${styles["swatch"]}`}
          >
            {complTint4}
          </div>

          <div
            style={{ backgroundColor: complTint5 }}
            className={`${styles["swatch"]}`}
          >
            {complTint5}
          </div>

          <div
            style={{ backgroundColor: complTint6 }}
            className={`${styles["swatch"]}`}
          >
            {complTint6}
          </div>

          <div
            style={{ backgroundColor: complTint7 }}
            className={`${styles["swatch"]}`}
          >
            {complTint7}
          </div>

          <div
            style={{ backgroundColor: complTint8 }}
            className={`${styles["swatch"]}`}
          >
            {complTint8}
          </div>

          <div
            style={{ backgroundColor: complTint9 }}
            className={`${styles["swatch"]}`}
          >
            {complTint9}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Created with ❤ in Next.js</p>
      </div>
    </main>
  );
}

export default Main;
