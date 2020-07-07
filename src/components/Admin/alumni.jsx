import React, { Component } from "react";
import Pagination from "./Pagination";
import _ from "lodash";
import paginate from "./paginate";
import axios from "axios";
class Alumni extends Component {
  state = {
    alumniList: [],
    currentPage: 1,
    pageSize: 5,
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/users`, this.state.user).then((res) => {
      if (res.data) {
        const alumniList = res.data;
        this.setState({ alumniList });
      } else {
        console.log(" error");
      }
    });
  }

  handlePageChange = (page) => this.setState({ currentPage: page });

  handleDeactivate = (alumni_id) => {
    axios.get("http://localhost:3000/users/deactivate/" + alumni_id);
  };
  handleActivate = (alumni_id) => {
    axios.get("http://localhost:3000/users/activate/" + alumni_id);
  };

  render() {
    const { alumniList, currentPage, pageSize } = this.state;
    const count = alumniList.length;
    const alumni = paginate(alumniList, currentPage, pageSize);
    return (
      <div>
        {!alumniList.length ? (
          <h4>No Alumni to Display</h4>
        ) : (
          <div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Year of passing </th>
                  <th scope="col">Active Status</th>
                </tr>
              </thead>
              <tbody>
                {alumni.map((a, i) => (
                  <tr>
                    {/* <th scope="row">{i + 1}</th> */}
                    <td>{a.first_name}</td>
                    <td>{a.email}</td>
                    <td>{a.Branch}</td>
                    <td>{a.year_of_passing}</td>
                    <td>
                      {a.is_active ? (
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => this.handleDeactivate(a.id)}
                        >
                          Dactivate
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.handleActivate(a.id)}
                        >
                          Activate
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPagechange={this.handlePageChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Alumni;
