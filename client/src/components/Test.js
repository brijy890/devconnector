import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ title: "ABC" }, { title: "DCE" }]
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      console.log(response.data);
      this.setState({ data: response.data });
    });
  }

  render() {
    const data = {
      columns: [
        {
          label: "USERID",
          field: "userId",
          sort: "asc",
          width: 150
        },
        {
          label: "ID",
          field: "id",
          sort: "asc",
          width: 270
        },
        {
          label: "TITLE",
          field: "title",
          sort: "asc",
          width: 200
        },
        {
          label: "BODY",
          field: "body",
          sort: "asc",
          width: 100
        }
      ],
      rows: this.state.data
    };

    return <MDBDataTable striped bordered hover data={data} />;
  }
}

export default Test;
