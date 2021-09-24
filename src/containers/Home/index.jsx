import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataProcess } from "../../store/actions";
import InputBar from "../../components/InputBar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import "./home.scss";
import { Helmet } from "react-helmet";

export default function Home(props) {
  const fetchDataResult = useSelector((state) => state.home.fetchData);
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  async function handleFetchData() {
    dispatch(fetchDataProcess(keyword));
  }

  useEffect(() => {
    if (fetchDataResult.length === 0) {
      handleFetchData();
    }
  });

  function handleChange(value) {
    setKeyword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFetchData();
    setKeyword("");
    console.log(keyword);
  }

  return (
    <div>
      {/* <div className="menu-bar--container">
        <p className="ml-5 menu-bar"><FontAwesomeIcon icon={faBars} /></p>
      </div> */}
      <Helmet>
        <title>{"DipaFoodySite~"}</title>
      </Helmet>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <h1 className="textTitle">Welcome in DipaFoodySite ~</h1>
        </div>
        <InputBar
          keyword={keyword}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <p className="subTitle">Food recipe recommendations for you :</p>
        <div className="row mt-4 justify-content-center">
          {fetchDataResult.map((data) => (
            <div className="col-11 col-md-6 col-lg-4 col-xl-3" key={data.id}>
              <Card
                imgSrc={`https://spoonacular.com/recipeImages/${data.id}-636x393.jpg`}
                title={data.title}
                time={data.readyInMinutes}
                people={data.servings}
                id={data.id}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
