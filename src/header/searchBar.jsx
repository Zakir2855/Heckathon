import { useEffect, useState } from "react";
import Main from "../important";

function SearchBar() {
  //state to handle the search bar
  const [input, setInput] = useState("");
  // function to handle the above
  const handleInput = (e) => {
    let inputVal = e.target.value;
    let inputValue = inputVal.toLowerCase();
    setInput(inputValue);
  };
  //to handle type of search by select
  const [type, setType] = useState("");

  //func for above
  const handleType = (e) => {
    setType(e.target.value);
  };
  //handling the api here++++++++++++++++++++++++++++++++++++
  const [data, setData] = useState([]);
  //default results-------------------
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=node+in:name+language:javascript&sort=stars&order=desc&per_page=10",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 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",
        },
      }
    )
      .then((res) => res.json())
      .then((rt) => {
        setData(rt.items);
        console.log(rt.items);
      });
  }, []);

  //++++ submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "" || type === "none") {
      alert("Please select a type and enter a valid input.");
      return;
    }

    if (type === "language") {
      fetch(
        `https://api.github.com/search/repositories?q=node+in:name+language:${input}&sort=stars&order=desc`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer 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",
          },
        }
      )
        .then((res) => res.json())
        .then((rt) => setData(rt.items))
        .catch((err) => alert(err.message));
    } else if (type === "user") {
      fetch(`https://api.github.com/users/${input}`)
        .then((res) => res.json())
        .then((rt) => setData([rt]))
        .catch((err) => alert(err.message));
    }
  };
  //   testing purposes
  // useEffect(() => {
  //   console.log(data, "here is data ");
  // }, [data, setData]);

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <input type="text" placeholder="search" onChange={handleInput} />
        <div className="selector">
          <span>Select user or language</span>
          <select onChange={handleType} name="type" id="">
            <option value="none">Select type</option>
            <option value="language">Language</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit">Search</button>
      </form>
      {/* passing type of search and searched data  */}
     <Main  data={data} type={type}/>
    
    </>
  );
}
export default SearchBar;