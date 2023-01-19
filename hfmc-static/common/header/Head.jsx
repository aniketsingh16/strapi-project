import React from "react";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left contacts row'>
            <div>
            <i className='fa fa-phone'></i>
            <label> +91 7599 00 1200 </label>
            </div>
            <div>
            <i className='fa fa-envelope'></i>
            <label> support@healthfirstmedicorp.com </label>
            </div>
          </div>
          <div className='right row RText'>
            <label>FAQ's</label>
            <label>Need Help?</label>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
