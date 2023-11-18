import React from 'react'

function FAQs_open() {
  return (
    <div className='col-start-2 col-end-4 mr-5'>
    <div className="join join-vertical w-full bg-white">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default FAQs_open