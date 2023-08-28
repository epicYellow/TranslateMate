import axios from "axios";
import React, { useRef, useState } from "react";
import { ExtractKeyWords } from "../../../functionality/keywordExtractor";
import Style from "./Home.module.scss";

function Home() {
  const [paragraph, setParagraph] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  const [errorText, setErrorText] = useState();

  const [translatedText, setTranslatedText] = useState("");

  const ISO = require("../../../functionality/ISO.json");

  const LangOne = useRef();
  const LangTwo = useRef();
  const textArea = useRef();

  const translate = (paragraph) => {
    setLoading(true);
    console.log(LangOne.current.value);
    console.log(LangTwo.current.value);

    if (paragraph !== "") {
      axios
        .get(
          `https://api.mymemory.translated.net/get?q=${paragraph}!&langpair=${LangOne.current.value}|${LangTwo.current.value}`
        )
        .then((response) => {
          setTranslatedText(response.data.responseData.translatedText);

          textArea.current.value = response.data.responseData.translatedText;

          if (
            LangTwo.current.value === "en" ||
            LangTwo.current.value === "af"
          ) {
            setKeywords(
              ExtractKeyWords(
                response.data.responseData.translatedText,
                LangTwo.current.value
              )
            );
          } else {
            setKeywords(["Only supports english and afrikaans"]);
          }

          setLoading(false);
        });
    } else {
      setErrorText("Type in a word or a sentance!");
      setLoading(false);
    }
  };

  return (
    <div className={Style.Container}>
      {loading ? (
        <div className={Style.LoadIndicatorCon}>
          <div className={Style.Loader}></div>
        </div>
      ) : (
        <></>
      )}
      <div className={Style.Left}>
        <h1>Welcome to TranslateMate</h1>
        <h2>Start translating!</h2>
        <p>
          Select a 'from' and 'to' language. Only some languages support
          keywords. Api{" "}
          <a target="blank" href="https://mymemory.translated.net/doc/spec.php">
            link
          </a>
          . Website illustration{" "}
          <a href="https://www.freepik.com/free-vector/flat-design-abstract-illustration_22900053.htm">
            link
          </a>
          .
        </p>
        <div className={Style.LangSelect}>
          <p>From</p>
          <select ref={LangOne}>
            {ISO.map((item, index) => (
              <option key={index} value={item.ISOCode}>
                {item.EnglishnameofLanguage}
              </option>
            ))}
            <option>Afrikaans</option>
          </select>
          <p>To</p>
          <select ref={LangTwo}>
            {ISO.map((item, index) => (
              <option key={index} value={item.ISOCode}>
                {item.EnglishnameofLanguage}
              </option>
            ))}
            <option>Afrikaans</option>
          </select>
        </div>
        <textarea
          onChange={(e) => setParagraph(e.target.value)}
          className={Style.Textarea}
        ></textarea>

        <div
          onClick={() => {
            translate(paragraph);
          }}
          className={Style.Button}
        >
          Translate
        </div>
        <p>{errorText}</p>
        <textarea
          ref={textArea}
          value={translatedText}
          disabled
          className={Style.Textarea}
        ></textarea>
        <div className={Style.KeyWordIncluder}>
          <p style={{ padding: "5px" }}>Keywords:</p>
          {keywords.map((keyword, index) => (
            <div className={Style.Keyword} key={index}>
              {keyword}
            </div>
          ))}
        </div>
      </div>
      <div className={Style.Right}></div>

      {/*Image by <a href="https://www.freepik.com/free-vector/flat-design-abstract-illustration_22900053.htm">Freepik</a>*/}
    </div>
  );
}

export default Home;
