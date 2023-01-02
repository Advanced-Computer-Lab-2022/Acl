import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { useParams ,useState} from 'react-router-dom';
const dropDownItem = ({course}) => {
   
     
    return (
        <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          
                        >
                          {course.subject}
                        </a>
                      </li>
        );

    }
export default dropDownItem;