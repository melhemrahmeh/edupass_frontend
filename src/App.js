import './App.css';

import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://edupass-rest-apis.herokuapp.com/api/items/")
      .then((res) => {
        setData(res.data);
        console.log("Result:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  console.log(data);

  return (
    <>
      <div class="panel-body table-responsive-sm">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style={{ 'color': "#535356" }}>Category</th>
              <th style={{ 'color': "#535356" }}>Sub Category</th>
              <th style={{ 'color': "#535356" }}>Name</th>
              <th style={{ 'color': "#535356" }}>Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <>

                <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                  <td style={{ 'color': "#5D5C63" }}>{item.category}</td>
                  <td style={{ 'color': "#5D5C63" }}>{item.subcatgeory}</td>
                  <td style={{ 'color': "#5D5C63" }}>{item.name}</td>
                  <td style={{ 'color': "#5D5C63" }}>{item.amount}</td>
                  {/* <td style={{ 'color': "#5D5C63" }}><button type="button" class="btn btn-danger" onClick={(e) => deleteRow(req._id, e)} >Delete</button></td> */}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

}
