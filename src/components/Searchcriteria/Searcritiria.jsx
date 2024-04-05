import React from "react";
import "./Searchcriteria.css";
import { Checkbox } from "@mui/material";


function Searcritiria() {
  return (
    <div className="contents">
      <div className="content-box">
        <div className="contents">
          <div className="contents active-content">
            <span>Search profiles using the below criteria</span>
          </div>
        </div>
        <div className="basic">
          <p className="details">Basic Details</p>
        </div>
        <div className="form-container">
          <form className="for-search-criteria">
            <label className="label-box">Age</label>
            <select className="box-select">
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
            </select>

            <select className="box-select">
              <option>31</option>
              <option>32</option>
              <option>33</option>
              <option>34</option>
            </select>
            <br></br>
            <br></br>
            <label className="label-box">Height</label>
            <select className="box-select">
              <option>6'1</option>
              <option>6'2</option>
              <option>6'3</option>
              <option>6'4</option>
            </select>

            <select className="box-select">
              <option>5'1</option>
              <option>5'2</option>
              <option>5'3</option>
              <option>5'4</option>
            </select>
            <br></br>
            <br />
            <br></br>
            <label className="label-box">Profile Created By</label>
            <select className="box-selects">
              <option>Any</option>
              <option>Friend</option>
              <option>Family</option>
            </select>
            <br></br>
            <br />
            <br></br>

            <label className="label-box">Marital Status</label>
            <select className="box-selects">
              <option>Never Married</option>
              <option>Divorce</option>
              <option>Window</option>
            </select>
            <br></br>
            <br />
            <br></br>
            <label className="label-box">Mother Tongue</label>
            <select className="box-selects">
              <option>Telugu</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <br></br>
            <br />
            <br></br>
            <label className="label-box">Physical Status</label>
            <select className="box-selects">
              <option>Normal</option>
              <option>Doesn't Matter</option>
              <option>Physically Challenged</option>
            </select>
            <br></br>
            <br />
            <br></br>
          </form>

          <div className="basics">
            <p className="basic-details">Religious Details</p>
          </div>
          <div className="form-containers">
            <form className="for-search-criterias">
              <label className="label-boxs">Religion</label>
              <select className="boxs-selects">
                <option>Hindu</option>
                <option>Muslims</option>
                <option>Christians</option>
              </select>
              <br></br>
              <br />
              <br></br>
              <label className="label-boxs">Caste</label>
              <select className="boxs-selects">
                <option>Padmashali</option>
                <option>Yadavs</option>
                <option>Gouds</option>
              </select>
              <br></br>
              <br />
              <br></br>
              <label className="label-boxs">Sub Caste</label>
              <select className="boxs-selects">
                <option>Any</option>
                <option>Padmashali</option>
                <option>View All</option>
              </select>
              <br></br>
              <br />
              <br></br>
              <label className="label-boxs">Dosha(m)</label>
              <select className="boxs-selects">
                <option>No dosham</option>
                <option>Yes</option>
                <option>Don't Know</option>
              </select>
              <br></br>
              <br />
              <br></br>
            </form>
            <div className="basics">
              <p className="basic-details">Professional Details</p>
            </div>
            <div className="form-containers">
              <form className="for-search-criterias">
                <label className="label-boxs">Occupation</label>
                <select className="boxs-selects">
                  <option>Any</option>
                  <option>Software</option>
                  <option>Non-it</option>
                </select>
                <br></br>
                <br />
                <br></br>
                <label className="label-boxs">Annual Income</label>
                <select className="box-select">
                  <option>Any</option>
                  <option>24</option>
                  <option>24</option>
                  <option>24</option>
                </select>

                <select className="box-select">
                  <option>Any</option>
                  <option>24</option>
                  <option>24</option>
                  <option>24</option>
                </select>
                <br></br>
                <br></br>
                <label className="label-boxs">Employment Type</label>
                <select className="boxs-selects">
                  <option>Any</option>
                  <option>Government</option>
                  <option>Private</option>
                </select>
                <br></br>
                <br />
                <br></br>
                <label className="label-boxs">Education</label>
                <select className="boxs-selects">
                  <option>Msc</option>
                  <option>Mca</option>
                  <option>Mba</option>
                </select>
                <br></br>
                <br />
                <br></br>
              </form>
              <div className="basics">
                <p className="basic-details">Location Details</p>
              </div>
              <div className="form-containers">
                <form className="for-search-criterias">
                  <label className="label-boxs">Nearby Profiles</label>
                  <input
                    type="checkbox"
                    style={{ height: "20px", marginLeft: "250px" }}
                  ></input>
                  <label
                    style={{
                      fontSize: "20px",
                      marginTop: "-25px",
                      marginLeft: "10px",
                    }}
                  >
                    Matches near your location
                  </label>
                  <br></br>
                  <br />
                  <br></br>
                  <label className="label-boxs">Country</label>
                  <select className="boxs-selects">
                    <option>Any</option>
                    <option>India</option>
                    <option>Uk</option>
                  </select>
                  <br></br>
                  <br />
                  <br></br>
                  <label className="label-boxs">Citizenship</label>
                  <select className="boxs-selects">
                    <option>Any</option>
                    <option>Indian</option>
                    <option>View All</option>
                  </select>
                  <br></br>
                  <br />
                  <br></br>
                </form>
                <div className="basics">
                  <p className="basic-details">Lifestyle</p>
                </div>
                <div className="form-containers">
                  <form className="for-search-criterias">
                    <label className="label-boxs">Mutual Hobbies</label>
                    <input
                      type="checkbox"
                      style={{ height: "20px", marginLeft: "260px" }}
                    ></input>
                    <label
                      style={{
                        fontSize: "14px",
                        marginTop: "-25px",
                        marginLeft: "10px",
                      }}
                    >
                      Matches who have similar hobbies as you
                    </label>
                    <br></br>
                    <br />
                    <br></br>
                    <label className="label-boxs">Eating Habits</label>
                    <select className="boxs-selects">
                      <option>Any</option>
                      <option>Veg</option>
                      <option>Non-veg</option>
                    </select>
                    <br></br>
                    <br />
                    <br></br>
                    <label className="label-boxs">Smoking Habits</label>
                    <select className="boxs-selects">
                      <option>Doesn't Matter</option>
                      <option>Never Smoke</option>
                      <option>Smoke Regulary</option>
                    </select>
                    <br></br>
                    <br />
                    <br></br>
                    <label className="label-boxs">Drinking Habits</label>
                    <select className="boxs-selects">
                      <option>Doesn't Matter</option>
                      <option>Never Drinks</option>
                      <option>Drinks Regulary</option>
                    </select>
                    <br></br>
                    <br />
                    <br></br>
                  </form>
                  <div className="basics">
                    <p className="basic-details">Family Details</p>
                  </div>
                  <div className="form-containers">
                    <form className="for-search-criterias">
                      <label className="label-boxs">Family Status</label>
                      <select className="boxs-selects">
                        <option>Any</option>
                        <option>Veg</option>
                        <option>Non-veg</option>
                      </select>
                      <br></br>
                      <br />
                      <br></br>
                      <label className="label-boxs">Family Value</label>
                      <select className="boxs-selects">
                        <option>Doesn't Matter</option>
                        <option>Never Smoke</option>
                        <option>Smoke Regulary</option>
                      </select>
                      <br></br>
                      <br />
                      <br></br>
                      <label className="label-boxs">Family Type</label>
                      <select className="boxs-selects">
                        <option>Doesn't Matter</option>
                        <option>Never Drinks</option>
                        <option>Drinks Regulary</option>
                      </select>
                      <br></br>
                      <br />
                      <br></br>
                    </form>
                    <div className="basics">
                      <p className="basic-details">Recently active profiles</p>
                    </div>
                    <div className="form-containers">
                      <form className="for-search-criterias">
                        <label className="label-boxs">Profiles Created</label>
                        <br></br>
                        <label
                          className="label-boxs"
                          style={{ fontSize: "14px" }}
                        >
                          Profiles based on created date
                        </label>
                        <input
                          type="text"
                          placeholder="All"
                          className="label-all"
                          style={{
                            borderRadius: "10px",
                            textAlign: "center",
                            width: "60px",
                            marginLeft: "10px",
                            float: "left",
                            marginLeft: "-190px",
                            marginTop: "40px",
                            border: "1px solid orange",
                            backgroundColor: "pink",
                          }}
                        ></input>
                        <input
                          type="text"
                          placeholder="Today"
                          style={{
                            borderRadius: "10px",
                            textAlign: "center",
                            width: "80px",
                            marginLeft: "10px",
                            float: "left",
                            marginLeft: "-120px",
                            marginTop: "40px",
                          }}
                        ></input>
                        <input
                          type="text"
                          placeholder="Last 3 days"
                          style={{
                            borderRadius: "10px",
                            textAlign: "center",
                            width: "100px",
                            marginLeft: "10px",
                            float: "left",
                            marginLeft: "-30px",
                            marginTop: "40px",
                          }}
                        ></input>
                        <input
                          type="text"
                          placeholder="One week"
                          style={{
                            borderRadius: "10px",
                            textAlign: "center",
                            width: "120px",
                            marginLeft: "10px",
                            float: "left",
                            marginLeft: "10px",
                            marginTop: "40px",
                          }}
                        ></input>
                        <input
                          type="text"
                          placeholder="One month"
                          style={{
                            borderRadius: "10px",
                            textAlign: "center",
                            width: "140px",
                            marginLeft: "10px",
                            float: "left",
                            marginLeft: "10px",
                            marginTop: "40px",
                          }}
                        ></input>
                      </form>
                    </div>
                    <div className="basics">
                      <p className="basic-details">Profile Type</p>
                    </div>
                    <div className="form-containers">
                      <form className="for-search-criterias">
                        <label className="label-boxs">
                          Profiles with Photo
                        </label>
                        <input
                          type="checkbox"
                          style={{ height: "20px", marginLeft: "260px" }}
                        ></input>
                        <label
                          style={{
                            fontSize: "16px",
                            marginTop: "-25px",
                            marginLeft: "10px",
                          }}
                        >
                          Matches who have added photos
                        </label>
                        <br></br>
                        <br />
                        <br></br>
                        <label className="label-boxs">
                          Don't show profiles
                        </label>
                        <select className="boxs-selects">
                          <option>Shortilised</option>
                          <option>Ignore</option>
                          <option>Already Viewed</option>
                        </select>
                        <br></br>
                        <br />
                        <br></br>
                        <div className="footer-part">
                        <h4>4 matches based on your search criteria</h4>
                        <div className="buttons">
                          <button className="btn-clr">Clear all</button>
                          <button className="btn-save">Save & Search</button>
                          <button className="btn-search">Search</button>
                        </div>
                      </div>
                      </form>
                      {/* <div className="footer-part">
                        <h4>4 matches based on your search criteria</h4>
                        <div className="buttons">
                          <button className="btn-clr">Clear all</button>
                          <button className="btn-save">Save & Search</button>
                          <button className="btn-search">Search</button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searcritiria;
