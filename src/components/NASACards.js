import React, { Component } from "react";
import NASACard from "./NASACard.js";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import moment from "moment";

export class NASACards extends Component {
  constructor(props) {
    super(props);
    const apiKey = ''
    this.state = {
      count: 10,
      data: null,
      startDate: null,
      endDate: null,
      url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
    };
  }

  fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .catch((error) => console.log("the error is", error));
  }

  componentDidMount() {
    this.fetchData(
      `${this.state.url}&count=${this.state.count}`
    );
  }

  handleSearchDateRangePictures() {
    const startDate = moment(this.state.startDate).format("YYYY-MM-DD");
    const endDate = moment(this.state.endDate).format("YYYY-MM-DD");
    this.setState({ data: null }, () => {
      this.fetchData(
        `${this.state.url}&start_date=${startDate}&end_date=${endDate}`
      );
    });
  }

  showDatePicker() {
    return (
      <div>
        <Divider />
        <p>Find pictures within a certain date range</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            direction="row"
            mb={5}
          >
            <DatePicker
              label="Start date"
              value={this.state.startDate}
              onChange={(value) => {
                this.setState({ startDate: value });
              }}
              renderInput={(params) => <TextField {...params} />}
              format="YYYY-MM-DD"
            />
            <DatePicker
              label="End date"
              value={this.state.endDate}
              onChange={(value) => {
                this.setState({ endDate: value });
              }}
              renderInput={(params) => <TextField {...params} />}
              format="YYYY-MM-DD"
            />
            <Button
              onClick={() => {
                this.handleSearchDateRangePictures();
              }}
              variant="contained"
            >
              Search
            </Button>
          </Stack>
        </LocalizationProvider>
      </div>
    );
  }

  showNASACards() {
    return (
      <div>
        {!this.state.data && <p>Fetching images from NASA...</p>}
        {!Array.isArray(this.state.data) && this.state.data && (
          <p>Error occurred</p>
        )}
        {Array.isArray(this.state.data) && this.state.data && (
          <Grid container spacing={2}>
            {this.state.data.map((d) => (
              <Grid item xs={4}>
                <NASACard key={d.title} d={d}></NASACard>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    );
  }

  render() {
    return (
      <div style={{ padding: "3%" }}>
        {this.showDatePicker()} {this.showNASACards()}
      </div>
    );
  }
}

export default NASACards;
