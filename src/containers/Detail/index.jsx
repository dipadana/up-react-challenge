import React from "react";
import "./detail.scss";
import Footer from "../../components/Footer";
import { withRouter, Switch, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchStepsDataProcess,
  fetchDetailDataProcess,
} from "../../store/actions";
import { Helmet } from "react-helmet";
import {
  faEllipsisV,
  faHamburger,
  faUtensils,
  faClock,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }

  changeData(stateName, data) {
    this.setState({
      [stateName]: data,
    });
  }

  toHome = () => {
    this.props.history.push("/");
  };

  fetchDataReceipe = async () => {
    let data = {
      url: `https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions?apiKey=d598a559515f48bc958bc745e593f373`,
    };
    this.props.fetchStepsData(data);
  };

  fetchDataIngredient = async () => {
    let data = {
      url: `https://api.spoonacular.com/recipes/${this.state.id}/information?includeNutrition=true&apiKey=d598a559515f48bc958bc745e593f373`,
    };
    this.props.fetchDetailData(data);
  };

  componentDidMount() {
    console.log(typeof this.props.storeId, typeof this.state.id);
    if (this.props.storeId !== this.state.id || this.props.storeId === "") {
      this.props.changeStoreId(this.state.id);
      this.fetchDataReceipe();
      this.fetchDataIngredient();
    }
    console.log(this.props);
    console.log(this.props.ingredientsData);
  }

  render() {
    return (
      <div>
        {/* <div className="menu-bar--container--detail">
          <p className="ml-5 menu-bar"><FontAwesomeIcon icon={faBars} /></p>
        </div> */}
        <Helmet>
          <title>{this.props.detailData.title}</title>
          {/* <meta property="og:url"         content={'https://foody.dipaproject.online/detail/'+this.state.id+'/ingredient'} />
          <meta property="og:type"        content="article" />
          <meta property="og:title"       content={this.props.detailData.title} />
          <meta property="og:description" content="Let's cook with this recipe!" />
          <meta property="og:image"       content={`https://spoonacular.com/recipeImages/${this.state.id}-636x393.jpg`} /> */}
        </Helmet>
        <div className="container mb-5">
          <h1 onClick={this.toHome} className="web-title">
            {" "}
            <FontAwesomeIcon icon={faUtensils} /> DipaFoodySite ~
          </h1>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="img-container">
                <img
                  src={`https://spoonacular.com/recipeImages/${this.state.id}-636x393.jpg`}
                  alt=""
                />
              </div>
              <p className="detail-title d-lg-none d-xl-none">
                {this.props.detailData.title ||
                  "This sesame vegeatable with juicy sauce"}
              </p>
              <div className="badge-container">
                <span className="badge-container--badge-items">
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {this.props.detailData.readyInMinutes} Minute
                </span>
                <span className="badge-container--badge-items">
                  <FontAwesomeIcon icon={faPeopleCarry} />{" "}
                  {this.props.detailData.servings} People
                </span>
                <span
                  className="badge-container--badge-items-f"
                  data-href={
                    "https://foody.dipaproject.online/detail/" +
                    this.state.id +
                    "/ingredient"
                  }
                  data-layout="button"
                  data-size="small"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                      "https://foody.dipaproject.online/detail/" +
                        this.state.id +
                        "/ingredient"
                    )}`}
                    className="fb-xfbml-parse-ignore text-white"
                  >
                    <FontAwesomeIcon icon={faFacebook} /> Share
                  </a>
                  {/* <div className="fb-share-button" 
                    data-href={'https://foody.dipaproject.online/detail/'+this.state.id+'/ingredient'} 
                    data-layout="button">
                      Share
                  </div> */}
                </span>
              </div>
              <div className="nav-child">
                <div className="row no-gutters">
                  <Link
                    to={`/detail/${this.state.id}/ingredient`}
                    className="col-6 nav-child--create-menu"
                  >
                    <p>How to create this menu</p>
                  </Link>
                  <Link
                    to={`/detail/${this.state.id}/nutrition`}
                    className="col-6 nav-child--nutrition-information"
                  >
                    <p>Nutrition information</p>
                  </Link>
                </div>
              </div>
              <Switch>
                <Route path="/detail/:id/ingredient">
                  <div>
                    <div className="receipe-container">
                      <p className="receipe-container--ingredient-title">
                        {" "}
                        <FontAwesomeIcon icon={faEllipsisV} /> Ingredients :
                      </p>
                      <ul>
                        {this.props.ingredientsData.map((data, i) => {
                          return <li key={i}>{data.originalString}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="receipe-container">
                      <p className="receipe-container--ingredient-title">
                        {" "}
                        <FontAwesomeIcon icon={faHamburger} /> Directions :
                      </p>
                      <ul>
                        {this.props.stepsData.map((data, i) => {
                          return <li key={i}>{data.step}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </Route>
                <Route path="/detail/:id/nutrition">
                  <div>
                    <div className="receipe-container">
                      <p className="receipe-container--ingredient-title">
                        {" "}
                        <FontAwesomeIcon icon={faHamburger} /> Nutrition
                        information:
                      </p>
                      <ul>
                        {this.props.detailData.nutrition.nutrients.map(
                          (data, i) => {
                            return (
                              <li key={i}>
                                {data.title +
                                  " = " +
                                  data.amount +
                                  " " +
                                  data.unit}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                    <div className="receipe-container">
                      <p className="receipe-container--ingredient-title">
                        {" "}
                        <FontAwesomeIcon icon={faHamburger} /> Caloric
                        information:
                      </p>
                      <ul>
                        <li>
                          Percent Protein ={" "}
                          {
                            this.props.detailData.nutrition.caloricBreakdown
                              .percentProtein
                          }
                        </li>
                        <li>
                          Percent Carbs ={" "}
                          {
                            this.props.detailData.nutrition.caloricBreakdown
                              .percentCarbs
                          }
                        </li>
                        <li>
                          Percent Fat ={" "}
                          {
                            this.props.detailData.nutrition.caloricBreakdown
                              .percentFat
                          }
                        </li>
                        <li>
                          Weight Per Serving ={" "}
                          {
                            this.props.detailData.nutrition.weightPerServing
                              .amount
                          }{" "}
                          g
                        </li>
                      </ul>
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <p className="detail-title">
                {this.props.detailData.title ||
                  "This sesame vegeatable with juicy sauce"}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailData: state.detail.detailData,
    stepsData: state.detail.stepsData,
    ingredientsData: state.detail.ingredientsData,
    storeId: state.detail.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStepsData(data) {
      return dispatch(fetchStepsDataProcess(data));
    },
    fetchDetailData(data) {
      return dispatch(fetchDetailDataProcess(data));
    },
    changeStoreId(data) {
      return dispatch({ type: "CHANGE_ID_DATA", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
