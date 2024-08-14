import { useEffect, useState } from "react";
import "./App.css";
import { NEWS_API } from "./globals/index";
import axios from "axios";
import MainHeader from "./components/MainHeader/MainHeader";
const { baseUrl, apiKey } = NEWS_API;
console.log("NEWS_API :>> ", NEWS_API);

const handleReq = async () => {
  try {
    const route = "/everything?";
    const route1 = "/top-headlines?";

    const url =
      baseUrl + route1 + "q=&" + "from=2024-07-16" + "&sortBy=popularity";
    const res = await axios.get(url, {
      headers: { Authorization: apiKey },
    });
    console.log("res :>> ", res);
    if (!res) throw new Error("Error during request!");

    const { data } = res;
    if (!data) throw new Error("Data is missing!");
    console.log("data :>> ", data);
    return { data };
  } catch (error) {
    const e = error as Error;
    console.log("e :>> ", e);
    return { error: true, message: e.message };
  }
};

let isInitial = true;
function App() {
  const [module, setModule] = useState<string>("");
  const [lang, setLang] = useState<string>("");
  const [date, setDate] = useState<string>();
  const [keyWord, setKeyWord] = useState<string>("");
  const [allItems, setLllItems] = useState<object[]>([]);
  const [favoritesObj, setfavoritesObj] = useState();
  useEffect(() => {
    if (isInitial) {
      handleReq();
      isInitial = false;
    }
  }, []);
  return (
    <div className="app">
      <MainHeader module={module} setModule={setModule} />
    </div>
  );
}

export default App;
