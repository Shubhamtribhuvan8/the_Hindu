import React from "react";
import Title from "./TheHindu/Title";
import "./Home.css";
import Scroll from "./TheHindu/Scroll";
import Footer from "./Footes";
function Home(props) {
  let name = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    gap: "40px",
  };
  return (
    <div>
      {/* Part :B */}
      <div className="three-line" style={name}>
        <div className="a">
          <h1 className="title-patch">Premium</h1>
          <div className="news1">
            <p>
              Data | From 5% to 15%, China’s share in India’s imports tripled in
              last two decades
            </p>
            <br />
            <p>
              Premium Data | From 5% to 15%, China’s share in India’s imports
              tripled in last two decades A betrayal of the very idea of the
              Mahatma, writes Shashi Tharoor
            </p>
            <br />
            <p>
              How the Gayatri Mantra, composed by men, heard by men, for a male
              deity, became embodied as a goddess
            </p>
            <br />
            <p>
              Tripura polls | Tipra Motha not to ally with anyone: Party chief
              Debbarma
            </p>
            <br />
            <p>
              Terrorist, externally-funded PFI has significant presence in T.N.,
              Governor R.N. Ravi says in his R-Day message
            </p>
            <br />
            <p>
              Are remote voting machines (RVMs) the best way to enable migrants
              to vote? | In Focus podcast
            </p>
            <p>
            Fake marks card racket busted, 5 institutions raided
            </p>
          </div>
        </div>
        <div className="b">
          <div className="element">
            <h1 style={{ fontWeight: "bold" }}>
              India notifies Pakistan on “modification” of Indus Waters Treaty
            </h1>
            <p>
              After senior police officials briefed him, Congress leader Rahul
              Gandhi decided to travel in a car to Khanabal, his next stop
              before he heads to Srinagar on January 28
            </p>
            <p>PEERZADA ASHIQ</p>
            <br />
            <img
              src="https://th-i.thgim.com/public/incoming/zdr0wv/article66439259.ece/alternates/LANDSCAPE_960/6751_27_1_2023_14_29_25_3_25_BHARATJODOYATRA_SGR_27_01_2023.JPG"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              width: "100%",
              fontSize: "x-large",
              gap: "30px",
            }}
          >
            <div style={{ width: "50%" }}>
              <p>
                India notifies Pakistan on “modification” of Indus Waters Treaty
              </p>
              <img
                src="https://th-i.thgim.com/public/incoming/ck6urt/article66438833.ece/alternates/LANDSCAPE_435/indus.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "50%" }}>
              <p>
                Adani Enterprises kicks off secondary share sale; stocks
                continue to fall after Hindenburg report
              </p>
              <p>
                BBC documentary on PM Modi screened at Hyderabad University
                again, ABVP counters it by screening ‘Kashmir Files’
              </p>
            </div>
          </div>
        </div>
        <div className="c">
          <h1 className="title-patch">Latest News</h1>
          <div className="news1" >
            <p>
            Syria to blame for 2018 chlorine attack: watchdog
            </p>
            <br />
            <p>
            Thai ruling party names deputy PM as main election candidate
            </p>
            <br />
            <p>
            India proposes to develop 130 model villages along LAC: Lt. General Kalita
            </p>
            <br />
            <p>
            Fiji suspends national police chief
            </p>
            <br />
            <p>
            Indian-American astronaut nominated by President Biden for appointment to grade of an Air Force brigadier general
            </p>
            <br />
            <p>
            India sends notice to Pakistan to amend 1960 Indus Water Treaty
            </p>
            <br />
            <p>
            12 cheetahs from South Africa to arrive in India by February-end
            </p>
            <br />
            <p>
            IPS officer R. Dhinakaran moves Central Administrative Tribunal challenging denial of promotion 
            </p>
          </div>
        </div>
      </div>

      {/* Part :B */}
      <div className="partb">
        <div style={{ width: "25%" }}>
          <img
            src="https://www.thehindu.com/theme/images/th-online/editorial-logo-New.png"
            alt=""
          />
          <p style={{ fontSize: "17px" }}>READ OUR EDITORIALS IN</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "50%",
            }}
          >
            <button
              style={{ width: "47px", height: "34px", borderRadius: "28%" }}
            >
              A
            </button>
            <button
              style={{ width: "47px", height: "34px", borderRadius: "28%" }}
            >
              {" "}
              &
            </button>
            <button
              style={{ width: "47px", height: "34px", borderRadius: "28%" }}
            >
              #
            </button>
            <button
              style={{ width: "47px", height: "34px", borderRadius: "28%" }}
            >
              @
            </button>
          </div>
        </div>
        <div
          style={{
            width: "25%",
            fontSize: "x-large",
            fontWeight: "bold",
            fontFamily: "Merriweather,serif",
          }}
        >
          <p>Portentous overkill: On the BBC documentary on PM Modi</p>
        </div>
        <div
          style={{
            width: "25%",
            fontSize: "x-large",
            fontWeight: "bold",
            fontFamily: "Merriweather,serif",
          }}
        >
          <p>Portentous overkill: On the BBC documentary on PM Modi</p>
        </div>
      </div>
      <h1 className="title-patch">Top Pics</h1>
       <Scroll/>
       <br/>
               {/* The Hindu Opinion */}

                 <h1 className="title-patch" style={{textAlign:"center"}}>The Hindu Opinion</h1>
                 <div style={{display:"flex",justifyContent:"center",gap:"10px"}}> 
                  <img src="https://www.thehindu.com/theme/images/th-online/h-circle-yellow-new.svg" alt="" style={{width:"25px",height:"25px"}} />
                  <p> PREMIUM</p>
                 </div>
               
               <div className="gandi" style={{display:"flex",alignItems:"center",gap: "14px",fontWeight: "bold",fontSize: "x-large",width:"100%"}} >
                {/* 1 */}
                 <div className="one">
                 <p>A betrayal of the very idea of the Mahatma</p>
                  <img src="https://th-i.thgim.com/public/incoming/br6j5x/article66436845.ece/alternates/LANDSCAPE_320/IMG_11YT_Page_6_Gandhi_W_2_1_A7AFA30J.jpg" alt="" style={{width:"262px",height:"174px"}} /> 
                 <br/>
                <h6>SHASHI THAROOR</h6> 
                 </div>
                {/* 2 */}
                 <div className="one1">
                 <p>The blurred lines between gaming and gambling</p>
                 <h6>AROON DEEP</h6>
                 <p>Is there a level playing field for Indian sportswomen?</p>
                 <h6>N. SUDARSHAN</h6>
                 </div>
                {/* 3 */}
                 <div className="one2">
                 <img src="https://th-i.thgim.com/public/incoming/cj8696/article66432236.ece/alternates/LANDSCAPE_320/2023-01-25T113430Z_26692283_RC2NXY9P1D9Z_RTRMADP_3_PAKISTAN-RUPEE-DEPRECIATION.JPG" alt="" style={{width:"262px",height:"174px"}} /> 
                 <p>Contesting the hegemony of the dollar</p>
                 <h6>ANURADHA M. CHENOY</h6>
                 </div>
                 {/* 4 */}
                 <div className="one3">
                    <p>A ‘Holocaust education’ for India to create a just present</p>
                    <h6>NAOR GILON,PHILIPP ACKERMANN ,HEZEKIEL DLAMINI</h6>
                    <p>Where small parties play a big role</p>
                    <h6>RAVI REDDY</h6>
                 </div>
               </div>
               <h3 style={{textAlign:"center"}}>See More:</h3>
               <br />
               <br />
               
               <div className="Toppics3">
               <div class="gfg2">
               <img src="https://th-i.thgim.com/public/incoming/bnbec/article66433751.ece/alternates/LANDSCAPE_1200/SPOTLIGHT_WRESTLING.jpg" alt="" style={{width:"100%"}} className="blur"/>
               <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} > 
                  <img src="https://www.thehindu.com/theme/images/th-online/h-circle-yellow-new.svg" alt="" style={{width:"46px",height:"101px"}} class="first-txt4" />
                  <h3 class="first-txt2">Featured</h3>
                 </div>
             
                <br />
                <h3 class="first-txt1">The strength and struggles of Haryana’s women wrestlers</h3>
               </div>
               </div>
              <Footer/>
    </div>
  );
}

export default Home;
