import styles from "../../../styles/Main.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
let col = convertRandomColor(Math.floor(Math.random() * 16777215));

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

function Main(props: any) {
  const [selectedColor, setSelectedColor] = useState("");
  const [shade1, setShade1] = useState("");
  const [shade2, setShade2] = useState("");
  const [shade3, setShade3] = useState("");
  const [shade4, setShade4] = useState("");
  const [shade5, setShade5] = useState("");
  const [complShade1, setComplShade1] = useState("");
  const [complShade2, setComplShade2] = useState("");
  const [complShade3, setComplShade3] = useState("");
  const [complShade4, setComplShade4] = useState("");
  const [complShade5, setComplShade5] = useState("");

  //TODO: Needs to check that props.Color is actually valid as well as present!
  useEffect(() => {
    if (!selectedColor) {
      if (props.Color) {
        setSelectedColor("#" + props.Color);
      } else {
        setSelectedColor(col);
      }
    }

    //Calculate complimentary color

    const complimentaryColor = calculateComplColor(selectedColor);
    //Get RGB values for selected color and Complimentary color

    const selectedColorR: number = hexToRgb!(selectedColor!).r!;
    const selectedColorG: number = hexToRgb!(selectedColor!).g!;
    const selectedColorB: number = hexToRgb(selectedColor!).b!;
    const complimentaryColorR: number = hexToRgb(complimentaryColor).r;
    const complimentaryColorG: number = hexToRgb(complimentaryColor).g;
    const complimentaryColorB: number = hexToRgb(complimentaryColor).b;

    //Calculate one and two shades darker (selected color)
    const shade1R: number = reShade(selectedColorR, 0.25);
    const shade1B: number = reShade(selectedColorB, 0.25);
    const shade2R: number = reShade(selectedColorR, 0.5);
    const shade1G: number = reShade(selectedColorG, 0.25);
    const shade2G: number = reShade(selectedColorG, 0.5);
    const shade2B: number = reShade(selectedColorB, 0.5);

    //Calculate one and two tints lighter (selected color)
    const shade4R: number = reTint(selectedColorR, 0.25);
    const shade4G: number = reTint(selectedColorG, 0.25);
    const shade4B: number = reTint(selectedColorB, 0.25);
    const shade5R: number = reTint(selectedColorR, 0.5);
    const shade5G: number = reTint(selectedColorG, 0.5);
    const shade5B: number = reTint(selectedColorB, 0.5);

    //Convert to Hex (selected color shades)
    setShade1(rgbToHex(shade1R, shade1G, shade1B));
    setShade2(rgbToHex(shade2R, shade2G, shade2B));
    setShade3(selectedColor.toString());
    setShade4(rgbToHex(shade4R, shade4G, shade4B));
    setShade5(rgbToHex(shade5R, shade5G, shade5B));

    //Calculate one and two shades darker (complimentary color)
    const complShade1R: number = reShade(complimentaryColorR, 0.5);
    const complShade1G: number = reShade(complimentaryColorG, 0.5);
    const complShade1B: number = reShade(complimentaryColorB, 0.5);
    const complShade2R: number = reShade(complimentaryColorR, 0.8);
    const complShade2G: number = reShade(complimentaryColorG, 0.8);
    const complShade2B: number = reShade(complimentaryColorB, 0.8);

    //Calculate one and two tints lighter (complimentary color)
    const complShade4R: number = reTint(complimentaryColorR, 0.33);
    const complShade4G: number = reTint(complimentaryColorG, 0.33);
    const complShade4B: number = reTint(complimentaryColorB, 0.33);
    const complShade5R: number = reTint(complimentaryColorR, 0.66);
    const complShade5G: number = reTint(complimentaryColorG, 0.66);
    const complShade5B: number = reTint(complimentaryColorB, 0.66);

    //Convert to Hex (complimentary color shades)
    setComplShade1(rgbToHex(complShade1R, complShade1G, complShade1B));
    setComplShade2(rgbToHex(complShade2R, complShade2G, complShade2B));
    setComplShade3(complimentaryColor);
    setComplShade4(rgbToHex(complShade4R, complShade4G, complShade4B));
    setComplShade5(rgbToHex(complShade5R, complShade5G, complShade5B));
  }, [selectedColor, props.Color]);

  function showColor(event: any) {
    setSelectedColor(event.target.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>10 Shades of Light</div>
      <div className={styles.pallettes}>
        <div className={styles.pallette}>
          <div className={styles.palletteTitle}>Primary Color</div>
          <div
            style={{ backgroundColor: shade1 }}
            className={`${styles["swatch"]} ${styles["sel1"]}`}
          >
            <Link href={`/color/${shade1.slice(1)}`}>{shade1}</Link>
          </div>
          <div
            style={{ backgroundColor: shade2 }}
            className={`${styles["swatch"]} ${styles["sel2"]}`}
          >
            <Link href={`/color/${shade2.slice(1)}`}>{shade2}</Link>
          </div>
          <div
            style={{ backgroundColor: shade3 }}
            className={`${styles["swatch"]} ${styles["sel3"]}`}
          >
            <Link href={`/color/${shade3.slice(1)}`}>{shade3}</Link>
          </div>
          <div
            style={{ backgroundColor: shade4 }}
            className={`${styles["swatch"]} ${styles["sel4"]}`}
          >
            <Link href={`/color/${shade4.slice(1)}`}>{shade4}</Link>
          </div>
          <div
            style={{ backgroundColor: shade5 }}
            className={`${styles["swatch"]} ${styles["sel5"]}`}
          >
            <Link href={`/color/${shade5.slice(1)}`}>{shade5}</Link>
          </div>
        </div>
        <div className={styles.pallette}>
          <div className={styles.palletteTitle}>Complimentary Color</div>
          <div
            style={{ backgroundColor: complShade1 }}
            className={`${styles["swatch"]} ${styles["comp1"]}`}
          >
            <Link href={`/color/${complShade1.slice(1)}`}>{complShade1}</Link>
          </div>
          <div
            style={{ backgroundColor: complShade2 }}
            className={`${styles["swatch"]} ${styles["comp2"]}`}
          >
            <Link href={`/color/${complShade2.slice(1)}`}>{complShade2}</Link>
          </div>
          <div
            style={{ backgroundColor: complShade3 }}
            className={`${styles["swatch"]} ${styles["comp3"]}`}
          >
            <Link href={`/color/${complShade3.slice(1)}`}>{complShade3}</Link>
          </div>
          <div
            style={{ backgroundColor: complShade4 }}
            className={`${styles["swatch"]} ${styles["comp4"]}`}
          >
            <Link href={`/color/${complShade4.slice(1)}`}>{complShade4}</Link>
          </div>
          <div
            style={{ backgroundColor: complShade5 }}
            className={`${styles["swatch"]} ${styles["comp5"]}`}
          >
            <Link href={`/color/${complShade5.slice(1)}`}>{complShade5}</Link>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Click here to pick a different primary color</p>
      </div>
      <div>
        {/* <label htmlFor="colorpicker">Color Picker:</label> */}
        <input
          type="color"
          id="colorpicker"
          value={selectedColor}
          onChange={showColor}
        />
      </div>
    </main>
  );
}

export default Main;
