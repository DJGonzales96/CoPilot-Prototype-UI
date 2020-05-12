
import React from "react";
import PropTypes from "prop-types";

import "./splashScreen.css";

class SplashScreen extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="2f5c64da-11c8-4a42-b2a3-b2fd638a3779" className="splashScreen">        <svg data-layer="a8d5c037-2030-4815-ad7c-c13adc050eca" preserveAspectRatio="none" viewBox="-0.75 -0.75 338.5 776.5" className="swatchMidBlue"><path d="M 337 658.2721557617188 C 337 662.7283325195313 337 667.1845703125 336.9888000488281 671.6473388671875 C 336.9803161621094 675.399658203125 336.9607238769531 679.15185546875 336.915771484375 682.9042358398438 C 336.8202819824219 691.0739135742188 336.6096496582031 699.32763671875 335.9777526855469 707.4071044921875 C 335.3374328613281 715.61572265625 334.2927856445313 723.255859375 332.6387023925781 730.7152099609375 C 331.0182495117188 738.0390014648438 328.9007568359375 744.7427978515625 326.3732604980469 750.5552368164063 C 323.8457336425781 756.3677368164063 320.9279174804688 761.2437744140625 317.7432250976563 764.97021484375 C 314.50244140625 768.7677612304688 311.1829833984375 771.1766357421875 307.6136169433594 772.649169921875 C 304.0975646972656 774.102294921875 300.5113525390625 774.586669921875 296.9559326171875 774.8063354492188 C 295.321533203125 774.9096069335938 293.6898803710938 774.9483642578125 292.0582580566406 774.9742431640625 C 290.1204833984375 775 288.1827392578125 775 286.2449951171875 775 L 73.01667022705078 775 L 50.7578125 775 C 48.82007217407227 775 46.88231658935547 775 44.9445686340332 774.9742431640625 C 43.31011581420898 774.9483642578125 41.67847442626953 774.9096069335938 40.04683303833008 774.8063354492188 C 36.49148178100586 774.586669921875 32.90524673461914 774.102294921875 29.38920783996582 772.649169921875 C 25.8198184967041 771.1766357421875 22.5003662109375 768.7677612304688 19.25955009460449 764.97021484375 C 16.07209205627441 761.2437744140625 13.15704154968262 756.3677368164063 10.62954139709473 750.5552368164063 C 8.102042198181152 744.7427978515625 5.984559059143066 738.0390014648438 4.36134147644043 730.7152099609375 C 2.710041522979736 723.255859375 1.66534161567688 715.61572265625 1.022233247756958 707.4071044921875 C 0.3903582990169525 699.32763671875 0.1825416684150696 691.0739135742188 0.08705833554267883 682.9042358398438 C 0.04212500154972076 679.15185546875 0.02246666885912418 675.399658203125 0.01404166594147682 671.6473388671875 C -1.141800412898797e-17 667.1845703125 0 662.7283325195313 0 658.2721557617188 L 0 607.0833740234375 L 0 167.9166717529297 L 0 116.727912902832 C 0 112.2716751098633 0 107.8089599609375 0.01404166594147682 103.3591613769531 C 0.02246666885912418 99.60041809082031 0.04212500154972076 95.84812927246094 0.08705833554267883 92.09583282470703 C 0.1825416684150696 83.91959381103516 0.3903582990169525 75.67229461669922 1.022233247756958 67.58646392822266 C 1.66534161567688 59.37792205810547 2.710041522979736 51.74417114257813 4.36134147644043 44.28479385375977 C 5.984559059143066 36.95458602905273 8.102042198181152 30.25083351135254 10.62954139709473 24.44479370117188 C 13.15704154968262 18.6258373260498 16.07209205627441 13.75625133514404 19.25955009460449 10.02979278564453 C 22.5003662109375 6.232292175292969 25.8198184967041 3.823333501815796 29.38920783996582 2.350833415985107 C 32.90524673461914 0.8977082967758179 36.49148178100586 0.4133333563804626 40.04683303833008 0.1937499940395355 C 41.67847442626953 0.09041666984558105 43.31011581420898 0.05166666954755783 44.9445686340332 0.02583333477377892 C 46.88231658935547 1.912772403803375e-42 48.82007217407227 1.912772403803375e-42 50.7578125 1.912772403803375e-42 L 73.01667022705078 1.912772403803375e-42 L 284.655517578125 1.912772403803375e-42 L 263.9833374023438 0.01937500201165676 L 286.2449951171875 1.912772403803375e-42 C 288.1827392578125 1.912772403803375e-42 290.1204833984375 -7.234084886025352e-16 292.0582580566406 0.02583333477377892 C 293.6898803710938 0.05166666954755783 295.321533203125 0.09041666984558105 296.9559326171875 0.1937499940395355 C 300.5113525390625 0.4133333563804626 304.0975646972656 0.8977082967758179 307.6136169433594 2.350833415985107 C 311.1829833984375 3.823333501815796 314.50244140625 6.232292175292969 317.7432250976563 10.02979278564453 C 320.9279174804688 13.75625133514404 323.8457336425781 18.6258373260498 326.3732604980469 24.44479370117188 C 328.9007568359375 30.25083351135254 331.0182495117188 36.95458602905273 332.6387023925781 44.28479385375977 C 334.2927856445313 51.74417114257813 335.3374328613281 59.37792205810547 335.9777526855469 67.58646392822266 C 336.6096496582031 75.67229461669922 336.8202819824219 83.91959381103516 336.915771484375 92.09583282470703 C 336.9607238769531 95.84812927246094 336.9803161621094 99.60041809082031 336.9888000488281 103.3591613769531 C 337 107.8089599609375 337 112.2716751098633 337 116.727912902832 L 337 167.9166717529297 L 337 607.0833740234375 L 337 658.2721557617188 Z"  /></svg>
        <svg data-layer="592553e2-ee0d-4c3d-85d2-0afe1b61162f" preserveAspectRatio="none" viewBox="-0.75 -0.75 122.5 127.5" className="swatchDarkBlue"><path d="M 120.9999923706055 107.0223007202148 C 120.9999923706055 107.7467956542969 120.9999923706055 108.471305847168 120.995964050293 109.1968536376953 C 120.9929275512695 109.8069152832031 120.9858856201172 110.4169540405273 120.9697494506836 111.0270080566406 C 120.9354629516602 112.3552474975586 120.8598327636719 113.6971435546875 120.6329574584961 115.0106964111328 C 120.4030532836914 116.3452606201172 120.0279693603516 117.58740234375 119.4340591430664 118.8001480102539 C 118.8522415161133 119.990852355957 118.0919570922852 121.0807647705078 117.1844482421875 122.0257568359375 C 116.2769546508789 122.9707565307617 115.2293090820313 123.7635040283203 114.0858383178711 124.3693542480469 C 112.9222259521484 124.9867553710938 111.7303848266602 125.3783950805664 110.4487915039063 125.6177978515625 C 109.1863555908203 125.8540573120117 107.8987274169922 125.9328079223633 106.6221618652344 125.9685134887695 C 106.0353164672852 125.9853057861328 105.4494781494141 125.9916000366211 104.863639831543 125.9958114624023 C 104.1678848266602 126 103.4721298217773 126 102.7763824462891 126 L 26.21666717529297 126 L 18.2246150970459 126 C 17.52886581420898 126 16.83311653137207 126 16.13736534118652 125.9958114624023 C 15.55051612854004 125.9916000366211 14.96467399597168 125.9853057861328 14.37883281707764 125.9685134887695 C 13.10228157043457 125.9328079223633 11.81464195251465 125.8540573120117 10.55220794677734 125.6177978515625 C 9.27061653137207 125.3783950805664 8.078765869140625 124.9867553710938 6.915149688720703 124.3693542480469 C 5.770691871643066 123.7635040283203 4.72404146194458 122.9707565307617 3.816541433334351 122.0257568359375 C 2.9090416431427 121.0807647705078 2.148758411407471 119.990852355957 1.565941572189331 118.8001480102539 C 0.9730415344238281 117.58740234375 0.5979416370391846 116.3452606201172 0.3670333027839661 115.0106964111328 C 0.1401583105325699 113.6971435546875 0.06554166227579117 112.3552474975586 0.03125833347439766 111.0270080566406 C 0.01512499991804361 110.4169540405273 0.008066666312515736 109.8069152832031 0.005041666328907013 109.1968536376953 C -4.099639464710814e-18 108.471305847168 0 107.7467956542969 0 107.0223007202148 L 0 98.70001220703125 L 0 27.30000305175781 L 0 18.97770118713379 C 0 18.25320243835449 0 17.52765083312988 0.005041666328907013 16.80420112609863 C 0.008066666312515736 16.19309997558594 0.01512499991804361 15.58305072784424 0.03125833347439766 14.97300052642822 C 0.06554166227579117 13.64370155334473 0.1401583105325699 12.3028507232666 0.3670333027839661 10.98825073242188 C 0.5979416370391846 9.653700828552246 0.9730415344238281 8.412600517272949 1.565941572189331 7.199850082397461 C 2.148758411407471 6.008100509643555 2.9090416431427 4.918200016021729 3.816541433334351 3.974250078201294 C 4.72404146194458 3.028200387954712 5.770691871643066 2.236500263214111 6.915149688720703 1.630650162696838 C 8.078765869140625 1.01324999332428 9.27061653137207 0.6216000318527222 10.55220794677734 0.3822000324726105 C 11.81464195251465 0.1459500044584274 13.10228157043457 0.06720000505447388 14.37883281707764 0.03150000050663948 C 14.96467399597168 0.01470000110566616 15.55051612854004 0.008400000631809235 16.13736534118652 0.004200000315904617 C 16.83311653137207 1.68155815718978e-44 17.52886581420898 1.68155815718978e-44 18.2246150970459 1.68155815718978e-44 L 26.21666717529297 1.68155815718978e-44 L 102.2056732177734 1.68155815718978e-44 L 94.7833251953125 0.003150000236928463 L 102.7763824462891 1.68155815718978e-44 C 103.4721298217773 1.68155815718978e-44 104.1678848266602 -1.176122320270439e-16 104.863639831543 0.004200000315904617 C 105.4494781494141 0.008400000631809235 106.0353164672852 0.01470000110566616 106.6221618652344 0.03150000050663948 C 107.8987274169922 0.06720000505447388 109.1863555908203 0.1459500044584274 110.4487915039063 0.3822000324726105 C 111.7303848266602 0.6216000318527222 112.9222259521484 1.01324999332428 114.0858383178711 1.630650162696838 C 115.2293090820313 2.236500263214111 116.2769546508789 3.028200387954712 117.1844482421875 3.974250078201294 C 118.0919570922852 4.918200016021729 118.8522415161133 6.008100509643555 119.4340591430664 7.199850082397461 C 120.0279693603516 8.412600517272949 120.4030532836914 9.653700828552246 120.6329574584961 10.98825073242188 C 120.8598327636719 12.3028507232666 120.9354629516602 13.64370155334473 120.9697494506836 14.97300052642822 C 120.9858856201172 15.58305072784424 120.9929275512695 16.19309997558594 120.995964050293 16.80420112609863 C 120.9999923706055 17.52765083312988 120.9999923706055 18.25320243835449 120.9999923706055 18.97770118713379 L 120.9999923706055 27.30000305175781 L 120.9999923706055 98.70001220703125 L 120.9999923706055 107.0223007202148 Z"  /></svg>
        <div data-layer="4c8e550b-e911-4ba8-8a22-45d1648e5bfe" className="copilot">COPILOT</div>
        <div data-layer="d611d527-e435-47d8-bc51-6a4f4bf58ea8" className="logo">LOGO</div>
</div>

    );
  }
}

SplashScreen.propTypes = {

}

SplashScreen.defaultProps = {

}


export default SplashScreen;
          