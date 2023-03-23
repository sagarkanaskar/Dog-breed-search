import React, { useCallback, useState, useEffect } from "react";
import { apiGetAllDogBreedsSearch } from "../api.js";
import "../App.css";
import SearchInput from "./SearchInput.js";
import TablePuppy from "./TablePuppy";

const PuppyGrid = () => {
  const [suggestions, setSuggestions] = useState("");
  let value = "";
  useEffect(() => {
    apiGetAllDogBreedsSearch(value).then((rsp) => {
      const data = rsp.data.map((item) => {
        return {
          Name: item.name,
          Imperial: item.height.imperial,
          Metric: item.height.metric,
          Lifespan: item.life_span,
          Photo: (
            <img
              className="divImg"
              src={item.image ? item.image.url : "/images/dogIcon.png"}
              alt=""
            />
          ),
        };
      });
      setSuggestions(data);
    });
  }, []);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const handleChange = (value) => {
    apiGetAllDogBreedsSearch(value).then((rsp) => {
      const data = rsp.data.map((item) => {
        return {
          Name: item.name,
          Imperial: item.height.imperial,
          Metric: item.height.metric,
          Lifespan: item.life_span,
          Photo: (
            <img
              className="divImg"
              src={item.image ? item.image.url : "/images/dogIcon.png"}
              alt=""
            />
          ),
        };
      });
      setSuggestions(data);
    });
  };

  const optimizedFn = useCallback(debounce(handleChange), []);
  return (
    <div>
      <SearchInput optimizedFn={optimizedFn} />
      <TablePuppy suggestions={suggestions} />
    </div>
  );
};

export default PuppyGrid;
