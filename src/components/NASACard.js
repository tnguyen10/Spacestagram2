import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";

export class NASACard extends Component {
  constructor(props) {
    super(props);
    this.state = {liked:false};
  }

  handleOnLiked() {
    this.setState({liked: !this.state.liked});
  }

  render() {
    return (
      <div>
        <Card sx={{ minWidth: 100 }}>
          <CardMedia
            component="img"
            height="140"
            image={this.props.d.url}
            alt="NASA picture"
            aria-label="NASA picture"
            sx={{ height: 400 }}
          />
          <CardContent sx={{ height: 50 }}>
            <Typography gutterBottom variant="h6" component="div">
              {this.props.d.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.d.date}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites" onClick={() => { this.handleOnLiked() }}>
              {this.state.liked && <FavoriteIcon style={{ color: "#ff3b6c" }} />}
              {!this.state.liked && <FavoriteIcon/>}
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default NASACard;
