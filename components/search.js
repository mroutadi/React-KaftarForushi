import React from "react";
import { render } from "react-dom";
import Downshift from "downshift";

const items = [
  { value: "کفتر" },
  { value: "فنچ" },
  { value: "قناری" },
  { value: "طوطی" },
  { value: "مرغابی" }
];
const Search = () => (
  <Downshift
      id="bird-search"
      onChange={selection =>
        console.log(selection ? `You selected ${selection.value}` : "Selection Cleared")
      }
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps
      }) => (
        <React.Fragment>
          <div className="SearchBar">
            <div
            style={{ display: "inline-block" }}
            {...getRootProps({}, { suppressRefError: true })}
            >
              <img src="data:image/svg+xml;base64,
                PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTkyLjkwNCAxOTIuOTA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTIuOTA0IDE5Mi45MDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTE5MC43MDcsMTgwLjEwMWwtNDcuMDc4LTQ3LjA3N2MxMS43MDItMTQuMDcyLDE4Ljc1Mi0zMi4xNDIsMTguNzUyLTUxLjgzMUMxNjIuMzgxLDM2LjQyMywxMjUuOTU5LDAsODEuMTkxLDAgIEMzNi40MjIsMCwwLDM2LjQyMywwLDgxLjE5M2MwLDQ0Ljc2NywzNi40MjIsODEuMTg3LDgxLjE5MSw4MS4xODdjMTkuNjg4LDAsMzcuNzU5LTcuMDQ5LDUxLjgzMS0xOC43NTFsNDcuMDc5LDQ3LjA3OCAgYzEuNDY0LDEuNDY1LDMuMzg0LDIuMTk3LDUuMzAzLDIuMTk3YzEuOTE5LDAsMy44MzktMC43MzIsNS4zMDQtMi4xOTdDMTkzLjYzNywxODcuNzc4LDE5My42MzcsMTgzLjAzLDE5MC43MDcsMTgwLjEwMXogTTE1LDgxLjE5MyAgQzE1LDQ0LjY5NCw0NC42OTMsMTUsODEuMTkxLDE1YzM2LjQ5NywwLDY2LjE4OSwyOS42OTQsNjYuMTg5LDY2LjE5M2MwLDM2LjQ5Ni0yOS42OTIsNjYuMTg3LTY2LjE4OSw2Ni4xODcgIEM0NC42OTMsMTQ3LjM4LDE1LDExNy42ODksMTUsODEuMTkzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNDk0OUU3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />
              <input {...getInputProps()}
                        placeholder="نام پرنده مورد نظر خود را جستجو کنید" />
              <input className="Search_submit" type="submit" value="جستجو"/>
            </div>
            <ul {...getMenuProps()}>
              {isOpen
                ? 
                items
                  .filter(item => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal"
                        }
                      })}
                    >
                      {item.value}
                    </li>
                  ))
                : null
              }
            </ul>
          </div>
        </React.Fragment>
        )}
    </Downshift>
)

export default Search;