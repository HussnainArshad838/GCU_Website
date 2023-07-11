import React from 'react';


function RightBlock() {
  return (
    <div className="RightBlock">
    <b>Queries</b><input type="text" placeholder=" " />
    &nbsp;<button type='submit' value='submit'>Submit</button>
          <br /><br />
          <img className='News' src="News.PNG" />

          <p className='MoveText'>
            <b className='Temp'>Information About</b>
            <br />
            <a href="">Financial Aid & Scholarships</a><br />
            <a href="">Prospectus</a><br />
            <a href="">Tendor Notices</a><br />

            <hr />
            <b className='Temp'>Quick Links</b>
            <br />
            <a href="">Chairs at GCU</a><br />
            <a href="">Digital Library</a><br />
            <a href="">Centre for Special Students</a><br />

            <hr />
            <b className='Temp'>Important Links</b>
            <br />
            <a href="">Student Time Table</a><br />
            <a href="">Online Fee Challan</a><br />
            <a href="">Merit Lists</a><br />
            
          </p>
        </div>
  );
}

export default RightBlock;