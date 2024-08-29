import React, { useState } from 'react'

const data = [
    {
        header: 'Accordion1',
        content: 'First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content '
    },
    {
        header: 'Accordion2',
        content: 'First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content '
    },
    {
      header: 'Accordion3',
      content: 'First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content First accordion content '
    },
]

const Accordion = () => {
  const [showIndex, setShowIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    console.log(index);
    setShowIndex((prev) => prev === index ? -1 : index);
  }

  return (
    <div className='accordion-ctr'>
      {
        data.length>0 && data.map((d, idx) => (
          <div key={idx} className='accordion-body' onClick={() => handleAccordionClick(idx)}>
            <p className='accordion-header'>{d.header}</p>
            {(showIndex === idx) && <p className='accordion-content'>{d.content}</p>}
          </div>
        ))
      }
    </div>
  )
}

export default Accordion