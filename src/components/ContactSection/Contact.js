import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyle } from "../BodyStyle";
import img1 from "../../images/port4.jpg";
import { ChipHeading } from "../common/commonComponents";
import FormComponent from "../common/formComponent";

const Contact = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState({
    data: {
      firstname: "",
      lastname: "",
      message: "",
    },
  });

  const handleChange = ({ target }) => {
    const { data } = formData;
    data[target.name] = target.value;
    setFormData({ data: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.data.firstname &&
      formData.data.lastname &&
      formData.data.message
    ) {
      // console.log("formdata", formData.data);
    } else {
      alert("enter something");
    }
  };
  console.log("allentries", formData.data);

  return (
    <Box className={classes.section} style={{ minHeight: "70vh" }} id="Contact">
      <Grid container spacing={6}>
        {/* image */}
        <Grid item xs={12} sm={6}>
          <img src={img1} alt="Contact" className={classes.responsiveImg} />
        </Grid>

        {/* form */}

        <Grid item xs={12} sm={6}>
          {ChipHeading({
            title: "Contact Us",
            color: "secondary",
            variant: "default",
          })}

          <Box my={2}>
            <Typography variant="body" style={{ fontFamily: "inherit" }}>
              If you liked my work , trust me you'll love to work with me.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              // display="flex"
              // direction="row"
              // justifyContent="center"
              // alignItems="center"
            >
              <Grid item xs={12} sm={10}>
                <FormComponent
                  id="firstname"
                  value={formData.data.firstname}
                  label="Enter your First Name"
                  name="firstname"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <FormComponent
                  id="lastname"
                  value={formData.data.lastname}
                  label="Enter your Last Name"
                  name="lastname"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <FormComponent
                  variant="filled"
                  id="message"
                  value={formData.data.message}
                  label="Enter your Message"
                  name="message"
                  onChange={handleChange}
                  multiline="true"
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
