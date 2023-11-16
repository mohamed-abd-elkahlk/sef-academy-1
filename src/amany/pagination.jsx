import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink,MDBCardBody } from 'mdb-react-ui-kit';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const pagination = () => {
  return (
     <MDBCardBody className='bg1 p-5 w-100 d-flex flex-column' style={{ backgroundColor: 'black' }}>
      <nav aria-label='Page navigation example' >
          <MDBPagination className='mb-0 bg1'>
            
            <MDBPaginationItem className='pagination-color'>
              <MDBPaginationLink  href='#'><IoIosArrowDropleft className='pagin' /></MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>2</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'><IoIosArrowDropright /></MDBPaginationLink>
              </MDBPaginationItem>
           
        </MDBPagination>
        </nav>
        </MDBCardBody>
   
  )
}

export default pagination