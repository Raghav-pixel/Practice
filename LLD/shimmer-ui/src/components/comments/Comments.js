import React, { useState } from 'react'
import CommentBox from './CommentBox'
const data = [
    {
        id: 1,
        name: "Raghav",
        comment: "ygduyqubd duqiwd ui d idx i qwxi dc",
        time: "10 july",
        reply: [
            {
                id: 2,
                name: "Ronnie",
                comment: "wqnwe wecw ci cei wec",
                time: "12 july",
                reply: []
            }
        ]
    },
    {
        id: 3,
        name: "Sourav",
        comment: "ygduyqusccbdewd weckj cewj ckejw i qwxi dc",
        time: "23 sep",
        reply: [
            {
                id: 4,
                name: "Rohit",
                comment: "wqnwe wecwecwelc cklc lweclkw ci cei wec",
                time: "12 sep",
                reply: []
            }
        ]
    },
    {
        id: 5,
        name: "Shubham",
        comment: "ygduyqubd dwclk wl welckuqiwd ui d idx i qwxi dc",
        time: "3 oct",
        reply: [
            {
                id: 6,
                name: "Raj",
                comment: "wqnwe qwlk xo;q xwecw ci cei wec",
                time: "2 jan",
                reply: [
                    {
                        id: 4,
                        name: "Rohit",
                        comment: "wqnwe wecwecwelc cklc lweclkw ci cei wec",
                        time: "12 sep",
                        reply: [
                            {
                                id: 8,
                                name: "Rohit",
                                comment: "wqnwe wecwecwelc cklc lweclkw ci cei wec",
                                time: "12 sep",
                                reply: [
                                    {
                                        id: 9,
                                        name: "Rohit",
                                        comment: "wqnwe wecwecwelc cklc lweclkw ci cei wec",
                                        time: "12 sep",
                                        reply: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                name: "Raju",
                comment: "wqdcklmdwlc wedmcow;e mnwe qwlk xo;q xwecw ci cei wec",
                time: "1 jan",
                reply: []
            }
        ]
    }
]

const Comments = () => {
    
  return (
    <div>
        <CommentBox data={data} />
    </div>
  )
}

export default Comments