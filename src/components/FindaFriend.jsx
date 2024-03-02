import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.css';
import { PetList } from "./petList";

function FindAFriend() {
  return (
    <div id="padded-content">
      <div>
        <div className="container text-center mt-5">
          <h1>Give them a furever home</h1>
          <i className="bi bi-chevron-compact-down fs-1"></i>
        </div>
        <div className="container text-center mt-5 ">
          <PetList />
        </div>
      </div>
    </div>
  );
}

export default FindAFriend;
