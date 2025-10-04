import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/home.css';
import teaImage1 from '../images/tea1.png';
import teaImage2 from '../images/tea1.png';
import teaImage3 from '../images/tea1.png';
import teaImage4 from '../images/tea1.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <>

      <div className="hero">
        <div className="hero-content">
          <h1>Want To Taste< br />Our Tea?</h1>
          <p>Each tea purchase comnes with organically and <br />ethically grown loose LIYONTA tea, carefully<br /> blended to create the perfect cup. </p>
          <a href="./shop"><button >Shop Now </button></a>
        </div>
      </div>


      <div className="aboutus">
        <div className="aboutus-content">
          <h1 className="titles">About Liyonta Tea</h1>
          <p>
            Each tea purchase comes with organically and ethically grown
            loose LIYONTA tea, carefully blended to create the perfect cup.
            Each tea purchase comes with organically and ethically grown
            loose LIYONTA tea, carefully blended to create the perfect cup.
            Each tea purchase comes with organically and ethically grown
            loose LIYONTA tea, carefully blended to create the perfect cup.
          </p>
          <a href="./aboutus"><button >Read More</button></a>
        </div>
      </div>


      <div className="teavariants">

        <div className="teavariants-content">

          <h1 className="titles">Our Tea Variants</h1>

          <p className="description">Each tea purchase comes with organically and<br />ethically grown loose LIYONTA tea.</p>

          <div className="tea-containers">
            <div className="tea-container" style={{ backgroundImage: `url(${teaImage1})` }}>
              <div className="tea-details">
                <h3 className="tea-name">PEKOE</h3>
                <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
              </div>
            </div>
            <div className="tea-container" style={{ backgroundImage: `url(${teaImage2})` }}>
              <div className="tea-details">
                <h3 className="tea-name">PEKOE</h3>
                <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
              </div>
            </div>
            <div className="tea-container" style={{ backgroundImage: `url(${teaImage3})` }}>
              <div className="tea-details">
                <h3 className="tea-name">PEKOE</h3>
                <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
              </div>
            </div>
            <div className="tea-container" style={{ backgroundImage: `url(${teaImage4})` }}>
              <div className="tea-details">
                <h3 className="tea-name">PEKOE</h3>
                <p className="tea-description">Long tippy leaf, silver in color, with hardly any black leaf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div className="ourachievements">
<center>        <p1>Our Achievements</p1></center>
        <Grid container spacing={0} >
          <center>
            <Grid item xs={12} sm={12} md={6.3}>
              <p>There’s nothing we value more than our dedication to continuously improve the quality of
                our products through our R&D processes. Most of our packaging is made using recyclable
                and environmentally friendly materials. We are an IFS, BRCGS, FSSC 22000, ISO 9001,
                Organic, Kosher, Halaal, Fairtrade certified company.
              </p>
            </Grid>
          </center>
        </Grid>
        <Box sx={{ flexGrow: 1 }} className="ourachievementsbox">


          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={6} sm={6} md={2}>
              <img src="/CEYLONTEA.png" />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <img src="/SGS.png" />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <img src="/SLS.png" />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <img src="/ISO.png" />
            </Grid>
            <Grid item xs={6} sm={10} md={2}>
              <img src="/OZONE.png" />
            </Grid>
          </Grid>

        </Box>
      </div>







    </>

  );

};

export default Home;

